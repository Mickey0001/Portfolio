import React from 'react';

const Contact = () => (
	<div id="Contact" className="container text-center">
    <h3 className="text-center heading"><strong>Contact</strong></h3>
    <h4 className="text-center  minor-heading">Send me an email.</h4>
    <a href="mailto:mirza.sisic@outlook.com?Subject=MirzaSisic.com%20Visitor" target="_top">
    <i className="fa fa-envelope-o fa-5x email" aria-hidden="true">
    </i></a><br/>
    <h4 className="text-center  minor-heading">Or connect with me <br/> over social media.</h4>
    <div className="row social">
							<div>
								<a className="social-icons" title="GitHub" href="https://github.com/Mickey0001" target="_blank" rel="noopener noreferrer"><i className="fa fa-github fa-2x"></i></a>
							</div>
							<div>
								<a className="social-icons" title="Stack Overflow" href="https://stackoverflow.com/users/7443287/mirza-sisic?tab=profile" target="_blank" rel="noopener noreferrer"><i className="fa fa-stack-overflow fa-2x"></i></a>
							</div>
                            <div>
								<a className="social-icons" title="Free Code Camp" href="https://www.freecodecamp.org/mickey0001" target="_blank" rel="noopener noreferrer"><i className="fa fa-free-code-camp fa-2x"></i></a>
							</div>
					</div>	
                    <br/>	
                    <div className="row social">
							<div>
								<a className="social-icons" title="LinkedIn" href="https://www.linkedin.com/in/sisicmirza" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin fa-2x"></i></a>
							</div>
							<div>
								<a className="social-icons" title="Twitter" href="https://twitter.com/MickeySisic" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter fa-2x"></i></a>
							</div>
                            <div>
								<a className="social-icons" title="Facebook" href="https://www.facebook.com/juniorlearnstocode/" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook fa-2x"></i></a>
							</div>
							<div>
								<a className="social-icons" title="Pinterest" href="https://www.pinterest.com/mirzasisic57/my-blog-posts" target="_blank" rel="noopener noreferrer"><i className="fa fa-pinterest fa-2x"></i></a>
							</div>
                    </div>
	</div>
);

export default Contact;