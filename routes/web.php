<?php
    
    use App\Http\Controllers\InternalEventsController;
    use App\Http\Controllers\StronaGlownaController;
    use Illuminate\Support\Facades\Route;
    
    /*
    |--------------------------------------------------------------------------
    | Web Routes
    |--------------------------------------------------------------------------
    |
    | Here is where you can register web routes for your application. These
    | routes are loaded by the RouteServiceProvider within a group which
    | contains the "web" middleware group. Now create something great!
    |
    */
    
    // oryginalna strona startowa
    Route::get('/welcome', function ()
    {
        return view('welcome');
    });
    
    // tworzymy swój routing
    Route::get('/', StronaGlownaController::class);
    
    // routing dla widoku internalEvents/index.blade.php
    Route::get('/wydarzenia-wewnetrzne', [InternalEventsController::class, 'index']);
    
    // routing dla edycji wydarzenia, wąsiasty nawias oznacza, że jako zmienną id przejmiemy wartość string w tym miejscu
    Route::get('/wydarzenia-wewnetrzne/edycja/{id}', [InternalEventsController::class, 'edit']);
    
    // routing dla aktualizacji wydarzenia, wąsiasty nawias oznacza, że jako zmienną id przejmiemy wartość string w tym miejscu
    Route::post('/wydarzenia-wewnetrzne/aktualizacja/{id}', [InternalEventsController::class, 'update']);
    
    // wyświetla formularz do dodania nowego wydarzenia
    Route::get('/wydarzenia-wewnetrzne/nowy', [InternalEventsController::class, 'create']);
    
    // dodaje nowe wydarzenie do bazy danych
    Route::post('/wydarzenia-wewnetrzne/dodawanie', [InternalEventsController::class, 'addToDB']);
