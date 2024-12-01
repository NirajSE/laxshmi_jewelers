<?php

namespace App\Http\Repositories;

use Illuminate\Database\Eloquent\Collection;
use App\Models\Product;

interface IProductRepository
{
    /**
     * Get all products.
     *
     * @return Collection
     */
    public function getAll(): Collection;

    /**
     * Find a product by its ID.
     *
     * @param  int  $id
     * @return Product|null
     */
    public function findById(int $id): ?Product;

    /**
     * Create a new product.
     *
     * @param  array  $data
     * @return Product
     */
    public function create(array $data): Product;

    /**
     * Update an existing product by its ID.
     *
     * @param  int  $id
     * @param  array  $data
     * @return Product
     */
    public function update(int $id, array $data): Product;

    /**
     * Delete a product by its ID.
     *
     * @param  int  $id
     * @return bool
     */
    public function delete(int $id): bool;
}
