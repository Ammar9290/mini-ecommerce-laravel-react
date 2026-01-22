<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProductResource;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::simplePaginate(10);
        return ProductResource::collection($products);
    }

    public function show($id)
    {
        $product = Product::findOrFail($id);
        return new ProductResource($product);
    }
}
