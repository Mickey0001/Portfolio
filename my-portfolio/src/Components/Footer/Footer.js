import React from 'react';

const today = new Date();

const Footer = () => (
	<div id="footerwrap">
		<div className="container">
			<div className="row centered">
				<div className="col-lg-4">
					<p><strong>Web Developer &amp; Meme Lover</strong>
					<br/>Living in the beautiful city of Sarajevo.</p>
				</div>
				<div className="col-lg-4">
					<p>	&copy;<span>{today.getFullYear()}</span> mirzasisic.com</p>
				</div>
				<div className="col-lg-4">
					<p>info@mirzasisic.com</p>
				</div>
			</div>
		</div>
	</div>
);

export default Footer;