import React from 'react';
import Carousel from 'nuka-carousel';

export default class extends React.Component {
  render() {
    return (
      <Carousel id="carousel" className="text-center">
          <div className="carousel-item">
             <p className="text-justify ClientQuote">"It was wonderful to work with Mirza. Efficient, skilled, was fast, easy going, fast at responding to my requests, managed to learn how to work things out and communicated his progress and challenges. I will hire him again and fully recommend. Thank you so much for your reliability, professionalism and caring nature."</p>
            <img className="ClientImage" src="https://i.pinimg.com/avatars/Amuletodesigns_1450749734_280.jpg"/>
            <p>Dilma Morais<br/><span className="ClientInfo">Upwork Client</span></p>
            </div>
          <div><img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2"/></div>
          <div><img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3"/></div>
          <div><img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4"/></div>
          <div><img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5"/></div>
          <div><img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6"/></div>
      </Carousel>
    );
  }
}