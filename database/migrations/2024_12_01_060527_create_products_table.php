<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('tag')->unique();
            $table->string('image')->nullable();
            $table->decimal('weight', 10, 2)->nullable();
            $table->decimal('labour_charge', 10, 2)->nullable();
            $table->decimal('stone_weight', 10, 2)->nullable();
            $table->decimal('wastage', 10, 2)->nullable();
            $table->decimal('carat', 10, 2)->nullable();
            $table->enum('type', ['silver', 'gold']);
            $table->decimal('gem_price', 10, 2)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
