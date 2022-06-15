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
            //$internalEvents = InternalEvent::all(); // metoda all () jest z klasy bazowej Model
            
            // pobieramy z bazy rekordy, które są aktywne
            // na końcu, musimy wywołać metodę get ()
            $internalEvents = InternalEvent::where('IsActive', '=', true)->get();
            
            // przekazujemy do widoku pobrane przez model dane
            return view("internalEvents.index", ['internalEvents' => $internalEvents]);
        }
        
        // zwraca widok edycji
        public function edit($id)
        {
            $internalEvent = InternalEvent::find($id); //metody find () nie trzeba definiować
            return view('internalEvents.edit', ['internalEvent' => $internalEvent]);
        }
        
        // aktualizuje event w bazie danych
        public function update(Request $request, $id)
        {
            $internalEvent = InternalEvent::find($id); //metody find () nie trzeba definiować
            $internalEvent->Title = $request->input('Title');
            $internalEvent->Link = $request->input('Link');
            $internalEvent->ShortDescription = $request->input('ShortDescription');
            $internalEvent->ContentHTML = $request->input('ContentHTML');
            $internalEvent->save();
            // przekierowuje do widoku wszystkich wydarzeń
            return redirect('/wydarzenia-wewnetrzne');
        }
        
        // zwraca widok dodawania nowego wydarzenia
        public function create()
        {
            return view('internalEvents.create');
        }
        
        // zapisuje nowe wydarzenie do bazy danych
        public function addToDB(Request $request)
        {
            $internalEvent = new InternalEvent();
            $internalEvent->Id = null;
            $internalEvent->Title = $request->input('Title');
            $internalEvent->Link = $request->input('Link');
            $internalEvent->ShortDescription = $request->input('ShortDescription');
            $internalEvent->ContentHTML = $request->input('ContentHTML');
            $internalEvent->IsPublic = true;
            $internalEvent->IsCancelled = false;
            $internalEvent->EventDateTime = date('y-m-d h:i:s');
            $internalEvent->PublishDateTime = date('y-m-d h:i:s');
            // CreationDateTime i EditDateTime też są wymagane ale Laravel generuje je automatycznie
            // I przypisujemy je w pliku InternalEvent.php jako CREATED_AT i UPDATED_AT
            $internalEvent->IsActive = true;
            $internalEvent->save();
            // przekierowuje do widoku wszystkich wydarzeń
            return redirect('/wydarzenia-wewnetrzne');
        }
    }
