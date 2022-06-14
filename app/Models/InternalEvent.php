<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InternalEvent extends Model
{
    use HasFactory;
    
    // nazwa tabeli, przechowującej nasz model
    // nazwę tabeli możemy napisać wielką literą InternalEvents, nawet gdy w bazie tablica nazywa się internalevents
    protected $table = "InternalEvents";
}
