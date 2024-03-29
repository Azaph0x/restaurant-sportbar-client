import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { mesaStatus } from 'src/app/models/mesa';
import { MesaService } from 'src/app/services/mesa/mesa.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  implements OnInit {

  mesas$!: Observable<mesaStatus[]>;

  constructor(
    private mesaService: MesaService,
    private navController: NavController
  ) { }

  ngOnInit() {
    this.mesas$ = this.mesaService.getMesas();
  }

  selectionarMesa(mesa: mesaStatus) {
    if(!mesa.ativa) return;
    this.mesaService.useMesa(mesa);
    this.navController.navigateForward(['mesa']);
  }

}
