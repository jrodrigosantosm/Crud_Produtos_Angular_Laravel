import { Component, OnInit } from '@angular/core';
import { Produto } from '../../models/ProdutoModel';
import { ProdutoService } from '../../services/Produto.service';

@Component({
  selector: 'app-prox-avencer-component',
  templateUrl: './prox-avencer-component.component.html',
  styleUrl: './prox-avencer-component.component.css'
})
export class ProxAvencerComponentComponent  implements OnInit {
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
}