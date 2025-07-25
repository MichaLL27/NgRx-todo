// todos.effects.ts
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { HttpClient } from "@angular/common/http";
import { catchError, map, of, switchMap } from "rxjs";
import { Todo } from "../../models/todo.model";
import {
  loadTodos,
  loadTodosSuccess,
  loadTodosFailure,
} from "../actions/todos.actions";

@Injectable()
export class TodoEffects {
  constructor(private actions$: Actions, private http: HttpClient) {}

  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTodos),
      switchMap(() =>
        this.http.get<Todo[]>("/api/todos").pipe(
          map((todos) => loadTodosSuccess({ todos })),
          catchError((error) => of(loadTodosFailure({ error })))
        )
      )
    )
  );
}
