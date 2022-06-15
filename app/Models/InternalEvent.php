<?php
    
    namespace App\Models;
    
    use Illuminate\Database\Eloquent\Factories\HasFactory;
    use Illuminate\Database\Eloquent\Model;
    
    class InternalEvent extends Model
    {
        use HasFactory;
        
        // wszystkie parametry modelu można sprawdzić po tym linkiem
        // https://laravel.com/docs/9.x/eloquent
        
        // nazwa tabeli, przechowującej nasz model
        // nazwę tabeli możemy napisać wielką literą InternalEvents, nawet gdy w bazie tablica nazywa się internalevents
        protected $table = "InternalEvents";
        // nazwa pola z Id
        protected $primaryKey = 'Id';
        // nazwa pola daty utworzenia
        const CREATED_AT = 'CreationDateTime';
        // nazwa pola daty edycji
        const UPDATED_AT = 'EditDateTime';
    }
