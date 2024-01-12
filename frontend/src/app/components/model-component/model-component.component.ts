import { Component, Inject } from '@angular/core';
import { CategoriaService } from '../../services/categoria.service';
import { Categoria } from '../../models/CategoriasModel';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProdutoService } from '../../services/Produto.service';
import { ComunicacaoService } from '../../services/comunicacao.service';
import { Produto } from '../../models/ProdutoModel';


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
    private comunicacaoService: ComunicacaoService,
    @Inject(MAT_DIALOG_DATA) public data: any

  ) { }

  ngOnInit(): void {
    this.carregarCategorias();

    if (this.data && this.data.id) {
      this.carregarInformacoesProduto(this.data.id);
    }
  }

  toggle() {
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

    // Se o novo produto tem um ID, significa que estamos editando um produto existente
    if (this.novoProduto.id) {
      // 1. Adiciona o novo produto
      this.produtoService.adicionarProduto(this.novoProduto).subscribe((novoProduto) => {
        console.log('Novo produto adicionado:', novoProduto);

        // 2. Exclui o produto antigo
        this.produtoService.excluirProduto(this.data.id).subscribe(() => {
          console.log(this.data.id)
          // 3. Fecha a modal e notifica a atualização da lista de produtos
          this.fecharDialog();
          this.comunicacaoService.notificarAtualizacaoListaProduto();
        });
      });
    } else {
      // Se o novo produto não tem um ID, significa que estamos criando um novo produto
      this.produtoService.adicionarProduto(this.novoProduto).subscribe((response) => {
        console.log('Novo produto adicionado:', response);

        // Fecha a modal e notifica a atualização da lista de produtos
        this.fecharDialog();
        this.comunicacaoService.notificarAtualizacaoListaProduto();
      });
    }
  }

  fecharDialog(): void {
    this.dialogRef.close();
  }

  carregarInformacoesProduto(id: number): void {
    this.produtoService.editarProduto(id, this.novoProduto).subscribe((produto) => {
      if (produto) {
        this.novoProduto.nome = produto.nome;
        this.novoProduto.preco = produto.preco;
        this.novoProduto.estoque = produto.estoque;
        this.novoProduto.validade = produto.validade;
        this.selectedCategoria = produto.categoria;
        this.novoProduto.perecivel = produto.perecivel
      }
    });
  }
}
