# Mini E-Commerce App

A small full-stack e-commerce application built with Laravel (backend) and React (frontend).

## Tech Stack
- Laravel
- MySQL
- React.js
- Axios

## Project Structure
- backend/  → Laravel REST API
- frontend/ → React application

## Setup Instructions
To run the project:

Backend:
Ensure you have a Laravel environment.
Run composer install (if using my composer.json or your own structure).
Run php artisan migrate --seed   #to setup the DB.
Run php artisan serve.

Frontend:
Run npm install in the frontend folder.
Run npm run dev.
Open the local URL to browse the store.


CORS: Ensure your backend handles CORS if the frontend and backend run on different ports (default is 5173 and 8000). Laravel's default CORS config usually works fine.
