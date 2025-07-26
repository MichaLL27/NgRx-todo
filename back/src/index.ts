import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); 

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGO_URI!)
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err) => console.error('❌ MongoDB error:', err));

// ✅ Todo Schema + Model
const todoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  completed: { type: Boolean, default: false },
});


const Todo = mongoose.model('Todo', todoSchema, 'todos');

// ✅ GET /api/todos — წამოიღე ბაზიდან
app.get('/api/todos', async (req, res) => {
  try {
    const todos = await Todo.find();

    if (todos.length === 0) {
      return res.status(404).json({
        status: 'empty',
        message: 'No todos found',
        result: [],
      });
    }

    res.status(200).json({
      status: 'ok',
      message: 'Fetched todos',
      result: todos,
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Failed to fetch todos',
      result: null,
    });
  }
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

