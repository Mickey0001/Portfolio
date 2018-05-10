import React from 'react';

const Contact = () => (
	<div id="Contact" className="container text-center">
    <h3 className="text-center heading"><strong>Contact</strong></h3>
    <h4 className="text-center  minor-heading">Send me an email.</h4>
    <a href="mailto:mirzasisic57@gmail.com?Subject=Website%20visitor" target="_top">
    <button className="btn btn-basic btn-lg email"><i className="fa fa-at fa-4x"></i></button></a><br/>
    <h4 className="text-center  minor-heading">Or connect with me over social media.</h4>
	</div>
);

export default Contact;