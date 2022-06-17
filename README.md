### OPIS

1. Projekt z laboratorium, drobne modyfikacje kodu związane z dodaniem plików JS do Webpack.  
2. Każdy krok w git.  
3. Repozytorium https://github.com/kzrepo/s6-zaawansowane-serwisy-internetowe-laravel
4. Dla testów `.gitignore` nie ignoruje niektórych folderów, które powinien

### POCZĄTKOWA KONFIGURACJA

1. Polecenia wydajemy w folderze projektu
2. `composer self-update` - updatuj composer
3. `composer install` - zainstaluj wszystkie potrzebne pakiety
4. `composer update` - zrób update wszystkich zainstalowanych pakietów
5. Konfiguracja `charset` i `collation` w pliku `config/database.php`
6. Konfiguracja podłączenia do bazy danych w pliku `.env` pozycja `B_DATABASE=`
7. Utworzyć pustą bazę danych o ustalonej w punkcie `7.` nazwie i w punkcie `6.` collation.
8. `php artisan migrate` - uruchom migrację, komenda utworzy bazę danych
9. `php artisan db:seed` - wgraj dane testowe do bazy danych

### AUTOMATYCZNE ODŚWIEŻANIE STRONY

1. https://stackoverflow.com/questions/49392001/laravel-project-auto-refresh-after-changes
2. `mix.browserSync('127.0.0.1:8000');` - dodać na końcu pliku webpack.mix.js na końcu
3. `php artisan serve` - najpierw uruchomić serwer artisan
4. `npm run watch` - po uruchomieniu Webpack za pierwszym razem zostaną zainstalowane potrzebne zależności. Po drugim uruchomieniu wszystko będzie działało.

### JS i CSS KOMPILOWANY ZA POMOCĄ WEBPACK

1. `materialize.js` kompilowany jest do app.js za pomocą Webpack. Szczegóły konfiguracji w pliku `resources\js\app.js`.
2. `materialize.css` kompilowany jest do app.css za pomocą Webpack. Szczegóły konfiguracji w pliku `resources\css\app.css`.
3. `validator.js` kompilowany jest do validator.js za pomocą Webpack.
4. Konfiguracja Webpack w pliku `wepack.mix.js`
5. Najpierw trzeba skonfigurować i odpalić `Automatyczne odświeżanie strony`.

### MVC

![mvc](docs/img/mvc.png)
