import { Injectable } from '@angular/core';
import { MesaService } from './mesa.service';
import { MesaStore } from './mesa.store';

@Injectable()
export class MesaMockService extends MesaService {

  constructor(mesaStore: MesaStore) { super(mesaStore); }

}
