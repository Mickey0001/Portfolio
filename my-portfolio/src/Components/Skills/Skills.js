import React from 'react';
import HTML from '../SVG/HTML';
import CSS from '../SVG/CSS';
import JavaScript from '../SVG/JavaScript';
import Sass from '../SVG/Sass';
import Jquery from '../SVG/Jquery';
import Reactjs from '../SVG/Reactjs';
import Vue from '../SVG/Vue';
import Bootstrap from '../SVG/Bootstrap';
import PHP from '../SVG/PHP';
import Laravel from '../SVG/Laravel';
import WordPress from '../SVG/WordPress';
import Git from '../SVG/Git';
import MySql from '../SVG/MySql';
import DotNet from '../SVG/DotNet';
import Less from '../SVG/Less';
import Gulp from '../SVG/Gulp'; 
import CSharp from '../SVG/CSharp'; 
import Java from '../SVG/Java'; 
  
const Skills = () => (
  <div>

      <div id="Skills" className="row skills">
          <h3 className="text-center heading"><strong>Skills</strong></h3>
                <HTML/>
                <CSS/>
                <JavaScript/>
                <CSharp/>
                <DotNet/>
                <PHP/>
        </div>

        <div className="row skills">
                <WordPress/>
                <Laravel/>
                <Vue/>
                <Reactjs/> 
                <Jquery/>
                <Bootstrap/>
        </div>

        <div className="row skills-bottom">
                <Git/>
                <MySql/>
                <Java/>
                <Sass/>
                <Less/>
                <Gulp/>
        </div>
  </div>
);

export default Skills;




