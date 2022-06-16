<!DOCTYPE HTML>
<html lang="pl">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    {{-- <title>@yield('title')</title> moje rozwiązanie --}}
    <title>{{$title ?? 'Strona Laravel'}}</title> {{-- rozwiązanie z zajęć --}}
    <link rel="icon" href="/img/favicon.svg">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link type="text/css" rel="stylesheet" href="/css/app.css" media="screen,projection"/>
</head>
<body>
<div class="container">
    <div class="row">
        <div class="col s12">
            {{-- <h1>@yield('title')</h1>  moje rozwiązanie --}}
            <h1>{{$title ?? 'Strona Laravel'}}</h1> {{-- rozwiązanie z zajęć --}}
        </div>
    </div>
    <div class="row">
        @yield('menu')
    </div>
</div>
<hr/>

@yield('content')

{{-- wczytujemy skrtypt który jest generowany przez Webpack i zawiera materialize.js i validate.js --}}
<script src="/js/app.js"></script>

{{-- używamy do wczytania skryptu z poziomu strony create.blade.php jeśli nie używamy Webpack--}}
@yield('scripts')
</body>
</html>
