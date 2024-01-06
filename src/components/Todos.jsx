import React, { Component } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import EditTodo from "./EditTodo";

class Todos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {
          id: 1,
          status: true,
          work: "worker",
        },
        {
          id: 2,
          status: false,
          work: "Programmer",
        },
        {
          id: 3,
          status: false,
          work: "Third thing to do",
        },
      ],
      adding: false,
      editing: false,
      search: "",
      todoEditing: {
        id: 0,
        status: false,
        work: "",
      },
    };
  }

  addTodo = (td) => {
    const newTodos = [
      {
        id: this.state.todos.length + 1,
        status: false,
        work: td,
      },
      ...this.state.todos,
    ];
    this.setState({
      todos: newTodos,
      adding: false,
    });
  };

  editTodo = (td) => {
    const newTodos = this.state.todos.map((todo) =>
      todo.id === this.state.todoEditing.id
        ? {
            id: this.state.todoEditing.id,
            ...td,
          }
        : todo
    );
    this.setState({
      todos: newTodos,
      editing: false,
    });
  };

  editTodoSend = (id) => {
    const todoToEdit = this.state.todos.find((td) => td.id === id);
    this.setState({
      todoEditing: todoToEdit,
    });
    this.handleEditing();
    console.log(todoToEdit);
  };

  deleteTodo = (id) => {
    if (confirm("Are you sure you want to delete this?")) {
      const newTodos = this.state.todos.filter((todo) => todo.id !== id);
      this.setState({
        todos: newTodos,
      });
    }
  };

  handleAdding = () => {
    this.setState({
      adding: !this.state.adding,
    });
  };

  handleEditing = () => {
    this.setState({
      editing: !this.state.editing,
    });
  };

  handleSearchChange = (e) => {};

  render() {
    const { todos, adding, editing, search, todoEditing } = this.state;
    const {
      addTodo,
      editTodo,
      deleteTodo,
      handleAdding,
      handleEditing,
      handleSearchChange,
      editTodoSend,
    } = this;
    return (
      <div className="w-50 mx-auto my-3">
        <form className="d-flex gap-2">
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            value={search}
            onChange={handleSearchChange}
          />
        </form>
        <div className="d-flex justify-content-between align-items-center py-2">
          <h1>Todos</h1>
          <button onClick={handleAdding} className="btn btn-dark">
            Add
          </button>
        </div>
        <AddTodo
          todos={todos}
          addTodo={addTodo}
          adding={adding}
          handleAdding={handleAdding}
        />
        <EditTodo
          todos={todos}
          editTodo={editTodo}
          editing={editing}
          handleEditing={handleEditing}
          todoEditing={todoEditing}
        />
        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          editTodoSend={editTodoSend}
        />
      </div>
    );
  }
}

export default Todos;
