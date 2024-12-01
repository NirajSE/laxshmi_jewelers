<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class ProductCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param \Illuminate\Http\Request $request
     * @return array
     */
    public function toArray($request): array
    {
        return [
            'data' => $this->collection->map(function ($product) {
                return [
                    'id' => $product->id,
                    'tag' => $product->tag,
                    'image' => $product->image,
                    'weight' => $product->weight,
                    'labour_charge' => $product->labour_charge,
                    'stone_weight' => $product->stone_weight,
                    'wastage' => $product->wastage,
                    'carat' => $product->carat,
                    'type' => $product->type,
                    'gem_price' => $product->gem_price,
                    'created_at' => $product->created_at->toDateTimeString(),
                    'updated_at' => $product->updated_at->toDateTimeString(),
                ];
            }),
            'meta' => [
                'total' => $this->collection->count(),
            ],
        ];
    }
}
