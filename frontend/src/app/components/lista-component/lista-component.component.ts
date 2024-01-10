import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../services/Produto.service';
import { Produto } from '../../models/ProdutoModel';
import { ComunicacaoService } from '../../services/comunicacao.service';
import { ModelComponentComponent } from '../model-component/model-component.component';
import { MatDialog } from '@angular/material/dialog';
import { from } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-lista-component',
  templateUrl: './lista-component.component.html',
  styleUrls: ['./lista-component.component.css'],
})
export class ListaComponentComponent implements OnInit {
  produtos: Produto[] = [];

  constructor(
    private produtoService: ProdutoService,
    private comunicacaoService: ComunicacaoService,
    private dialog: MatDialog,
    private formBuilder: FormBuilder
  ) { }

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
