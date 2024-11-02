<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GoldRate extends Model
{
    protected $fillable = [
        'rate', 'date', 'is_active', 'added_by'
    ];
}
