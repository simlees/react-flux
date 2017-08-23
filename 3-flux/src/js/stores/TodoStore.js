import { EventEmitter } from "events"; // Comes with Node.js

class TodoStore extends EventEmitter {
  constructor() {
    super();
    this.todos = [
      {
        id: 1,
        text: 'do something',
        complete: false
      },
      {
        id: 2,
        text: 'do another something',
        complete: false
      }
    ];
  }

  getAll() {
    return this.todos;
  }

  createTodo(text) {
    this.todos.push({
      id: Date.now(),
      text,
      complete: false
    });

    this.emit("change");
  }

}



 const todoStore = new TodoStore;
 window.todoStore = todoStore;
 export default todoStore;
