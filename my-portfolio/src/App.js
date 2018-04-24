import React, { Component } from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import Menu from './Components/Menu/Menu';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Recommendations from './Components/Recommendations/Recommendations';
import Projects from './Components/Projects/Projects';
import Carousel from './Components/Carousel/Carousel';
import ContactForm from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu/>
        <Header/>
        <About/>
        <Projects/>
        <Recommendations/>
        <Carousel/>
        <ContactForm/>
        <Footer/>
      </div>
    );
  }
}

export default App;
