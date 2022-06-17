<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInternaleventsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('internalevents', function (Blueprint $table) {
            $table->id();
            $table->string('Title', 64);
            $table->string('Link', 64);
            $table->boolean('IsPublic');
            $table->boolean('IsCancelled');
            $table->dateTime('EventDateTime');
            $table->dateTime('CreationDateTime');
            $table->dateTime('EditDateTime');
            $table->dateTime('PublishDateTime');
            $table->string('ShortDescription', 128);
            $table->text('ContentHTML');
            $table->text('MetaDescription')->nullable();
            $table->text('MetaTags')->nullable();
            $table->text('Notes')->nullable();
            $table->boolean('IsActive');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('internalevents');
    }
}
