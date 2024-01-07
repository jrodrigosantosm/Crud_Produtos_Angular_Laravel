import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../services/lista.service';
import { Produto } from '../../models/produtoModel';

@Component({
  selector: 'app-lista-component',
  templateUrl: './lista-component.component.html',
  styleUrl: './lista-component.component.css'
})
export class ListaComponentComponent implements OnInit {
  produtos: Produto[] = [];
  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.produtoService.getProdutos().subscribe((produtos) => {
      this.produtos = produtos;
    });
  }

  editarProduto(produto: Produto): void {
    this.produtoService.excluirProduto(produto.id).subscribe(() => {
      this.carregarProdutos();
    })
  }

  excluirProduto(produto: Produto): void {
    this.produtoService.excluirProduto(produto.id).subscribe(() => {
      this.carregarProdutos();
    })
  }
}