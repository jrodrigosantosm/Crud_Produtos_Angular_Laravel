<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Produto extends Model
{
    use HasFactory;

    protected $fillable = [
        'nome',
        'categoria_id',
        'preco',
        'validade',
        'estoque',
        'perecivel'
    ];

    public function categoria()
{
    return $this->belongsTo(Categoria::class, 'categoria_id');
}

}
