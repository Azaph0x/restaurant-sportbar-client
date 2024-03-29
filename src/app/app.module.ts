import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MesaService } from './services/mesa/mesa.service';
import { MesaMockService } from './services/mesa/mesa-mock.service';
import { ProdutoMockService } from './services/produto/produto-mock.service';
import { ProdutoService } from './services/produto/produto.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: MesaService, useClass: MesaMockService },
    { provide: ProdutoService, useClass: ProdutoMockService }

  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
