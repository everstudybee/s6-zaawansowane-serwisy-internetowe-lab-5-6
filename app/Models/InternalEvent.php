<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InternalEvent extends Model
{
    use HasFactory;
    
    // nazwa tabeli, przechowującej nasz model
    protected $table = "InternalEvents";
}
