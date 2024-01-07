import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { ModelComponentComponent } from './components/model-component/model-component.component';
import { ListaComponentComponent } from './components/lista-component/lista-component.component';
import { ProxAvencerComponentComponent } from './components/prox-avencer-component/prox-avencer-component.component';

const routes: Routes = [
  { path: 'home', component: HomeComponentComponent },
  { path: 'adicionarProduto', component: ModelComponentComponent },
  { path: 'listarProdutos', component: ListaComponentComponent },
  { path: 'proxAvencer', component: ProxAvencerComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
