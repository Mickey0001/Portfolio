import React from 'react';
import Logo from '../../../src/Images/MirzaSisicLogo.png';

const today = new Date();

const Footer = () => (
	<div id="footerwrap">
		<div className="container">
			<div className="row centered">
				<div className="">
				<img alt="MS logo" src={Logo}/>
				</div>
				<div className="row" id="social">
							<div>
								<a href="https://stackoverflow.com/users/story/7443287" target="_blank" rel="noopener noreferrer"><i className="fa fa-stack-overflow  fa-1x"></i></a>
							</div>
							<div>
								<a href="https://www.facebook.com/juniorlearnstocode/" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook fa-1x"></i></a>
							</div>
							<div>
								<a href="https://twitter.com/MickeySisic" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter fa-1x"></i></a>
							</div>
							<div>
								<a href="https://www.linkedin.com/in/sisicmirza" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin fa-1x"></i></a>
							</div>
							<div>
								<a href="https://github.com/Mickey0001" target="_blank" rel="noopener noreferrer"><i className="fa fa-github fa-1x"></i></a>
							</div>
							<div>
								<a href="https://plus.google.com/u/0/+mirzasisic" target="_blank" rel="noopener noreferrer"><i className="fa fa-google-plus fa-1x"></i></a>
							</div>
					</div>		
			</div>		
		</div>
		<p id="copyright" className="text-center">	&copy;<span>{today.getFullYear()}&nbsp;mirzasisic.com</span> <br/>Powered by React</p>
	</div>
);

export default Footer;
