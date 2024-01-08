import { Component } from '@angular/core';
import { CategoriaService } from '../../services/categoria.service';
import { Categoria } from '../../models/CategoriasModel';
import { MatDialogRef } from '@angular/material/dialog';
import { ProdutoService } from '../../services/Produto.service';
import { ComunicacaoService } from '../../services/comunicacao.service';


@Component({
  selector: 'app-model-component',
  templateUrl: './model-component.component.html',
  styleUrl: './model-component.component.css'
})

export class ModelComponentComponent {
  categorias: Categoria[] = [];
  selectedCategoria: string = '';
  mostrar: boolean = false;
  novoProduto: any = {};

  constructor(
    private categoriasService: CategoriaService,
    private produtoService: ProdutoService,
    public dialogRef: MatDialogRef<ModelComponentComponent>,
    private comunicacaoService: ComunicacaoService
    ) {}

  ngOnInit(): void {
    this.carregarCategorias();
  }

  toggle () {
    this.mostrar = !this.mostrar;
  }

  carregarCategorias(): void {
    this.categoriasService.getCategorias().subscribe((categorias) => {
      this.categorias = categorias.map((categoria) => categoria.nome);
    });
  }

  adicionarProduto(formValue: any): void {
    const categoriaSelecionada = this.selectedCategoria;
    this.novoProduto.nome = formValue.nome;
    this.novoProduto.preco = formValue.preco;
    this.novoProduto.estoque = formValue.estoque;
    this.novoProduto.validade = formValue.validade;
    this.novoProduto.categoria = formValue.categoria = categoriaSelecionada;
    this.novoProduto.perecivel = formValue.perecivel === 'Sim'; 

    this.produtoService.adicionarProduto(this.novoProduto).subscribe((response) => {
      console.log('Novo produto adicionado:', response);
      this.fecharDialog();
      this.comunicacaoService.notificarAtualizacaoListaProduto();
    });
  }

  fecharDialog(): void {
    this.dialogRef.close();
  }
}
