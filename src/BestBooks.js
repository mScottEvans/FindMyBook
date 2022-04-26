import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
// import img from './img/LOTR.jpg';





require('dotenv').config();



class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  getBooks = async () => {

    try {
      let results = await axios.get(`${process.env.REACT_APP_SERVER}/books`);
      this.setState({
        books: results.data
      })
    }
    catch (error) {
      console.log('error', error.response);
    }
  }
  componentDidMount() {
    this.getBooks();
  }

  render() {

    /* TODO: render all the books in a Carousel */
    return (
      <>
        {this.state.books.length ? (
          <Carousel>
            
            {this.state.books.map((element, idx) =>
            (

              <Carousel.Item key={idx}>
                <img
                  className='BookOne'
                  src="https://images-na.ssl-images-amazon.com/images/I/51kfFS5-fnL._SX332_BO1,204,203,200_.jpg"
                  alt='Lord Of The Rings'
                />
                <h3>{element.title}</h3>
                <h4>{element.description}</h4>
                <p>{element.status}</p>
              </Carousel.Item>


            ))}
          </Carousel>
        ) : (
          <h3>No Books Found</h3>
        )}
      </>

    )
  }
}

export default BestBooks;
