{{-- informujemy bladea o tym, że ten fragment rozszeża main --}}
{{-- w tym miejscu kożystamy z tego, że title ma wartość domyślną ustawiona w main.blade.php --}}
@extends('main')

{{--moje rozwiązanie--}}
{{--@section('title')--}}
{{--    Strona Główna--}}
{{--@endsection--}}

{{-- nazwa content jest taka sama jak @yield('content') w pliku main.blade.php --}}
@section('content')
    <div class="container">
        <div class="row">
            <div class="col s12 m4 l3">
                <a href="/wydarzenia-wewnetrzne">
                    <div class="card-panel hoverable center">
                        <h5>Wydarzenia wewnętrzne</h5>
                    </div>
                </a>
            </div>
        </div>
    </div>
@endsection
