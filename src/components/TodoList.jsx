import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
  render() {
    const { todos, deleteTodo, editTodoSend } = this.props;
    return (
      <div>
        <table className="table striped hover">
          <thead>
            <tr>
              <th>Status</th>
              <th>Work</th>
              <th className="text-end pe-5">Actions</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <Todo
                key={todo.id}
                todo={todo}
                deleteTodo={deleteTodo}
                editTodoSend={editTodoSend}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TodoList;
