import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientDataModalComponent } from './client-data-modal/client-data-modal.component';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderMainComponent } from './header-main/header-main.component';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';



@NgModule({
  declarations: [ClientDataModalComponent, HeaderMainComponent],
  exports: [ClientDataModalComponent, HeaderMainComponent],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    NgxMaskDirective
  ],
  providers: [
    provideNgxMask()
  ],
})
export class ComponentsModule { }
