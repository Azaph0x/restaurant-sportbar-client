import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Mesa, Produto } from '../../models/mesa';

@Injectable({
  providedIn: 'root'
})
export class MesaStore {

  private subject: BehaviorSubject<Mesa | null> = new BehaviorSubject<Mesa | null>(null);
  private mesa$: Observable<Mesa | null> = this.subject.asObservable();

  constructor() { }

  getMesa(): Observable<any> {
    return this.mesa$;
  }

  updateMesa(mesaChanges: Partial<Mesa>) {
    const mesa = {
      ...this.subject.value!,
      ...mesaChanges
    };
    this.subject.next(mesa);
  }

  addProduct(product: Produto) {
    if(this.subject.value != null) {
      const old = {
        ...this.subject.value,
      }

      old.produtos.push(product);
      this.subject.next(old);
    }

  }
}
