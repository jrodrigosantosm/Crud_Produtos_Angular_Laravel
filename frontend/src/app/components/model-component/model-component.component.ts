import { Component } from '@angular/core';
import { CategoriaService } from '../../services/categoria.service';
import { Categoria } from '../../models/CategoriasModel';
import { Observable, of } from 'rxjs';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-model-component',
  templateUrl: './model-component.component.html',
  styleUrl: './model-component.component.css'
})
export class ModelComponentComponent {
  categorias: Categoria[] = [];
  selectedCategoria: string = '';

  constructor(private categoriasService: CategoriaService) {}

  ngOnInit(): void {
    this.carregarCategorias();
  }

  carregarCategorias(): void {
    this.categoriasService.getCategorias().subscribe((categorias) => {
      this.categorias = categorias.map((categoria) => categoria.nome);
    });
  }

  adicionarProduto(formValue: any): void {
    // Implemente a lógica real para adicionar o produto usando os dados do formulário
    console.log('Novo produto:', formValue);
  }

}
