# Products API Service

A simple RESTful API built using **Node.js**, **TypeScript**, and **MongoDB** to manage products. The API supports products operations and is structured for scalability and maintainability.

---

## 🚀 Features

- ✅ Create, Read, Delete products
- 🌐 RESTful design using Express.js
- 📦 MongoDB integration with Mongoose
- 🔐 Environment-based config with `.env`
- 🔄 Hot-reload using `ts-node-dev`
- 🛡️ Security headers with Helmet
- ⚙️ Config validation with graceful failure

---

# 📦 Product API Documentation

**Base URL**: `http://localhost:7008/api/v1`

---

## GET `/products`

### Description:
Fetch all products from the database.

- Query param `?category=electronic` is supported

### Response:
- `200 OK`: Returns an array of products.

---

## POST `/products`

### Description:
Create a new product.

### Request Body (application/json):

```json
{
  "name": "MacBook Pro",
  "description": "Apple MacBook Pro M4 24GB RAM",
  "price": 139000,
  "currency": "INR",
  "category": "electronics",
  "isAvailable": true,
  "quantity": 10
}
```

### Response:
- `201 OK`: Returns an array of products.
- `400 Bad` : Request: Validation error or duplicate key.


## 📁 Project Structure

```
    src/
    ├── config/ # Config loader (env validation)
    ├── database/ # MongoDB connection logic
    ├── models/ # Mongoose models
    ├── interfaces/ # Defination of types
    ├── routes/ # Express routes
    ├── handlers/ # Route handlers
    ├── server.ts # App entry point
    └── app.ts # App setup (middlewares, routes)
```


---

## 📦 Tech Stack

- **Node.js**
- **TypeScript**
- **Express.js**
- **MongoDB (Mongoose)**
- **Helmet, CORS**
- **ts-node-dev**

---

## 🛠️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/ckshitij/rest-api-product.git
cd rest-api-product
```

### 2. Install dependencies

```
npm install
OR
npm ci
```

### 3. Set up environment variables

Create `.env` file in the parent folder where package.json and other files are present and add the below variables to run the server following:

```
PORT=7008
MONGO_URI=mongodb://<user>:<password>@localhost:27017/products?authSource=admin
```

### 4. Run Server

- On Development mode

```
npm run dev
```

- On Prod mod

```
npm run prod
```

- Docker Build

```
docker build -t products-api-service:0.0.1 .
```

