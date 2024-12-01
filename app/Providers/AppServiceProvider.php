<?php

namespace App\Providers;

use App\Http\Repositories\GoldRateRepository;
use App\Http\Repositories\IGoldRateRepository;
use App\Http\Repositories\ProductRepository;
use App\Http\Repositories\IProductRepository;
use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->bind(IGoldRateRepository::class, GoldRateRepository::class);
        $this->app->bind(IProductRepository::class, ProductRepository::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Vite::prefetch(concurrency: 3);
    }
}
