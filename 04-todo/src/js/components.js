import { Todo } from "../classes";
import { todoList } from "../index";

const divTodoList = document.getElementsByClassName('todo-list')[0];
const newTodoInput = document.getElementsByClassName('new-todo')[0];
const eliminateCompletedBtn = document.getElementsByClassName('clear-completed')[0];
const ulFilters = document.querySelector('.filters');
const anchorFilters = document.querySelectorAll('.filtro');

export const createTodoHtml = ( todo ) => {
    const htmlTodo = `
    <li class="${ (todo.isCompleted) ? 'Completed' : '' }" data-id="${ todo.id }">
		<div class="view">
			<input class="toggle" type="checkbox" ${ (todo.isCompleted) ? 'checked' : ''} >
			<label>${ todo.task }</label>
			<button class="destroy"></button>
		</div>
	    <input class="edit" value="Create a TodoMVC template">
	</li>`;

    const div = document.createElement('div');
    div.innerHTML = htmlTodo;

    divTodoList.append( div.firstElementChild );
    return div.firstElementChild;
}


newTodoInput.addEventListener('keyup', ( event ) => {
    if ( event.key === "Enter" && newTodoInput.value.length > 0 ) {
        const newTodo = new Todo( newTodoInput.value );

        todoList.newTodo( newTodo );
        createTodoHtml( newTodo );

        newTodoInput.value = '';
    }
})

divTodoList.addEventListener( 'click', ( event ) => {
    const nameElement = event.target.localName;
    const todoElement = event.target.parentElement.parentElement;
    const todoId = todoElement.getAttribute('data-id');

    if ( nameElement.includes('input') ){
        todoList.markCompleted( todoId );
        todoElement.classList.toggle('completed');
    } else if ( nameElement.includes('button') ) {
        todoList.deleteTodo( todoId );
        divTodoList.removeChild( todoElement );
    }
})

eliminateCompletedBtn.addEventListener( 'click', () => {
    todoList.deleteCompleted();

    for( let i = divTodoList.children.length - 1; i >= 0; i-- ) {
        const element = divTodoList.children[i];
        if( element.classList.contains('completed') ) {
            divTodoList.removeChild( element );
        }
    }
})

ulFilters.addEventListener( 'click', ( event ) => {
    const filter = event.target.text;
    if ( !filter ) { return; }

    anchorFilters.forEach( element  => element.classList.remove('selected') );
    event.target.classList.add('selected');

    for( const element of divTodoList.children ) {
        element.classList.remove('hidden');
        const completed = element.classList.contains('completed');

        switch ( filter ) {
            case 'Pendientes':
                if( completed ) {
                    element.classList.add('hidden');
                }
            break;

            case 'Completados':
                if( !completed ) {
                    element.classList.add('hidden');
                }
            break;
        }
    }
})

