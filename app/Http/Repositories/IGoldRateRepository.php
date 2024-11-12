<?php

namespace App\Http\Repositories;

use App\Models\GoldRate;

interface IGoldRateRepository
{
    public function create(array $data): GoldRate;

    public function all();

    public function find(int $id): ?GoldRate;

    public function update(int $id, array $data): bool;

    public function delete(int $id): bool;

    public function getActiveGoldRate(): ?GoldRate;
}
