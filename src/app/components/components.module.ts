import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientDataModalComponent } from './client-data-modal/client-data-modal.component';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ClientDataModalComponent],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule
  ]
})
export class ComponentsModule { }
