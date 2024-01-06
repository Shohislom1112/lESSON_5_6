import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';

class AddTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      todo: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.todo);
    this.setState({
      todo: '',
    });
  };

  render() {
    const { todo } = this.state;
    const { adding, handleAdding } = this.props;
    const { handleChange, handleSubmit } = this;
    return (
      <Modal show={adding} onHide={handleAdding}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="py-3">
            <form className="d-flex gap-2">
              <input
                type="text"
                className="form-control"
                placeholder="Add new..."
                value={todo}
                onChange={handleChange}
              />
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleAdding}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default AddTodo;
