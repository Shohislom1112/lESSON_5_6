import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';

class EditTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: this.props.todoEditing.work,
      status: false,
    };
  }

  handleChange = (e) => {
    this.setState({
      todo: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.editTodo(this.state);
    this.setState({
      todo: '',
      status: false,
    });
  };

  render() {
    const { todo, status } = this.state;
    const { editing, handleEditing } = this.props;
    const { handleChange, handleSubmit } = this;
    return (
      <Modal show={editing} onHide={handleEditing}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="py-3">
            <form className="d-flex gap-2 flex-column">
              <input
                type="text"
                className="form-control"
                placeholder="Edit new..."
                value={todo}
                onChange={handleChange}
              />
              <label htmlFor="status">
                <input
                  type="checkbox"
                  id="status"
                  value={status}
                  onChange={(e) =>
                    this.setState({ status: !this.state.status })
                  }
                />{' '}
                Completed
              </label>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleEditing}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Edit
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default EditTodo;
