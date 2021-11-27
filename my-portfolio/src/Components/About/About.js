import React from 'react';
import Mirza from '../../../src/Images/MirzaSisic.png';

const About = () => (
	<div id="aboutwrap" className="container">
		<div className="row">
			<div className="col-lg-12">
				<h3 className="heading"><strong>About</strong></h3>
				<img src={Mirza} alt="Mirza Sisic" id="Mirza" className="img-fluid" />
				<p className="text-justify">I've always been a technology <strong>geek</strong>, friends and family would come to me to solve their computer related problems, so one fine day I  realized that since I love doing it as a hobby why not do it professionally! I decided to drop out of college (I used to study history, I still love reading history books but I love tech even more) and I started fixing PC's on the side. After that, I took a few Microsoft Certificates and those helped me land my first full time <strong>IT</strong> job - I got a remote position as a tech support specialist working for a
					Canadian e-learning  company.</p> <p className="text-justify"> I worked in tech support for little over two and a half years, while I enjoyed the job,  it felt a little too easy and I needed new challenges to test my mettle. That is when I decided to start transitioning to software testing and also started to learn coding. In my free time I'm, taking online courses, attending and organizing community meetups, blogging, working on my personal projects and mentoring junior testers.</p>
				<p className="text-justify">
					I'm the organizer and founder of the <a href="https://www.meetup.com/ministry-of-testing-sarajevo/" target="_blank" rel="noopener noreferrer">Ministry of Testing Sarajevo</a> community meetup. When I get stuck I resort to <strong>Google-fu</strong> and usually end up finding answers on sites like <strong>MoT Club</strong> forum and <strong>StackOverflow</strong>.
					I write a technical blog, called <a href="https://juniorlearnstocode.blogspot.ba/" target="_blank" rel="noopener noreferrer"> Junior Learns To Code </a> where I share my thoughts and describe my learning journey.</p>
				<p className="text-justify"><em>Currently I'm primarily focusing on improving my testing skills, getting better at automated checking, doing quality coaching, focusing on the community aspects of software testing and spamming people with memes.</em></p>
			</div>
		</div>
	</div>
);
export default About;