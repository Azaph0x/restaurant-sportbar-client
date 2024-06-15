import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MesaComponent } from './mesa/mesa.component';
import { ResumoComponent } from './resumo/resumo.component';
import { SucessoComponent } from './sucesso/sucesso.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'mesa/:id',
    component: MesaComponent
  },
  {
    path: 'sucesso',
    component: SucessoComponent
  },
  {
    path: 'resumo',
    component: ResumoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesPageRoutingModule {}
