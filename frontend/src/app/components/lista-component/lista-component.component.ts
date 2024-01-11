import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../services/Produto.service';
import { Produto } from '../../models/ProdutoModel';
import { ComunicacaoService } from '../../services/comunicacao.service';
import { ModelComponentComponent } from '../model-component/model-component.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-lista-component',
  templateUrl: './lista-component.component.html',
  styleUrls: ['./lista-component.component.css'],
})
export class ListaComponentComponent implements OnInit {
  produtos: Produto[] = [];
  produto: any;
  categorias: string[] = [];
  id: any;

  constructor(
    private produtoService: ProdutoService,
    private comunicacaoService: ComunicacaoService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.comunicacaoService.atualizarListaProduto$.subscribe(() => {
      this.carregarProdutos();
    });
    this.produtoService.editarProduto(this.id).subscribe(
      (dados) => {
        this.produto = dados; 
        this.preencherCampos(this.id);
      },
      (erro) => {
        console.error('Erro ao obter dados do produto:', erro);
      }
    );
}

preencherCampos(id: number) {
  this.abrirDialog();
   this.produto.setValue({
    nome: this.produto.nome,
    preco: this.produto.preco,
    estoque: this.produto.estoque,
    validade: this.produto.validade,
    perecivel: this.produto.perecivel,
    categoria_no: this.produto.categoria_id
  });
}

  carregarProdutos(): void {
    this.produtoService.getProdutos().subscribe((produtos) => {
      this.produtos = produtos;
    });
  }

  editarProduto(produto: Produto) {
    this.produtoService.editarProduto(produto.id)
  }

  excluirProduto(produto: Produto): void {
    this.produtoService.excluirProduto(produto.id).subscribe(() => {
      this.carregarProdutos();
    });
  }

  abrirDialog(): void {
    const dialogRef = this.dialog.open(ModelComponentComponent);

    dialogRef.afterClosed().subscribe(() => { });
  }
}
