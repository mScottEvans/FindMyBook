import React from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class BookFormModal extends React.Component {
  render() {
    return (
      <Modal
        show={this.props.showModal}
        onHide={this.props.hideModalHandler}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add a book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={this.props.handleBookSubmit}>
          <Form.Group controlId="title">
            <Form.Label>Book name</Form.Label>
            <Form.Control type="text" placeholder="Enter the title of a book" />
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>Book description</Form.Label>
            <Form.Control type="text" placeholder="Give us a short summary of what happens in the book" />
          </Form.Group>
          <Form.Group controlId="status">
            <Form.Label>Book status</Form.Label>
            <Form.Control type="text" placeholder="Is this book in print, or out of print?" />
          </Form.Group>
          <Button type="submit">Add my book!</Button>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          
        </Modal.Footer>
      </Modal>
    )
  }
}

export default BookFormModal;