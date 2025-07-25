import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { todosReducer } from './todos/store/reducers/todos.reducer';
import { TodoEffects } from './todos/store/effects/todo.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

export const appConfig = {
  providers: [
    importProvidersFrom(
      HttpClientModule,
      HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 500 }),
      StoreDevtoolsModule.instrument({
        // install Reducer DevTools Extension: Redux DevTools Chrome Extension to see the state changes
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
