import React from 'react';
import Header from './Header';
import BestBooks from './BestBooks';
import About from './About';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import BookFormModal from './BookFormModal';

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <BestBooks />
              <BookFormModal 
              openModal={this.state.openModal}
              hideModal={this.state.hideModal}
              handleBookSubmit={this.state.handleBookSubmit}
              />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;
