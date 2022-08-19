import './styles.css';

import { Todo, TodoList } from './classes/index';
import { createTodoHtml } from './js/components';

export const todoList = new TodoList();

todoList.todos.forEach( createTodoHtml );

// localStorage.setItem('mi-key', 'jade');

