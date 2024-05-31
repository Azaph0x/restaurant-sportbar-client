import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { Observable, Subject, takeUntil, tap } from 'rxjs';
import { ClientDataModalComponent } from 'src/app/components/client-data-modal/client-data-modal.component';
import { Mesa, Produto, mesaStatus } from 'src/app/models/mesa';
import { MesaService } from 'src/app/services/mesa/mesa.service';
import { ProdutoService } from 'src/app/services/produto/produto.service';

@Component({
  selector: 'app-mesa',
  templateUrl: './mesa.component.html',
  styleUrls: ['./mesa.component.scss'],
})
export class MesaComponent  implements OnInit, OnDestroy {

  mesaInUse!: Mesa;

  pedidos: Produto[] = [];
  id!: number;

  constructor(
    private mesaService: MesaService,
    private navController: NavController,
    private produtoService: ProdutoService,
    private activedRoute: ActivatedRoute,
    private modalController: ModalController
  ) { }

  subject: Subject<any> = new Subject();
  produtos$!: Observable<Produto[]>;

  ngOnInit() {
    const params = this.activedRoute.snapshot.params;
    if(params['id']) {
      this.id = params['id'];

    } else {
      this.navController.navigateForward(['']);
      return;
    }
;    this.produtos$ = this.produtoService.getProdutos().pipe(takeUntil(this.subject));
  }

  async openConfigClient(mesa: mesaStatus) {
    const modal = await this.modalController.create({
       component: ClientDataModalComponent,
       mode: 'ios',
       initialBreakpoint: 0.8
     })
     modal.present()
     await modal.onDidDismiss().then((r) => {
       if(r.data) {
          this.mesaService.useMesa({
            id: this.id,
            ativa: true,
            nome: r.data.nome
          })

          this.navController.navigateForward(['mesa']);
       }
     })
   }

  addValue(pedido: Produto) {
    this.pedidos.push(pedido);
  }

  getTotal() {
    return this.pedidos.map(p => p.valor).reduce((total, atual) => total + atual, 0)
  }

  remove(product: Produto) {
    const index = this.pedidos.indexOf(product);
    if (index !== -1) {
      this.pedidos.splice(index, 1);
    }
  }

  isProduct(product: Produto): boolean {
    return this.pedidos.find(p => p.id == product.id) ? true : false;
  }

  ngOnDestroy(): void {
      this.subject.next(0);
      this.subject.complete();
  }

}
