import React from 'react';
import Wufoo from 'react-wufoo-embed';
 
const WufooForm = require('react-wufoo-embed');

const Contact = () => (
	<div id="Contact" className="container">
    <div className="col-lg-4 col-lg-offset-4">
      <h3 className="text-center heading"><strong>Contact</strong></h3>
      <WufooForm userName="mirzasisic" formHash="z127fhcz1dac45w" />
    </div>
	</div>
);

export default Contact;