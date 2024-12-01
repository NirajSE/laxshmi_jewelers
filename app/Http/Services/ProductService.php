<?php 

namespace App\Http\Services;

use App\Http\Repositories\IProductRepository;
use App\Models\Product;
use Illuminate\Database\Eloquent\Collection;

class ProductService
{
    protected IProductRepository $productRepository;

    public function __construct(IProductRepository $productRepository)
    {
        $this->productRepository = $productRepository;
    }

    /**
     * Get all products.
     *
     * @return Collection
     */
    public function getAllProducts(): Collection
    {
        return $this->productRepository->getAll();
    }

    /**
     * Get a product by its ID.
     *
     * @param int $id
     * @return Product|null
     */
    public function getProductById(int $id): ?Product
    {
        return $this->productRepository->findById($id);
    }

    /**
     * Create a new product.
     *
     * @param array $data
     * @return Product
     */
    public function createProduct(array $data): Product
    {
        return $this->productRepository->create($data);
    }

    /**
     * Update a product by its ID.
     *
     * @param int $id
     * @param array $data
     * @return bool
     */
    public function updateProduct(int $id, array $data): Product
    {
        return $this->productRepository->update($id, $data);
    }

    /**
     * Delete a product by its ID.
     *
     * @param int $id
     * @return bool
     */
    public function deleteProduct(int $id): bool
    {
        return $this->productRepository->delete($id);
    }
}
