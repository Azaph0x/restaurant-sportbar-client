import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable, Subject, takeUntil, tap } from 'rxjs';
import { Mesa, Produto } from 'src/app/models/mesa';
import { MesaService } from 'src/app/services/mesa/mesa.service';
import { PedidoService } from 'src/app/services/pedido/pedido.service';

@Component({
  selector: 'app-resumo',
  templateUrl: './resumo.component.html',
  styleUrls: ['./resumo.component.scss'],
})
export class ResumoComponent  implements OnInit, OnDestroy {

  constructor(
    private mesaService: MesaService,
    private navCtrl: NavController,
    private pedidoService: PedidoService
  ) { }

  mesa!: Mesa | null;

  subject: Subject<any> = new Subject();
  total: number = 0;

  ngOnInit() {
    this.mesaService.getMesa().pipe(
      takeUntil(this.subject),
      tap((r) => {
        if(r) {
            this.mesa = r;
            console.log(r)
            this.mesa?.produtos.forEach(i => {
            this.total = this.total + i.valor;
          })
        }
      })
    ).subscribe()
  }

  ngOnDestroy(): void {
    this.subject.next(0);
    this.subject.complete();
  }

  groupItems(items: Produto[]) {
    return items.reduce((acc: Produto[], item) => {
      const existIteIndex = acc.findIndex((ii: any) => ii.id == item.id)

      if(existIteIndex !== -1) {
        if(!acc[existIteIndex].qnt) {
          acc[existIteIndex].qnt = 0;
        }
        acc[existIteIndex].qnt!++;
      } else {
        acc.push({
          nome: item.nome,
          id: item.id,
          valor: item.valor,
          ativo: item.ativo,
          tempo: item.tempo,
          descricao: item.descricao,
          qnt: 1
        })
      }

      return acc;
    }, [])
  }

  back() {
    this.navCtrl.back()
  }

  finish() {
    if(this.mesa) {
      this.pedidoService.createOrder({
        id: this.mesa.id,
        produtos: this.groupItems(this.mesa.produtos),
        pessoas: this.mesa.pessoas,
        ativa: true,
        nome: this.mesa.nome,
      }).pipe(
        tap((r) => {
          this.navCtrl.navigateForward(['sucesso'])
        })
      )
      .subscribe()
    }

  }

}
