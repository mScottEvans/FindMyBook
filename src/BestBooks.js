import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Image } from 'react-bootstrap';
// import img from './img/LOTR.jpg';





require('dotenv').config();


class BestBooks extends React.Component {
  

  render() {

    /* TODO: render all the books in a Carousel */
    return (
      <>
        {this.state.books.length ? (
          <Carousel>
            
            {this.state.books.map((element, idx) =>
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




