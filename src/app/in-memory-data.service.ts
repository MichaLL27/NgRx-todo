import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const todos = [
      { id: 1, text: 'Learn NgRx', completed: false },
      { id: 2, text: 'Create Todo App', completed: true }
    ];
    return { todos };
  }
}
