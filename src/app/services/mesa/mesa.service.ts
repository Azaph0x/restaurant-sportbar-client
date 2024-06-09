import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mesa, mesaStatus } from '../../models/mesa';
import { MesaStore } from './mesa.store';

export abstract class MesaService {

  constructor(private mesaStore: MesaStore) { }

  getMesa(): Observable<Mesa | null> {
    return this.mesaStore.getMesa();
  }

  public useMesa(mesa: Mesa) {
    this.mesaStore.updateMesa({
       id: mesa.id,
       nome: mesa.nome,
        ativa: false,
      produtos: []
    });
  }

  public updateMesa(changes: Partial<Mesa>) {
    this.mesaStore.updateMesa({
      ...changes
    })
  }
}
