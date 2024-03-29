import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable, Subject, takeUntil, tap } from 'rxjs';
import { Mesa, Produto } from 'src/app/models/mesa';
import { MesaService } from 'src/app/services/mesa/mesa.service';
import { ProdutoService } from 'src/app/services/produto/produto.service';

@Component({
  selector: 'app-mesa',
  templateUrl: './mesa.component.html',
  styleUrls: ['./mesa.component.scss'],
})
export class MesaComponent  implements OnInit, OnDestroy {

  mesaInUse!: Mesa;

  constructor(
    private mesaService: MesaService,
    private navController: NavController,
    private produtoService: ProdutoService
  ) { }

  subject: Subject<any> = new Subject();
  produtos$!: Observable<Produto[]>;

  ngOnInit() {
   this.mesaService.getMesa().pipe(
      takeUntil(this.subject),
      tap((r) => {
        if(r == null) {
          this.navController.navigateForward(['']);
          return;
        }
        this.mesaInUse = r;
      })
    ).subscribe();
    this.produtos$ = this.produtoService.getProdutos().pipe(takeUntil(this.subject));
  }

  ngOnDestroy(): void {
      this.subject.next(0);
      this.subject.complete();
  }

}
