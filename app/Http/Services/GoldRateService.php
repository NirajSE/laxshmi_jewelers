<?php 

namespace App\Http\Services;

use App\Models\GoldRate;
use App\Http\Repositories\GoldRateRepository;

class GoldRateService
{
    protected $goldRateRepository;

    public function __construct(GoldRateRepository $goldRateRepository)
    {
        $this->goldRateRepository = $goldRateRepository;
    }

    public function createRate(array $data)
    {
        return $this->goldRateRepository->create($data);
    }

    public function getAllRates()
    {
        return $this->goldRateRepository->all();
    }

    public function getRateById(int $id)
    {
        return $this->goldRateRepository->find($id);
    }

    public function updateRate(int $id, array $data)
    {
        return $this->goldRateRepository->update($id, $data);
    }

    public function deleteRate(int $id)
    {
        return $this->goldRateRepository->delete($id);
    }

    public function getActiveGoldRate():?GoldRate
    {
        return $this->goldRateRepository->getActiveGoldRate();
    }
}
