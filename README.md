# 🔐 Secure User Authentication System

## 📌 Project Description
This project implements a secure user authentication system using Node.js, Express, MongoDB, JWT, and Role-Based Access Control (RBAC).

Users can:
- Register an account
- Login securely
- Access protected routes
- Access admin-only routes (based on role)

---

## 🛠 Tech Stack
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT (jsonwebtoken)
- bcryptjs

---

## ⚙ Installation

1. Clone the repository:
git clone https://github.com/YOUR_USERNAME/Secure-Authentication-System.git

2. Install dependencies:
npm install

3. Create a .env file and add:
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key

4. Start the server:
node server.js

---

## 🔑 API Endpoints

### Register
POST /api/auth/register

### Login
POST /api/auth/login

### Protected Dashboard
GET /api/dashboard

### Admin Route
GET /api/admin

---

## 🔐 Features
✔ Password Hashing  
✔ JWT Authentication  
✔ Protected Routes  
✔ Role-Based Access Control  
✔ MongoDB Atlas Integration