import React from 'react';
import About from '../../Components/About/About';
import Clients from '../../Components/Clients/Clients';
import Resume from '../../Components/Resume/Resume';
import Projects from '../../Components/Projects/Projects';
import Carousel from '../../Components/Carousel/Carousel';
import Skills from '../../Components/Skills/Skills';
import Contact from '../../Components/Contact/Contact';

const Wrapper = () => (
	<div className="container">
        <About/>
        <Resume/>
        <Projects/>
        <Clients/>
        <Carousel/>
        <Skills/>
        <Contact/>
	</div>
);

export default Wrapper;
