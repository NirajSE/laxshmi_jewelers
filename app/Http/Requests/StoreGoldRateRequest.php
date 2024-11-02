<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreGoldRateRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true; // Set to true or handle authorization logic as needed
    }

    public function rules(): array
    {
        return [
            'rate'     => 'required|numeric|min:0',
            'date'     => 'required|date_format:Y-m-d'
        ];
    }

    public function messages(): array
    {
        return [
            'rate.required'     => 'The gold rate field is required.',
            'rate.numeric'      => 'The gold rate must be a numeric value.',
            'rate.min'          => 'The gold rate must be at least 0.',
            'date.required'     => 'The date field is required.',
            'date.date_format'  => 'The date must be in the format Y-m-d.'
        ];
    }
}
