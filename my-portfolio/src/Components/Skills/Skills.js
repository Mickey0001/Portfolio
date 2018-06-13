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
import Mongo from '../SVG/Mongo';
import GitHub from '../SVG/GitHub';
import TypeScript from '../SVG/TypeScript';
import Vagrant from '../SVG/Vagrant';
import Webpack from '../SVG/Webpack';
import Less from '../SVG/Less';
import Gulp from '../SVG/Gulp'; 
import Handlebars from '../SVG/Handlebars';
import Express from '../SVG/Express';
import Docker from '../SVG/Docker';
import Babel from '../SVG/Babel';
  
const Skills = () => (
  <div>

      <div id="Skills" className="row skills">
          <h3 className="text-center heading"><strong>Skills</strong></h3>
                <HTML/>
                <CSS/>
                <JavaScript/>
                <PHP/>
                <WordPress/>
                <Laravel/>
        </div>

        <div className="row skills">
                <Vue/>
                <Reactjs/> 
                <Jquery/>
                <Bootstrap/>
                <Git/>
                <Vagrant/>
        </div>

        <div className="row skills-bottom">
                <MySql/>
                <Mongo/>
                <Sass/>
                <Less/>
                <Webpack/>
                <Gulp/>
        </div>
  </div>
);

export default Skills;




