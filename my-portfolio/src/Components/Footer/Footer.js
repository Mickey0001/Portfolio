import React from 'react';

const today = new Date();

const Footer = () => (
	<div id="footerwrap">
		<div className="container">
			<div className="row centered">
				<div className="col-lg-12">
					<p>	&copy;<span>{today.getFullYear()}</span> mirzasisic.com</p>
				</div>
			</div>
		</div>
	</div>
);

export default Footer;