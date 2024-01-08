import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../services/Produto.service';
import { Produto } from '../../models/ProdutoModel';
import { ComunicacaoService } from '../../services/comunicacao.service';
import { ModelComponentComponent } from '../model-component/model-component.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-lista-component',
  templateUrl: './lista-component.component.html',
  styleUrls: ['./lista-component.component.css']
})
export class ListaComponentComponent implements OnInit {
  produtos: Produto[] = [];

  constructor(
    private produtoService: ProdutoService,
    private comunicacaoService: ComunicacaoService,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.comunicacaoService.atualizarListaProduto$.subscribe(() => {
    this.carregarProdutos();
    });
  }

  carregarProdutos(): void {
    this.produtoService.getProdutos().subscribe((produtos) => {
      this.produtos = produtos;
    });
  }

  editarProduto() {
    // Implemente a lógica de edição, se necessário
  }

  excluirProduto(produto: Produto): void {
    this.produtoService.excluirProduto(produto.id).subscribe(() => {
      this.carregarProdutos();
    });
  }

  abrirDialog(): void {
    const dialogRef = this.dialog.open(ModelComponentComponent, {
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(() => {
    });
  }
}
