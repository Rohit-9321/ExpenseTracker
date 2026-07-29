# Ledger — Personal Expense Tracker (MERN)

A full-stack expense tracker built with MongoDB, Express, React (Vite), and Node.js.
Add expenses, view them in a running ledger, see your total spend, and delete entries.

## Project structure

```
expense-tracker/
├── backend/     Express + MongoDB REST API
└── frontend/    React (Vite) client
```

## Requirements

- Node.js 18+
- A MongoDB connection (local `mongod` or a MongoDB Atlas cluster)

## 1. Backend setup

```bash
cd backend
npm install
cp .env.example .env   # edit MONGO_URI if you're using Atlas
npm run dev             # starts the API on http://localhost:5000
```

Environment variables (`backend/.env`):

| Variable   | Description                        | Default                                       |
|------------|-------------------------------------|------------------------------------------------|
| `PORT`     | Port the API listens on             | `5000`                                          |
| `MONGO_URI`| MongoDB connection string           | `mongodb://127.0.0.1:27017/expense-tracker`     |

### API endpoints

| Method | Route              | Description        |
|--------|---------------------|---------------------|
| GET    | `/api/expenses`      | Get all expenses (with `total` and `count`) |
| POST   | `/api/expenses`      | Add a new expense (`amount`, `description`, `category`, `date`) |
| DELETE | `/api/expenses/:id`  | Delete an expense by id |

## 2. Frontend setup

```bash
cd frontend
npm install
cp .env.example .env   # points the app at the API above
npm run dev             # starts the app on http://localhost:5173
```

Environment variables (`frontend/.env`):

| Variable       | Description               | Default                                   |
|----------------|-----------------------------|--------------------------------------------|
| `VITE_API_URL` | Base URL for the expenses API | `http://localhost:5000/api/expenses`     |

## 3. Using the app

1. Start the backend, then the frontend (in two terminals).
2. Open `http://localhost:5173`.
3. Fill in the **New expense** form and click **Add expense**.
4. Your entries appear in the ledger on the right, with a running total at the top.
5. Click **Delete** on any row to remove it.

## Tech stack

- **Frontend:** React 18, Vite, Axios
- **Backend:** Node.js, Express, Mongoose
- **Database:** MongoDB
