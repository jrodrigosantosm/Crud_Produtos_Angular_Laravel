// produto.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Produto } from '../models/ProdutoModel';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  private apiUrl = 'http://127.0.0.1:8000/api/produtos';
  private atualizarProdutoSubject = new Subject<void>();

  constructor(private http: HttpClient) {}

  getProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.apiUrl);
  }

  adicionarProduto(novoProduto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.apiUrl, novoProduto);
  }

  excluirProduto(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  editarProduto(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<void>(url,"");
  }

  notificarAtualizacaoProduto(): void {
    this.atualizarProdutoSubject.next();
  }

}
