{{-- informujemy bladea o tym, że ten fragment rozszeża main --}}
@extends('main')

{{-- nazwa content jest taka sama jak @yield('content') w pliku main.blade.php --}}
@section('content')
    Strona główna
@endsection
