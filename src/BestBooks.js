import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
// import img from './img/LOTR.jpg';
import UpdateBookModal from './UpdateBookModal';


require('dotenv').config();



class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    }
  }

  showModalHandler = () => {
    this.setState({
      showModal: true
    });
  }

  hideModalHandler = () => {
    this.setState({
      showModal: false
    });
  }
  render() {

    /* TODO: render all the books in a Carousel */
    return (
      <>
        {this.props.books.length ? (
          <div style={{
            margin: 'auto',
            width: '25%',
          }}>
            <Carousel>
              {this.props.books.map((element, idx) =>
              (
                <Carousel.Item key={idx}>
                  <Image
                    className='BookOne'
                    src="https://images-na.ssl-images-amazon.com/images/I/51kfFS5-fnL._SX332_BO1,204,203,200_.jpg"
                    alt='Lord Of The Rings'
                  />
                  <h3>{element.title}</h3>
                  <h4>{element.description}</h4>
                  <p>{element.status}</p>
                  <Carousel.Caption>
                    <Button
                      onClick={() => this.props.deleteBook(element._id)}
                      type="submit"
                      variant="secondary"
                    >
                      Delete this book</Button>
                    <Button
                      onClick={this.showModalHandler}
                      
                      type="submit"
                      variant="primary"
                    >
                      Update this book</Button>

                  </Carousel.Caption>
                  <UpdateBookModal
                    showModal={this.state.showModal}
                    hideModalHandler={this.hideModalHandler}
                    book={element}
                    updateBook={this.props.updateBook}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        ) : (
          <h3>No Books Found</h3>
        )}
      </>
    )
  }
}

export default BestBooks;
