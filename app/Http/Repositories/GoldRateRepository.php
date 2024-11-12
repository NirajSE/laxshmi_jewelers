<?php

namespace App\Http\Repositories;

use App\Models\GoldRate;
use Carbon\Carbon;

class GoldRateRepository
{
    public function create(array $data): GoldRate
    {
        return GoldRate::create($data);
    }

    public function all()
    {
        return GoldRate::all();
    }

    public function find(int $id): ?GoldRate
    {
        return GoldRate::find($id);
    }

    public function update(int $id, array $data): bool
    {
        $rate = GoldRate::find($id);
        return $rate ? $rate->update($data) : false;
    }

    public function delete(int $id): bool
    {
        $rate = GoldRate::find($id);
        return $rate ? $rate->delete() : false;
    }

    public function getActiveGoldRate(): ?GoldRate
    {
        $currentDate = Carbon::now()->format('Y-m-d');

        return GoldRate::where('is_active', true)
            ->orderBy('date', 'desc') // Order by date in descending order to get the latest record
            ->first(); // Use first() to return the latest single record or null
    }
}
