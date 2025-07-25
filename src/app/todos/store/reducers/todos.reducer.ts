import { createReducer, on } from "@ngrx/store";
import { Todo } from "../../models/todo.model";
import { addTodo, loadTodos, loadTodosFailure, loadTodosSuccess, removeTodo, toggleTodo } from "../actions/todos.actions";

export interface TodosState {
    todos: Todo[];
    loading: boolean;
    error: any;
}

export const initialState: TodosState = {
    todos: [],
    loading: false,
    error: null
}

export const todosReducer = createReducer(
  initialState,
  on(loadTodos, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(loadTodosSuccess, (state, { todos }) => ({
    ...state,
    todos,
    loading: false,
  })),
  on(loadTodosFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

on(addTodo, (state, { text }) => {
  const maxId = state.todos.length ? Math.max(...state.todos.map(todo => todo.id)) : 0;
  const newTodo: Todo = {
    id: maxId + 1,
    text,
    completed: false,
  };
  return {
    ...state,
    todos: [...state.todos, newTodo],
  };
}),

  on(toggleTodo, (state, { index }) => ({
    ...state,
    todos: state.todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    ),
  })),

  on(removeTodo, (state, { index }) => ({
    ...state,
    todos: state.todos.filter((_, i) => i !== index),
  }))
);