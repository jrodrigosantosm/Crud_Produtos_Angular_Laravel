<?php

use App\Http\Controllers\CategoriasController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProdutoController;

Route::resource('produtos', ProdutoController::class);

Route::get('/produtos', [ProdutoController::class, 'index'])->name('produto.index');
Route::post('/produtos', [ProdutoController::class, 'store'])->name('produto.store');
Route::get('/produtos/{}', [ProdutoController::class, 'show'])->name('produto.show');
Route::put('/produtos/{}', [ProdutoController::class, 'update'])->name('produto.update');
Route::delete('/produtos/{}', [ProdutoController::class, 'destroy'])->name('produto.destroy');
Route::get('/categorias', [CategoriasController::class, 'index'])->name('categorias.index');



