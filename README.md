# Simple E-commerce Project

## Project Overview
This project is a simple full-stack e-commerce application designed to demonstrate a clean and modular architecture. It consists of a **Laravel** backend API and a **React** frontend. The system allows users to view a list of products, view product details, add items to a cart, and place a simple order.

## Tech Stack
### Backend
- **Framework**: Laravel 10 (PHP 8.1+)
- **Database**: MySQL
- **Features**: RESTful API, Eloquent ORM, Request Validation, API Resources.

### Frontend
- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: TailwindCSS
- **State Management**: React Context API
- **HTTP Client**: Axios

## Prerequisites
- PHP 8.1 or higher
- Composer
- Node.js & npm
- MySQL Database

## Setup Instructions

### 1. Database Setup
Create a new MySQL database (e.g., `ecommerce_db`).

### 2. Backend Setup
Navigate to the `backend` directory:
```bash
cd backend
```

Install dependencies:
```bash
composer install
```
*(Note: If you are setting this up manually without composer, ensure all vendor files are present or strictly follow the manual scaffolding provided).*

Configure Environment:
Copy `.env.example` to `.env` (or create a new `.env` file) and update your database credentials:
```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=ecommerce_db
DB_USERNAME=root
DB_PASSWORD=your_password
```

Run Migrations and Seeders:
```bash
php artisan migrate --seed
```
This will create the necessary tables regarding **Products**, **Orders**, and **OrderItems**, and populate the `products` table with dummy data.

Start the Backend Server:
```bash
php artisan serve
```
The API will be available at `http://127.0.0.1:8000`.

### 3. Frontend Setup
Navigate to the `frontend` directory:
```bash
cd frontend
```

Install dependencies:
```bash
npm install
```

Start the Frontend Development Server:
```bash
npm run dev
```
The application will be accessible at `http://localhost:5173` (or the port shown in your terminal).

## Environment Variables
### Backend (.env)
- `DB_DATABASE`: Name of your database.
- `DB_USERNAME`: Database user.
- `DB_PASSWORD`: Database password.

### Frontend
- The frontend is configured to proxy API requests to `http://127.0.0.1:8000` via `vite.config.js`. If your backend runs on a different port, update the `proxy` target in `vite.config.js` or the `baseURL` in `src/api.js`.

## Assumptions
- **No Authentication**: The requirements specified a simple order system without a payment gateway or user login. The "Customer Name" and "Email" are collected at checkout.
- **Stock Management**: Stock is deducted immediately upon order placement. Concurrency handling is basic (transactional).
- **Payment**: Payment processing is simulated; orders are created with a 'pending' status.
- **Scaffolding**: Due to environment constraints during creation, some Laravel files were manually scaffolded. In a real-world scenario, standard `laravel new` or `composer create-project` would be used.
