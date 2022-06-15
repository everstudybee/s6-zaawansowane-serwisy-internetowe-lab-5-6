<?php
    
    namespace App\Models;
    
    use Illuminate\Database\Eloquent\Builder;
    use Illuminate\Database\Eloquent\Factories\HasFactory;
    use Illuminate\Database\Eloquent\Model;
    
    /**
     * @mixin Builder
     */
    
    class InternalEvent extends Model
    {
        use HasFactory;
        
        // wszystkie parametry modelu można sprawdzić po tym linkiem
        // https://laravel.com/docs/9.x/eloquent
        
        // nazwa tabeli, przechowującej nasz model
        // nazwę tabeli możemy napisać wielką literą InternalEvents, nawet gdy w bazie tablica nazywa się internalevents
        const CREATED_AT = 'CreationDateTime';
        // nazwa pola z Id
        const UPDATED_AT = 'EditDateTime';
        // nazwa pola daty utworzenia
        protected $table = "InternalEvents";
        // nazwa pola daty edycji
        protected $primaryKey = 'Id';
    }
