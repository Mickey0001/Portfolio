import React, { Component } from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import Menu from './Components/Menu/Menu';
import Header from './Components/Header/Header';
import Wrapper from './Components/Wrapper/Wrapper';
import Footer from './Components/Footer/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
        <Menu/>
        <Header/>
        <Wrapper/>
        <Footer/>
      </div>
    );
  }
}

export default App;