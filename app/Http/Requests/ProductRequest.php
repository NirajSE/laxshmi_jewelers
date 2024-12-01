<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true; // Set to true or handle authorization logic as needed
    }

    public function rules(): array
    {
        return [
            'tag' => 'required|string|max:255|unique:products,tag',
            'image' => 'nullable|string',
            'weight' => 'nullable|numeric|min:0',
            'labour_charge' => 'nullable|numeric|min:0',
            'stone_weight' => 'nullable|numeric|min:0',
            'wastage' => 'nullable|numeric|min:0',
            'carat' => 'nullable|numeric|min:0',
            'type' => 'required|in:silver,gold',
            'gem_price' => 'nullable|numeric|min:0',
        ];
    }

    public function messages(): array
    {
        return [
            'required' => 'The :attribute field is required.',
            'string'   => 'The :attribute must be a valid string.',
            'max'      => 'The :attribute may not be greater than :max characters.',
            'unique'   => 'The :attribute must be unique.',
            'numeric'  => 'The :attribute must be a numeric value.',
            'min'      => 'The :attribute must be at least :min.',
            'in'       => 'The :attribute must be one of the following values: :values.',
        ];
    }
}
