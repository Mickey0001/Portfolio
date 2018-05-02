import React, { Component } from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import Menu from './Components/Menu/Menu';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Clients from './Components/Clients/Clients';
import Projects from './Components/Projects/Projects';
import Carousel from './Components/Carousel/Carousel';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
        <Menu/>
        <Header/>
        <About/>
        <Projects/>
        <Clients/>
        <Carousel/>
        <Contact/>
        <Footer/>
      </div>
    );
  }
}

export default App;