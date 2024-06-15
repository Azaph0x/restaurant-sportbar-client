import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mesa, mesaStatus } from '../../models/mesa';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(
    private http: HttpClient
  ) { }

  createOrder(mesa: Mesa) {
    console.log(mesa)
    const newList: any = [];
    mesa.produtos.forEach((p) => {
      newList.push({
        produto_id: p.id,
        quantidade: p.qnt,
      })
    })
    return this.http.post(`${environment.api}/pedidos/`, {
      id: mesa.id,
      nome: mesa.nome,
      ativa: true,
      pessoas: mesa.pessoas,
      produtos: newList
    })
  }
}
