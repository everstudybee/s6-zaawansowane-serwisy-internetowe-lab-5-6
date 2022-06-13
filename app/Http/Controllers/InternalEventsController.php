<?php

namespace App\Http\Controllers;

use App\Models\InternalEvent;
use Illuminate\Http\Request;

class InternalEventsController extends Controller
{
    // funkcja wyświetli listę wszystkich klientów
    public function index(){
        // w zmiennej zapisywane są wszystkie pozycje z tabeli InternalEvents
        $internalEvents = InternalEvent::all();
        // przekazujemy do widoku pobrane przez model dane
        return view("internalEvents.index", ['internalEvents' => $internalEvents]);
    }
}
