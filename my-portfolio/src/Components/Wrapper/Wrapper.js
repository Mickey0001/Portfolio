import React from 'react';
import About from '../../Components/About/About';
import Resume from '../../Components/Resume/Resume';
import Projects from '../../Components/Projects/Projects';
import Contact from '../../Components/Contact/Contact';

const Wrapper = () => (
	<div className="container">
        <About/>
        <Resume/>
        <Projects/>
        <Contact/>
	</div>
);

export default Wrapper;
