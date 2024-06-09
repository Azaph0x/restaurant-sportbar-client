import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagesPageRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { MesaComponent } from './mesa/mesa.component';
import { ResumoComponent } from './resumo/resumo.component';
import { HeaderMainComponent } from '../components/header-main/header-main.component';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [
    HomeComponent,
    MesaComponent,
    ResumoComponent
  ]
})
export class PagesPageModule {}
