import React from 'react';
import Logo from '../../../src/Images/MirzaLogo.png';

const today = new Date();

const Footer = () => (
	<div id="footerwrap">
		<div className="container">
			<div className="row centered">
				<div className="">
				<img alt="Mirza Sisic logo" src={Logo}/>
				</div><br/>
			</div>		
		</div>
		<p id="copyright" className="text-center">	&copy;<span>{today.getFullYear()}&nbsp;mirzasisic.com</span> <br/>Powered by React</p>
	</div>
);

export default Footer;
