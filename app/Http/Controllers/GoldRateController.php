<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreGoldRateRequest;
use App\Http\Resources\GoldRateResource;
use App\Http\Services\GoldRateService;
use Illuminate\Http\JsonResponse;

class GoldRateController extends Controller
{
    protected $goldRateService;

    public function __construct(GoldRateService $goldRateService)
    {
        $this->goldRateService = $goldRateService;
    }

    public function index(): JsonResponse
    {
        $rates = $this->goldRateService->getAllRates();
        return response()->json($rates);
    }

    public function store(StoreGoldRateRequest $request): JsonResponse
    {
        $data = $request->validated();
        $rate = $this->goldRateService->createRate($data);
        return response()->json($rate, 201);
    }

    public function show(int $id): JsonResponse
    {
        $rate = $this->goldRateService->getRateById($id);
        return response()->json($rate);
    }

    public function update(StoreGoldRateRequest $request, int $id): JsonResponse
    {
        $data = $request->validated();
        $updated = $this->goldRateService->updateRate($id, $data);
        return response()->json(['success' => $updated]);
    }

    public function destroy(int $id): JsonResponse
    {
        $deleted = $this->goldRateService->deleteRate($id);
        return response()->json(['success' => $deleted]);
    }

    // Get all active gold rates (as a collection)
    public function getActiveGoldRate(): JsonResponse
    {
        $activeGoldRates = $this->goldRateService->getActiveGoldRate();

        if ($activeGoldRates->isEmpty()) {
            return response()->json(['message' => 'No active gold rates found for today'], 404);
        }

        return response()->json(new GoldRateResource($activeGoldRates));
    }
}
