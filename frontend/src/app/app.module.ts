import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { ModelComponentComponent } from './components/model-component/model-component.component';
import { ListaComponentComponent } from './components/lista-component/lista-component.component';
import { ProxAvencerComponentComponent } from './components/prox-avencer-component/prox-avencer-component.component';
import { SidBarComponentComponent } from './components/sid-bar-component/sid-bar-component.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    ModelComponentComponent,
    ListaComponentComponent,
    ProxAvencerComponentComponent,
    SidBarComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
