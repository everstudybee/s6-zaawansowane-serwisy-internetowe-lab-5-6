### OPIS

1. Projekt z laboratorium, drobne modyfikacje kodu związane z dodaniem plików JS do Webpack.  
2. Każdy krok w git.  
3. Repozytorium https://github.com/kzrepo/s6-zaawansowane-serwisy-internetowe-laravel
4. Dla testów `.gitignore` nie ignoruje niektórych folderów, które powinien

### POCZĄTKOWA KONFIGURACJA
Po pobraniu projektu z GitHub

1. Polecenia wydajemy w terminalu w folderze projektu
2. `composer self-update` - updatuj composer, jeśli jest nowsza wersja
3. `composer install` - zainstaluj wszystkie potrzebne pakiety z pliku composer.json, zostanie utworzony folder vendor ze wszystkimi pakietami
4. `composer update` - zrób update wszystkich zainstalowanych pakietów
5. Konfiguracja `charset` i `collation` w pliku `config/database.php`
6. Zamień nazwę pliku `.env.example` na `.env`
7. `php artisan key:generate` - wygeneruj unikalny klucz aplikacji (NIEZBĘDNY KROK), będzie on zapisany w pliku .env
8. `Konfiguracja podłączenia do bazy danych`. W pliku `.env` pozycja `B_DATABASE=` podaj nazwę bazy danych i ewentualnie skonfiguruj inne parametry takie jak IP, PORT, USER i PASSWORD.
9. `Utwórz pustą bazę danych` o ustalonej w punkcie `7.` nazwie i collation ustawionym w punkcie `5.` collation
10. `php artisan migrate` - uruchom migrację, komenda utworzy [1] tablicę zawierającą dane, [2] tablicę z informacjami o migracjach, [3] tablicę zawierającą osobiste tokeny
11. `php artisan db:seed` - wgraj dane testowe do bazy danych
12. `npm install` - zainstaluj pakiety node z pliku package.json, są potrzebne w dalszej konfiguracji, zostanie utworzony folder node_modules ze wszystkimi pakietami

### AUTOMATYCZNE ODŚWIEŻANIE STRONY

1. https://stackoverflow.com/questions/49392001/laravel-project-auto-refresh-after-changes
2. `mix.browserSync('127.0.0.1:8000');` - dodać na końcu pliku webpack.mix.js na końcu
3. `php artisan serve` - najpierw uruchomić serwer artisan
4. `npm run watch` - po uruchomieniu Webpack za pierwszym razem zostaną zainstalowane potrzebne zależności. Po drugim uruchomieniu wszystko będzie działało.

### WYGENEROWANIE KLUCZA LARAVEL



### JS i CSS KOMPILOWANY ZA POMOCĄ WEBPACK

1. `materialize.js` kompilowany jest do app.js za pomocą Webpack. Szczegóły konfiguracji w pliku `resources\js\app.js`.
2. `materialize.css` kompilowany jest do app.css za pomocą Webpack. Szczegóły konfiguracji w pliku `resources\css\app.css`.
3. `validator.js` kompilowany jest do validator.js za pomocą Webpack.
4. Konfiguracja Webpack w pliku `wepack.mix.js`
5. Najpierw trzeba skonfigurować i odpalić `Automatyczne odświeżanie strony`.

### MVC

![mvc](docs/img/mvc.png)
