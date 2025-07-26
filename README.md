# 📝 Todo API Backend

This is a simple Node.js + Express + MongoDB backend project for managing todos. It supports full CRUD functionality and is structured to be easy to run and understand.


## 🚀 Getting Started

Follow these steps to clone and run the project locally.

### 1. Clone the repository

bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

### 2. Install dependencies
Make sure you have Node.js and npm installed. Then run:

npm install


### 3. Create .env file
Duplicate the .env.example file and rename it to .env. Then add your MongoDB connection string inside:

MONGODB_URI=your_mongo_connection_uri
PORT=3000

For example: 
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/todos?retryWrites=true&w=majority
PORT=3000

🔐 Never share your real .env file publicly. It should remain private.

### 4. Run the development server
npm start
The server should start on http://localhost:3000.

### ✅ Requirements
Node.js v18+
MongoDB account (you can use MongoDB Atlas)

👨‍💻 Author
Made by Michael Lazarashvili – feel free to reach out!


