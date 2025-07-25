import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { todosReducer } from './todos/store/reducers/todos.reducer';

export const appConfig = {
  providers: [
    importProvidersFrom(
      HttpClientModule,
      HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 500 })
    ),
    provideStore({
      todos: todosReducer,
    }),
    provideEffects([]), // ჯერ ცარიელია, თუ გინდა effect-ებიც დავამატოთ
  ]
};
