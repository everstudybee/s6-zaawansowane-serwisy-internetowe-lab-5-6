{{-- w folderze internalEvents są wszystkie szablony widoków dla internal events --}}

@extends('main')

@section('title')
    Lista Wydarzeń
@endsection

@section('content')
    <div class="container">
        <div class="row">
            @foreach($internalEvents as $internalEvent)
                <div class="col s12 m4 l3">
                    <div class="card">
                        <div class="card-content">
                            <span class="card-title">{{$internalEvent->Title}}</span>
                            <blockquote>{{$internalEvent->ShortDescription}}</blockquote>
                            <a href="{{$internalEvent->Link}}">{{$internalEvent->Title}}</a>
                            {{-- zapis poniżej powoduje interpretowanie kodu HTML --}}
                            <p>{!! $internalEvent->ContentHTML !!}</p>
                        </div>
                        <div class="card-action">
                            {{-- pełna ścieżka wpisana ręcznie --}}
                            <a href="wydarzenia-wewnetrzne/edycja/{{$internalEvent->Id}}" class="btn-floating btn-small waves-effect waves-teal">
                                <i class="material-icons">edit</i>
                            </a>
                            {{-- scieżka generowana automatycznie, dodaje na początku scieżkę w której aktualnie jesteśmy --}}
                            <a href="{{url()->current()}}/usun/{{$internalEvent->Id}}" class="btn-floating btn-small waves-effect waves-teal red">
                                <i class="material-icons">delete</i>
                            </a>
                        </div>
                    </div>
                </div>
            @endforeach
        </div>
    </div>
@endsection
