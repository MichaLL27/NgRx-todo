import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Todo {
  text: string;
  completed: boolean;
}

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  todoText = '';
  todos: Todo[] = [];

addTodo() {
  const text = this.todoText.trim();
  if (text) {
    this.todos.push({ text, completed: false });
    this.todoText = '';
  }
}



  toggleTodo(index: number) {
    this.todos[index].completed = !this.todos[index].completed;
  }

  removeTodo(index: number) {
    this.todos.splice(index, 1);
  }
}
