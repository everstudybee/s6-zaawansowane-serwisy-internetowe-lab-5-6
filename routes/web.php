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
    
