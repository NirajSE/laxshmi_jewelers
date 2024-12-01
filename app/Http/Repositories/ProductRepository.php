<?php

namespace App\Http\Repositories;

use App\Models\Product;
use Illuminate\Database\Eloquent\Collection;

class ProductRepository
{
    /**
     * Create a new product.
     *
     * @param  array  $data
     * @return Product
     */
    public function create(array $data): Product
    {
        return Product::create($data);
    }

    /**
     * Get all products.
     *
     * @return Collection
     */
    public function all(): Collection
    {
        return Product::all();
    }

    /**
     * Find a product by its ID.
     *
     * @param  int  $id
     * @return Product|null
     */
    public function find(int $id): ?Product
    {
        return Product::find($id);
    }

    /**
     * Update an existing product by its ID.
     *
     * @param  int  $id
     * @param  array  $data
     * @return bool
     */
    public function update(int $id, array $data): bool
    {
        $product = Product::find($id);
        return $product ? $product->update($data) : false;
    }

    /**
     * Delete a product by its ID.
     *
     * @param  int  $id
     * @return bool
     */
    public function delete(int $id): bool
    {
        $product = Product::find($id);
        return $product ? $product->delete() : false;
    }

    /**
     * Get the latest product by creation date.
     *
     * @return Product|null
     */
    public function getLatestProduct(): ?Product
    {
        return Product::orderBy('created_at', 'desc')->first();
    }
}
