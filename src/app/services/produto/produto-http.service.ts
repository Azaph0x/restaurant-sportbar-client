import { Injectable } from '@angular/core';
import { Produto } from 'src/app/models/mesa';
import { ProdutoService } from './produto.service';
import { Observable, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class ProdutoHttpService extends ProdutoService {
  constructor(
    private http: HttpClient
  ) { super(); }

  getProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${environment.api}/produtos/`).pipe(
      map((r) => {
        return r.map((r) => {
          r.valor = Number(r.valor);
          return r;
        })
      })
    )
  }
}
