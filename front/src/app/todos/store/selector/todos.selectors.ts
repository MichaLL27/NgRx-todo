import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodosState } from '../reducers/todos.reducer';

export const selectTodoState = createFeatureSelector<TodosState>('todos');

export const selectTodos = createSelector(
  selectTodoState,
  (state: TodosState) => state.todos
);
