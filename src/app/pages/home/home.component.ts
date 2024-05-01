import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ClientDataModalComponent } from 'src/app/components/client-data-modal/client-data-modal.component';
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
    private navController: NavController,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.mesas$ = this.mesaService.getMesas();
  }

  async selectionarMesa(mesa: mesaStatus) {
    // if(!mesa.ativa) return;
    this.openConfigClient(mesa)
  }

  async openConfigClient(mesa: mesaStatus) {
    const modal = await this.modalController.create({
       component: ClientDataModalComponent,
       mode: 'ios',
       initialBreakpoint: 0.8
     })
     modal.present()
     await modal.onDidDismiss().then((r) => {
       console.log(r)
       if(r.data) {
         this.mesaService.useMesa(mesa);

         this.navController.navigateForward(['mesa']);
       }
     })
   }

}
