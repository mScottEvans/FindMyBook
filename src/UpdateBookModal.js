import React from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class UpdateBookModal extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    let bookWithUpdate = {
      title: e.target.title.value || this.props.book.title,
      description: e.target.description.value || this.props.book.description,
      status: e.target.status.value || this.props.book.status,
      _id: this.props.book._id,
      __v: this.props.book.__v
    }
    this.props.updateBook(bookWithUpdate);
  }

  render() {
    console.log(this.props.book);
    return (
      <Modal
        show={this.props.showModal}
        onHide={this.props.hideModalHandler}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update a book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="title">
            <Form.Label>Book name</Form.Label>
            <Form.Control type="text" placeholder={this.props.book.title} />
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>Book description</Form.Label>
            <Form.Control type="text" placeholder={this.props.book.description} />
          </Form.Group>
          <Form.Group controlId="status">
            <Form.Label>Book status</Form.Label>
            <Form.Control type="text" placeholder={this.props.book.status} />
          </Form.Group>
          <Button type="submit">Update my book!</Button>
        </Form>
        </Modal.Body>
      </Modal>
    )
  }
}

export default UpdateBookModal;