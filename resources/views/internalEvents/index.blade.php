{{-- w folderze internalEvents są wszystkie szablony widoków dla internal events --}}

@extends('main')

@section('content')
    <div class="container">
        <div class="row">
            @foreach($internalEvents as $internalEvent)
                <div class="col s12 m4 13">
                    <div class="card">
                        <div class="card-title">
                            <span class="card-title">{{$internalEvent->Title}}</span>
                            <blockquote>Opis</blockquote>
                            Opis zabawy!
                        </div>
                        <div class="card-action">
                            <form method="post">
                                <label for="id"></label>
                                <input id="id" hidden name="Id" value="1">
                                <button type="submit" class="btn-floating btn-small waves-effect waves-teal" name="akcja" value="widokEdycja">
                                    <i class="material-icons">edit</i>
                                </button>
                                <button type="submit" class="btn-floating btn-small waves-effect waves-teal red" name="akcja" value="usun">
                                    <i class="material-icons">delete</i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            @endforeach
        </div>
    </div>
@endsection
