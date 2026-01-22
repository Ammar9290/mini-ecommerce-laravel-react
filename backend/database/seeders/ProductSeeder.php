<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    public function run(): void
    {
        $products = [
            [
                'name' => 'Smartphone XPro',
                'description' => 'The latest smartphone with advanced features.',
                'price' => 999.99,
                'stock' => 50,
            ],
            [
                'name' => 'Wireless Headphones',
                'description' => 'Noise-cancelling wireless headphones.',
                'price' => 199.99,
                'stock' => 100,
            ],
            [
                'name' => 'Laptop Ultra',
                'description' => 'High-performance laptop for professionals.',
                'price' => 1499.50,
                'stock' => 30,
            ],
            [
                'name' => 'Smart Watch 5',
                'description' => 'Track your fitness and stay connected.',
                'price' => 299.00,
                'stock' => 75,
            ],
            [
                'name' => 'Gaming Mouse',
                'description' => 'Ergonomic gaming mouse with high precision.',
                'price' => 49.99,
                'stock' => 200,
            ],
        ];

        foreach ($products as $product) {
            Product::create($product);
        }
    }
}
