import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, takeUntil, tap } from 'rxjs';
import { Mesa, Produto } from 'src/app/models/mesa';
import { MesaService } from 'src/app/services/mesa/mesa.service';

@Component({
  selector: 'app-resumo',
  templateUrl: './resumo.component.html',
  styleUrls: ['./resumo.component.scss'],
})
export class ResumoComponent  implements OnInit, OnDestroy {

  constructor(
    private mesaService: MesaService
  ) { }

  mesa!: Mesa | null;

  subject: Subject<any> = new Subject();
  total: number = 0;

  ngOnInit() {
    this.mesaService.getMesa().pipe(
      takeUntil(this.subject),
      tap((r) => {
        this.mesa = r;
        if(r) {
            console.log(this.groupItems(r.produtos))
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

}
