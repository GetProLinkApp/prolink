<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePreinscriptionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('preinscriptions', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('phone');
            $table->string('email')->unique();
            $table->string('password');
            $table->string('position');
            $table->string('company_name');
            $table->string('legal_form');
            $table->string('core_business');
            $table->string('parent_company');
            $table->string('country');
            $table->string('registration_number');
            $table->string('rc_file');
            $table->string('tax_id');
            $table->string('tax_id_file');
            $table->string('website')->nullable();
            $table->string('address');
            $table->string('activity_code')->nullable();
            $table->string('company_logo')->nullable();
            $table->boolean('accept_terms');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('preinscriptions');
    }
};
