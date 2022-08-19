export class Todo {
    static fromJson({ id, task, isCompleted, creationDate }) {
        const tempTodo = new Todo( task );

        tempTodo.id = id;
        tempTodo.isCompleted = isCompleted;
        tempTodo.creationDate = creationDate;

        return tempTodo;
    }

    constructor( task ) {
        this.task = task;
        this.id = new Date().getTime();
        this.isCompleted = false;
        this.creationDate = new Date();
    }
}