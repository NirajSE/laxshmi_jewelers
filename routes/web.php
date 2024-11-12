<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\GoldRateController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return redirect()->route('login');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {

    // ruban add the container route
    Route::get('/product', function () {
        return Inertia::render('Product/ProductContainer');
    })->name('product');

    Route::get('/product-create', function () {
        return Inertia::render('Product/CreateProduct');
    })->name('product-create');

    Route::get('/gold-rates', function () {
        return Inertia::render('GoldRate/GoldRateContainer');
    })->name('gold-rates');

    Route::get('/create-gold-rates', function () {
        return Inertia::render('GoldRate/CreateGoldRate');
    })->name('create-gold-rates');
    
    Route::resource('get-gold-rates', GoldRateController::class);
    Route::get('/get-active-gold-rate', [GoldRateController::class, 'getActiveGoldRate'])->name('get-active-gold-rate');

    // profile routes
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
