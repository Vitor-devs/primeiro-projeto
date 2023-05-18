import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ComponentFilhoComponent } from './components/component-filho/component-filho.component';
import { DiretivasComponent } from './components/diretivas/diretivas.component';
import { RenderizacaoCondicionalComponent } from './components/renderizacao-condicional/renderizacao-condicional.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { EmissorComponent } from './components/emissor/emissor.component';
import { EmitindoComponent } from './components/emitindo/emitindo.component';
import { EmissorEventoComponent } from './components/emissor-evento/emissor-evento.component';
import { RecebedorEventoComponent } from './components/recebedor-evento/recebedor-evento.component';
import { ListasComponent } from './components/listas/listas.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { TwoWayBidingComponent } from './components/two-way-biding/two-way-biding.component'; // Importe o FormsModule aqui
import { AppRoutingModule } from './app-routing.module';
import { TestComponent } from './components/test/test.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { ListarComponent } from './components/listar/listar.component';
import { HomeComponent } from './components/home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    ComponentFilhoComponent,
    DiretivasComponent,
    RenderizacaoCondicionalComponent,
    EventosComponent,
    EmissorComponent,
    EmitindoComponent,
    EmissorEventoComponent,
    RecebedorEventoComponent,
    ListasComponent,
    PipeComponent,
    TwoWayBidingComponent,
    TestComponent,
    ItemDetailComponent,
    ListarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
