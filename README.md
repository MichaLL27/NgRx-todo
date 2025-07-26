# Fullstack Todo App

This is a simple fullstack Todo app built with **Angular** for the frontend and **Node.js + Express + MongoDB** for the backend.

## 🧱 Project Structure
root/
├── frontend/ → Angular app
└── backend/ → Node.js/Express app


## 🖥️ Requirements

- Node.js (v16+ recommended)
- npm
- MongoDB (local or cloud like MongoDB Atlas)

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/fullstack-todo-app.git
cd fullstack-todo-app
```

🔙 Backend Setup (backend/)
Step 1: Navigate to backend folder
cd backend
Step 2: Install dependencies
npm install
Step 3: Setup environment variables
Create a .env file in the backend/ directory and add the following:
MONGO_URI=your_mongodb_connection_string
PORT=3000
Replace your_mongodb_connection_string with your actual connection string (e.g. from MongoDB Atlas)

Step 4: Start the backend server
npm run dev
The backend will start on http://localhost:3000.


🔜 Frontend Setup (frontend/)
Step 1: Navigate to frontend folder
cd ../frontend
Step 2: Install dependencies
npm install
Step 3: Run the Angular app
ng serve
The frontend will be available at http://localhost:4200
📦 API Endpoints (Backend)
GET /api/todos → Fetch all todos
POST /api/todos → Create a new todo
PUT /api/todos/:id → Update a todo
DELETE /api/todos/:id → Delete a todo



💡 Notes
Ensure your backend server is running before using the frontend app.

You can modify the MongoDB connection string in .env as per your setup.

This project uses NgRx in the frontend to manage state.


✅ Features
Create, Read, Update, Delete todos

Uses NgRx Store and Effects for state management

Connected to MongoDB with Mongoose

Fully decoupled architecture


🤝 Contributing
Feel free to fork this repo and submit a pull request!

👨‍💻 Author
Made by Michael Lazarashvili – feel free to reach out!


