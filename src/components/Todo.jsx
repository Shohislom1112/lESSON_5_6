import React, { Component } from 'react';

class Todo extends Component {
  render() {
    const { todo, deleteTodo, editTodoSend } = this.props;
    return (
      <>
        <tr>
          <td>{todo.status ? '✅' : '❌'}</td>
          <td>{todo.work}</td>
          <td className="d-flex gap-2 justify-content-end">
            <button
              onClick={() => editTodoSend(todo.id)}
              className="btn btn-warning btn-sm"
            >
              Edit
            </button>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="btn btn-danger btn-sm"
            >
              Delete
            </button>
          </td>
        </tr>
      </>
    );
  }
}

export default Todo;
