<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;  // Adicione esta linha
use Illuminate\Support\Facades\Schema;

class CreateCategoriasTable extends Migration
{
    public function up()
    {
        Schema::create('categorias', function (Blueprint $table) {
            $table->id();
            $table->string('nome');
            $table->timestamps();
        });

        $categorias = [
            'Padaria',
            'Carnes',
            'Mercearia',
            'Matinais',
            'Frios e Laticínios',
            'Bebidas',
            'Utilidades Domésticas',
            'Limpeza',
            'Higiene',
            'Hortifruti',
            'Pet Shop',
        ];

        foreach ($categorias as $categoria) {
            DB::table('categorias')->insert([
                'nome' => $categoria,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }

    public function down()
    {
        Schema::dropIfExists('categorias');
    }
}
