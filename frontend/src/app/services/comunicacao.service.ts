import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ComunicacaoService { 
private atualizarListaProduto = new BehaviorSubject<boolean>(false);

  get atualizarListaProduto$() {
    return this.atualizarListaProduto.asObservable();
  }

  notificarAtualizacaoListaProduto() {
    this.atualizarListaProduto.next(true);
  }

   

}
