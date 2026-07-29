# Ledger — Personal Expense Tracker (MERN)

A full-stack expense tracker built with **MongoDB, Express, React (Vite), and Node.js**.

Users can:
- Add expenses
- View all expenses in a ledger
- See the total amount spent
- Delete expenses

---

# Project Structure

```text
expense-tracker/
├── backend/     Express + MongoDB REST API
└── frontend/    React (Vite) client
```

---

# Requirements

- Node.js 18+
- MongoDB Atlas (or local MongoDB)

---

# Backend Setup

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

Runs on:

```
http://localhost:5000
```

## Backend Environment Variables

Create a `.env` file inside the **backend** folder.

| Variable | Description | Example |
|----------|-------------|---------|
| PORT | Server port | 5000 |
| MONGO_URI | MongoDB Atlas connection string | mongodb+srv://... |
| CLIENT_URL | Frontend URL (for CORS) | http://localhost:5173 (development) / https://your-frontend.onrender.com (production) |
| NODE_ENV | Environment | development / production |

Example:

```env
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/expense-tracker
CLIENT_URL=http://localhost:5173
NODE_ENV=development
```

---

# API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/expenses` | Get all expenses |
| POST | `/api/expenses` | Create a new expense |
| DELETE | `/api/expenses/:id` | Delete an expense |

---

# Frontend Setup

```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```

Runs on:

```
http://localhost:5173
```

## Frontend Environment Variables

Create a `.env` file inside the **frontend** folder.

| Variable | Description | Example |
|----------|-------------|---------|
| VITE_API_URL | Backend Base URL | http://localhost:5000 (development) / https://your-backend.onrender.com (production) |

Example (Development)

```env
VITE_API_URL=http://localhost:5000
```

Example (Production)

```env
VITE_API_URL=https://your-backend.onrender.com
```

> **Note:** The frontend automatically appends `/api/expenses`, so **do not** include `/api/expenses` in `VITE_API_URL`.

---

# Running the Project

### Start Backend

```bash
cd backend
npm install
npm run dev
```

### Start Frontend

```bash
cd frontend
npm install
npm run dev
```

Open:

```
http://localhost:5173
```

---

# Deployment (Render)

## Backend (Web Service)

Environment Variables

```env
MONGO_URI=your_mongodb_connection_string
CLIENT_URL=https://your-frontend.onrender.com
NODE_ENV=production
```

Build Command

```bash
npm install
```

Start Command

```bash
npm start
```

---

## Frontend (Static Site)

Environment Variables

```env
VITE_API_URL=https://your-backend.onrender.com
```

Build Command

```bash
npm install && npm run build
```

Publish Directory

```text
dist
```

---

# Tech Stack

### Frontend

- React 18
- Vite
- Axios

### Backend

- Node.js
- Express.js
- Mongoose

### Database

- MongoDB Atlas

---

# Features

- Add Expenses
- Delete Expenses
- Total Expense Calculation
- Expense Categories
- Responsive UI
- REST API
- MongoDB Integration
- Render Deployment Ready