import React from 'react';
import Carousel from 'nuka-carousel';
import Safet from '../../../src/Images/Safet.jpg';
import Dilma from '../../../src/Images/Dilma.jpg';
import Dijana from '../../../src/Images/Dijana.jpg';
import Zoran from '../../../src/Images/Zoran.jpg';
import Emilis from '../../../src/Images/Emilis.jpg';
import Titos from '../../../src/Images/Titos.jpg';
import Nedim from '../../../src/Images/Nedim.jpg';
import Lejla from '../../../src/Images/Lejla.jpg';

export default class extends React.Component {
  render() {
    return (
      <Carousel wrapAround={true} autoplay={true} speed={300} id="carousel" className="text-center">
          <div className="carousel-item">
              <p className="text-center ClientQuote">"Mirza is a very competent developer, patient and efficient."</p>
              <img className="ClientImage" alt="Safet Begic" src={Safet}/>
              <p>Safet Begic<br/><span className="ClientInfo">Painter and Photographer</span></p>
          </div>
          <div className="longQuote carousel-item">
              <p className="text-center ClientQuote">"It was wonderful to work with Mirza. Efficient, skilled, was fast, easy going, fast at responding to my requests, managed to learn how to work things out and communicated his progress and challenges. I will hire him again and fully recommend. Thank you so much for your reliability, professionalism and caring nature."</p>
              <img className="ClientImage" alt="Dilma Morais"  src={Dilma}/>
              <p>Dilma Morais<br/><span className="ClientInfo">Upwork Client</span></p>
          </div>
          <div className="carousel-item">
              <p className="text-center ClientQuote">"Punctual and emphatic towards people who are not too tech savvy. Mirza was very kind and pleasant to work with."</p>
              <img className="ClientImage" alt="Dijana Lekic" src={Dijana}/>
              <p>Dijana Lekic<br/><span className="ClientInfo">MSc in Chemistry</span></p>
          </div>
          <div className="carousel-item">
              <p className="text-center ClientQuote">"I have to say, if you want a professional looking website, Mirza is the guy you're looking for."</p>
              <img className="ClientImage" alt="Zoran Milanovic" src={Zoran}/>
              <p>Zoran Milanovic<br/><span className="ClientInfo">eCommerce Owner</span></p>
          </div>
          <div className="carousel-item">
              <p className="text-center ClientQuote">"It was a pleasing experience working together. Everything was done according to the instructions and in timely manner. Recommended!"</p>
              <img className="ClientImage" alt="Emilis Strimaitis" src={Emilis}/>
              <p>Emilis (Emka) Strimaitis<br/><span className="ClientInfo">Upwork Client</span></p>
          </div>
          <div className="carousel-item">
              <p className="text-center ClientQuote">"Great work, recommend."</p>
              <img className="ClientImage" alt="Titos Toupoyannis" src={Titos}/>
              <p>Titos Toupoyannis<br/><span className="ClientInfo">Upwork Client</span></p>
          </div>
          <div className="carousel-item">
              <p className="text-center ClientQuote">"Mirza is bla bla."</p>
              <img className="ClientImage" alt="Nedim Zlatar" src={Nedim}/>
              <p>Nedim Zlatar<br/><span className="ClientInfo">Music Producer</span></p>
          </div>
          <div className="carousel-item">
              <p className="text-center ClientQuote">"Mirza is bla bla."</p>
              <img className="ClientImage" alt="Lejla Alimanovic" src={Lejla}/>
              <p>Lejla Alimanovic<br/><span className="ClientInfo">Jazz Vocalist</span></p>
          </div>
      </Carousel>
    );
  }
}