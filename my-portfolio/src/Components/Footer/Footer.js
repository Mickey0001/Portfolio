import React from 'react';


const today = new Date();

const Footer = () => (
	<div id="footerwrap">
		<div className="container">
			<div className="row centered">
				<div className="pull-left">
					<p id="copyright">	&copy;<span>{today.getFullYear()}&nbsp;mirzasisic.com</span></p>
				</div>
				<div className="row pull-right">
							<div className="col-lg-2 col-md-2 col-xs-1">
								<a href="https://stackoverflow.com/users/story/7443287" target="_blank" rel="noopener noreferrer"><i className="fa fa-stack-overflow  fa-1x"></i></a>
							</div>
							<div className="col-lg-2 col-md-2 col-xs-1">
								<a href="https://www.facebook.com/juniorlearnstocode/" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook fa-1x"></i></a>
							</div>
							<div className="col-lg-2 col-md-2 col-xs-1">
								<a href="https://twitter.com/MickeySisic" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter fa-1x"></i></a>
							</div>
							<div className="col-lg-2 col-md-2 col-xs-1">
								<a href="https://www.linkedin.com/in/sisicmirza" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin fa-1x"></i></a>
							</div>
							<div className="col-lg-2 col-md-2 col-xs-1">
								<a href="https://github.com/Mickey0001" target="_blank" rel="noopener noreferrer"><i className="fa fa-github fa-1x"></i></a>
							</div>
							<div className="col-lg-2 col-md-2 col-xs-1">
								<a href="https://plus.google.com/u/0/+mirzasisic" target="_blank" rel="noopener noreferrer"><i className="fa fa-google-plus fa-1x"></i></a>
							</div>
					</div>		
			</div>		
		</div>
	</div>
);

export default Footer;