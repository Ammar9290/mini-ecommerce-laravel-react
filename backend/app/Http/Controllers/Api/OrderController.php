<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreOrderRequest;
use App\Http\Resources\OrderResource;
use App\Models\Order;
use App\Models\Product;
use Illuminate\Support\Facades\DB;

class OrderController extends Controller
{
    public function store(StoreOrderRequest $request)
    {
        return DB::transaction(function () use ($request) {
            $totalAmount = 0;
            $orderItems = [];

            // Pre-fetch products to validate stock and get prices
            // Note: In a high concurrency app, you'd lock these rows.
            foreach ($request->products as $item) {
                $product = Product::findOrFail($item['id']);

                if ($product->stock < $item['quantity']) {
                    abort(400, "Insufficient stock for product: {$product->name}");
                }

                $price = $product->price;
                $quantity = $item['quantity'];

                $totalAmount += $price * $quantity;
                
                // Deduct stock
                $product->stock -= $quantity;
                $product->save();

                $orderItems[] = [
                    'product_id' => $product->id,
                    'quantity' => $quantity,
                    'price' => $price,
                ];
            }

            $order = Order::create([
                'customer_name' => $request->customer_name,
                'customer_email' => $request->customer_email,
                'total_amount' => $totalAmount,
                'status' => 'pending',
            ]);

            foreach ($orderItems as $item) {
                $order->items()->create($item);
            }

            return new OrderResource($order->load('items.product'));
        });
    }
}
