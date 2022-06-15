<?php
    
    namespace App\Http\Controllers;
    
    use App\Models\InternalEvent;
    use Illuminate\Http\Request;
    
    class InternalEventsController extends Controller
    {
        // funkcja wyświetli listę wszystkich klientów
        public function index()
        {
            // w zmiennej zapisywane są wszystkie pozycje z tabeli InternalEvents
            $internalEvents = InternalEvent::all(); // metoda all() jest z klasy bazowej Model
            // przekazujemy do widoku pobrane przez model dane
            return view("internalEvents.index", ['internalEvents' => $internalEvents]);
        }
        
        // zwraca widok edycji
        public function edit($id)
        {
            $internalEvent = InternalEvent::find($id); //TODO
            return view('internalEvents.edit', ['internalEvent' => $internalEvent]);
        }
    }
