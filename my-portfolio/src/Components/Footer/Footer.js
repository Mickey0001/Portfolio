import React from 'react';
import Logo from '../../../src/Images/MirzaLogo.png';

const today = new Date();

const Footer = () => (
	<div id="footerwrap">
		<div className="container">
			<div className="row centered">
				<div className="">
				<img alt="Mirza Sisic logo" src={Logo}/>
				</div>
				<div className="row social">
							<div>
								<a title="GitHub" href="https://github.com/Mickey0001" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a>
							</div>
							<div>
								<a title="Twitter" href="https://twitter.com/MickeySisic" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a>
							</div>
							<div>
								<a title="LinkedIn" href="https://www.linkedin.com/in/sisicmirza" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>
							</div>
							<div>
								<a title="Facebook" href="https://www.facebook.com/juniorlearnstocode/" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a>
							</div>
							<div>
								<a title="Google Plus" href="https://plus.google.com/u/0/+mirzasisic" target="_blank" rel="noopener noreferrer"><i className="fa fa-google-plus"></i></a>
							</div>
							<div>
								<a title="Stack Overflow" href="https://stackoverflow.com/users/7443287/mirza-sisic" target="_blank" rel="noopener noreferrer"><i className="fa fa-stack-overflow"></i></a>
							</div>
							<div>
								<a title="CodePen" href="https://codepen.io/mickey0001/" target="_blank" rel="noopener noreferrer"><i className="fa fa-codepen"></i></a>
							</div>
							<div>
								<a title="Free Code Camp" href="https://www.freecodecamp.org/mickey0001/" target="_blank" rel="noopener noreferrer"><i className="fa fa-free-code-camp"></i></a>
							</div>
					</div>		
			</div>		
		</div>
		<p id="copyright" className="text-center">	&copy;<span>{today.getFullYear()}&nbsp;mirzasisic.com</span> <br/>Powered by React</p>
	</div>
);

export default Footer;
