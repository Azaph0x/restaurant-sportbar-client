import { Injectable } from '@angular/core';
import { MesaService } from './mesa.service';
import { Observable, of } from 'rxjs';
import { mesaStatus } from '../../models/mesa';
import { MesaStore } from './mesa.store';

@Injectable()
export class MesaMockService extends MesaService {

  mesas: mesaStatus[] = [
    {
      nome: 'Mesa 1',
      id: 1,
      ativa: true
    },
    {
      nome: 'Mesa 2',
      id: 2,
      ativa: true
    },
    {
      nome: 'Mesa 3',
      id: 1,
      ativa: false
    },
    {
      nome: 'Mesa 4',
      id: 1,
      ativa: true
    },
    {
      nome: 'Mesa 5',
      id: 1,
      ativa: true
    },
    {
      nome: 'Mesa 6',
      id: 1,
      ativa: true
    }
  ]

  constructor(mesaStore: MesaStore) { super(mesaStore); }

  public override getMesas(): Observable<mesaStatus[]> {
    return of(this.mesas);
  }
}
