import React, { Component } from 'react';
import Menu from './Components/Menu/Menu';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Social from './Components/Social/Social';
import Footer from './Components/Footer/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu/>
        <Header/>
        <About/>
        <Social/>
        <Footer/>
      </div>
    );
  }
}

export default App;
