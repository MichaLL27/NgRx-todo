import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { todosReducer } from './todos/store/reducers/todos.reducer';
import { TodoEffects } from './todos/store/effects/todo.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

export const appConfig = {
  providers: [
    importProvidersFrom(
      HttpClientModule,
      // ❌ აქ დააკომენტარე ან წაშალე დროებით:
      // HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 500 }),

      StoreDevtoolsModule.instrument({
        maxAge: 25,
        logOnly: false,
      })
    ),
    provideStore({
      todos: todosReducer,
    }),
    provideEffects([TodoEffects]),
  ]
};
