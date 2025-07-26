import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from '../../models/todo.model';
import { selectTodos } from '../../store/selector/todos.selectors';
import { addTodo, loadTodos, removeTodo, toggleTodo } from '../../store/actions/todos.actions';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  todoText = '';
  todos$: Observable<Todo[]>;

  constructor(private store: Store) {
    this.todos$ = this.store.select(selectTodos);
    this.store.dispatch(loadTodos());
  }

  addTodo() {
    const text = this.todoText.trim();
    if (text) {
      this.store.dispatch(addTodo({ text }));
      this.todoText = '';
      // ამ subscribe-ს აქ არ სჭირდება, წაშალე
    }
  }

  toggleTodo(index: number) {
    this.store.dispatch(toggleTodo({ index }));
  }

  removeTodo(index: number) {
    this.store.dispatch(removeTodo({ index }));
  }

  // trackBy ფუნქცია angular-ისთვის ოპტიმიზაციისთვის
  trackById(index: number, todo: Todo) {
    return todo.id ?? index;
  }
}
