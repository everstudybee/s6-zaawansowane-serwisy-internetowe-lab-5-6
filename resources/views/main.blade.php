<!DOCTYPE HTML>
<html lang="pl">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>@yield('title')</title>
    <link rel="icon" href="/img/favicon.svg">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link type="text/css" rel="stylesheet" href="/css/app.css" media="screen,projection"/>
</head>
<body>
<div class="container">
    <div class="row">
        <div class="col s12">
            <h1>@yield('title')</h1>
        </div>
    </div>
    <div class="row">
        <div class="col s12">
            <form method="POST">
                <button class="btn waves-effect waves-light" type="submit" name="akcja" value="widokNowy">Nowy
                    <i class="material-icons right">add</i>
                </button>
                <button class="btn waves-effect waves-light" type="submit" name="akcja" value="">Wszystkie
                    <i class="material-icons right">list</i>
                </button>
            </form>
        </div>
    </div>
</div>
<hr/>

@yield('content')

<script src="/js/app.js"></script>
<script>
    document.addEventListener('DOMContentLoaded', function () {
        const elems = document.querySelectorAll('select');
        const instances = M.FormSelect.init(elems, {});
    });
</script>
</body>
</html>
