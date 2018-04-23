import React from 'react';
import Carousel from 'nuka-carousel';

export default class extends React.Component {
  render() {
    return (
      <Carousel id="carousel" className="text-center">
          <div className="carousel-item">
              <p className="text-center ClientQuote">"Mirza is a very competent developer, patient and efficient."</p>
              <img className="ClientImage" alt="Safet Begic" src="https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/1425682_10152040074007750_7040222278702524092_n.jpg?_nc_cat=0&_nc_eui2=v1%3AAeF9xA51Gx6sYZyYUk0fe5bdUKvvltlqHB5soJUga_1yyv8Q9GheCUbXils9E2g6Vn6rEk2G-Li99mbJgrMtNuJRN2VlpkpyviWR4958L957SQ&oh=5b2b36a16b08d369d9f1e7518eab1ab4&oe=5B65CD11"/>
              <p>Safet Begic<br/><span className="ClientInfo">Painter and Photographer</span></p>
          </div>
          <div className="carousel-item">
              <p className="text-center ClientQuote">"It was wonderful to work with Mirza. Efficient, skilled, was fast, easy going, fast at responding to my requests, managed to learn how to work things out and communicated his progress and challenges. I will hire him again and fully recommend. Thank you so much for your reliability, professionalism and caring nature."</p>
              <img className="ClientImage" alt="Dilma Morais"  src="https://i.pinimg.com/avatars/Amuletodesigns_1450749734_280.jpg"/>
              <p>Dilma Morais<br/><span className="ClientInfo">Upwork Client</span></p>
          </div>
          <div className="carousel-item">
              <p className="text-center ClientQuote">"Punctual and emphatic towards people who are not too tech savvy. Mirza was very kind and pleasant to work with."</p>
              <img className="ClientImage" alt="Dijana Lekic" src="data:image/jpeg;base64,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"/>
              <p>Dijana Lekic<br/><span className="ClientInfo">MSc in Chemistry</span></p>
          </div>
          <div className="carousel-item">
              <p className="text-center ClientQuote">"I have to say, if you want a professional looking website, Mirza is the guy you're looking for."</p>
              <img className="ClientImage" alt="Zoran Milanovic" src="https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-0/q83/p206x206/14642036_1284657998219117_2942201497947592162_n.jpg?_nc_cat=0&_nc_eui2=v1%3AAeFnHmOfRT72ZM0wPNc2G0MsueYGCS2QFHfXbi6NUtK6dG3l1YHeA7AoPKvsoTUbQ63xu1YMvXg5GTIWX3AtTJrpWcvrwUdqV2XGknzUULgF-Q&oh=a204786f8026e690079f85fd91cd231a&oe=5B6F1F1A"/>
              <p>Zoran Milanovic<br/><span className="ClientInfo">eCommerce Owner</span></p>
          </div>
          <div className="carousel-item">
              <p className="text-center ClientQuote">"It was a pleasing experience working together. Everything was done according to the instructions and in timely manner. Recommended!"</p>
              <img className="ClientImage" alt="Emilis Strimaitis" src="data:image/jpeg;base64,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"/>
              <p>Emilis (Emka) Strimaitis<br/><span className="ClientInfo">Upwork Client</span></p>
          </div>
          <div className="carousel-item">
              <p className="text-center ClientQuote">"Great work, recommend."</p>
              <img className="ClientImage" alt="Titos Toupoyannis" src="https://media.licdn.com/dms/image/C4D03AQHOOzqFiRPLlg/profile-displayphoto-shrink_200_200/0?e=1527958800&v=alpha&t=EosdAQ8x2Mze9nDS05EupxSTvHNUqXF1P3-oFsfKeF4"/>
              <p>Titos Toupoyannis<br/><span className="ClientInfo">Upwork Client</span></p>
          </div>
      </Carousel>
    );
  }
}