<?php

    namespace Database\Seeders;

    use Illuminate\Database\Seeder;
    use Illuminate\Support\Facades\DB;

    class DatabaseSeeder extends Seeder
    {
        /**
         * Seed the application's database.
         *
         * @return void
         */
        public function run(): void
        {
            DB::table('internalevents')->insert([
                [
                    'Title' => 'Tytuł eventu 1',
                    'Link' => 'https://laravel.com/docs/9.x/queries#insert-statements',
                    'IsPublic' => true,
                    'IsCancelled' => false,
                    'EventDateTime' => date('y-m-d h:i:s'),
                    'CreationDateTime' => date('y-m-d h:i:s'),
                    'EditDateTime' => date('y-m-d h:i:s'),
                    'PublishDateTime' => date('y-m-d h:i:s'),
                    'ShortDescription' => 'Krótki opis 1',
                    'ContentHTML' => '<p>To jest długi opis 1.</p>',
                    'IsActive' => true,
                ],
                [
                    'Title' => 'Tytuł eventu 2',
                    'Link' => 'https://laravel.com/docs/9.x/queries#insert-statements',
                    'IsPublic' => true,
                    'IsCancelled' => false,
                    'EventDateTime' => date('y-m-d h:i:s'),
                    'CreationDateTime' => date('y-m-d h:i:s'),
                    'EditDateTime' => date('y-m-d h:i:s'),
                    'PublishDateTime' => date('y-m-d h:i:s'),
                    'ShortDescription' => 'Krótki opis 2',
                    'ContentHTML' => '<p>To jest długi opis 2.</p>',
                    'IsActive' => true,
                ],
                [
                    'Title' => 'Tytuł eventu 3',
                    'Link' => 'https://laravel.com/docs/9.x/queries#insert-statements',
                    'IsPublic' => true,
                    'IsCancelled' => false,
                    'EventDateTime' => date('y-m-d h:i:s'),
                    'CreationDateTime' => date('y-m-d h:i:s'),
                    'EditDateTime' => date('y-m-d h:i:s'),
                    'PublishDateTime' => date('y-m-d h:i:s'),
                    'ShortDescription' => 'Krótki opis 3',
                    'ContentHTML' => '<p>To jest długi opis 3.</p>',
                    'IsActive' => true,
                ],
                [
                    'Title' => 'Tytuł eventu 4',
                    'Link' => 'https://laravel.com/docs/9.x/queries#insert-statements',
                    'IsPublic' => true,
                    'IsCancelled' => false,
                    'EventDateTime' => date('y-m-d h:i:s'),
                    'CreationDateTime' => date('y-m-d h:i:s'),
                    'EditDateTime' => date('y-m-d h:i:s'),
                    'PublishDateTime' => date('y-m-d h:i:s'),
                    'ShortDescription' => 'Krótki opis 4',
                    'ContentHTML' => '<p>To jest długi opis 4.</p>',
                    'IsActive' => true,
                ],
            ]);
        }
    }
