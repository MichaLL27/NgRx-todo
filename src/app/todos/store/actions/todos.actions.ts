import { createAction, props } from '@ngrx/store';
import { Todo } from '../../models/todo.model';

export const loadTodos = createAction('[todos] Load Todos');

export const loadTodosSuccess = createAction(
    '[todos] Load Todos Success',
    props<{ todos: Todo[] }>()
)

export const loadTodosFailure = createAction(
  '[Todos] Load Todos Failure',
  props<{ error: any }>()
);