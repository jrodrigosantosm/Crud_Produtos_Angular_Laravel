<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('produtos', function (Blueprint $table) {
            $table->id();
            $table->string('nome');
            $table->decimal('preco', 8, 2);
            $table->decimal('estoque', 8, 2);
            $table->date('validade');
            $table->boolean('perecivel')->default(false);
            $table->string('categoria');
            $table->timestamps();
        });
    }


    public function down(): void
    {
        Schema::dropIfExists('produtos');
    }
};
