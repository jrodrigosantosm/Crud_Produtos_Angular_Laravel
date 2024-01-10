import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../services/Produto.service';
import { Produto } from '../../models/ProdutoModel';
import { ComunicacaoService } from '../../services/comunicacao.service';
import { ModelComponentComponent } from '../model-component/model-component.component';
import { MatDialog } from '@angular/material/dialog';
import { from } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';  // Importe FormGroup corretamente

@Component({
  selector: 'app-lista-component',
  templateUrl: './lista-component.component.html',
  styleUrls: ['./lista-component.component.css']
})
export class ListaComponentComponent implements OnInit {
  produtos: Produto[] = [];
  produtoForm: FormGroup;

  constructor(
    private produtoService: ProdutoService,
    private comunicacaoService: ComunicacaoService,
    private dialog: MatDialog,
    private formBuilder: FormBuilder  // Injete o FormBuilder

  ) {}

  ngOnInit(): void {
    this.comunicacaoService.atualizarListaProduto$.subscribe(() => {
    this.carregarProdutos();
    });

    produtoForm: FormGroup = this.formBuilder.group({
      nome: ['', Validators.required],
      categoria: ['', Validators.required],
      preco: ['', Validators.required],
      validade: ['', Validators.required],
      estoque: ['', Validators.required],
      perecivel: [false],
    });
  
  }

  carregarProdutos(): void {
    this.produtoService.getProdutos().subscribe((produtos) => {
      this.produtos = produtos;
    });
  }

  editarProduto(produto: Produto) {
    // Preencha o formulário com os dados do produto
    this.produtoForm.patchValue(produto);

    // Abra o diálogo com o formulário preenchido
    const dialogRef = this.dialog.open(ModelComponentComponent, {
      width: '600px',
      data: { form: this.produtoForm },  // Passe o formulário para o diálogo
    });

    dialogRef.afterClosed().subscribe(() => {
      // Lógica após o fechamento do diálogo, se necessário
    });
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
