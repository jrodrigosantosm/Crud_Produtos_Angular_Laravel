import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Categoria } from '../models/CategoriasModel';

@Injectable({
  providedIn: 'root',
})
export class CategoriaService {

    private apiUrl = 'http://127.0.0.1:8000/api/categorias';

    constructor(private http: HttpClient) {}

  getCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.apiUrl);
  }
}