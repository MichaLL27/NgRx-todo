import { createReducer, on } from "@ngrx/store";
import { Todo } from "../../models/todo.model";
import { loadTodos, loadTodosFailure, loadTodosSuccess } from "../actions/todos.actions";

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
  }))
);