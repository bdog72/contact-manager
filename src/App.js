import React, { Component } from 'react';
import Contact from './components/Contact';
import Header from './components/Header';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header branding="Contact Manager" />
        <div className="container">
          <Contact
            name="John Doe"
            email="jdoe@gmail.com"
            phone="555-555-5555"
          />
          <Contact
            name="Jane Smith"
            email="janesmith@gmail.com"
            phone="777-777-7777"
          />
        </div>
      </div>
    );
  }
}

export default App;
