<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'tag',
        'image',
        'weight',
        'labour_charge',
        'stone_weight',
        'wastage',
        'carat',
        'type',
        'gem_price',
    ];
}
