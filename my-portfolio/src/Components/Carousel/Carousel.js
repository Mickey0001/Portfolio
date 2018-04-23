import React from 'react';
import Carousel from 'nuka-carousel';

export default class extends React.Component {
  render() {
    return (
      <Carousel className="text-center">
          <div><img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1"/></div>
          <div><img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2"/></div>
          <div><img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3"/></div>
          <div><img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4"/></div>
          <div><img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5"/></div>
          <div><img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6"/></div>
      </Carousel>
    );
  }
}