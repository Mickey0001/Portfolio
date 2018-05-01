import React from 'react';
import SafetBeg from '../../../src/Images/SafetBeg.jpg';
import Dijana from '../../../src/Images/Dijana.science.jpg';
import Basheskia from '../../../src/Images/BasheskiaEdward.jpg';
import BuvaShop from '../../../src/Images/BuvaShop.jpg';
import Amuleto from '../../../src/Images/AmuletoDesigns.jpg';
import Morais from '../../../src/Images/DilmaMorais.jpg';
import Auto from '../../../src/Images/EnterpriseAutoTransport.jpg';
import Fence from '../../../src/Images/EasyFenceFix.jpg';

const Projects = () => (
  <div className="container" id="workwrap">
  <h3 className="text-center heading"><strong>Projects</strong></h3><hr/>
  <h4 className="minor-heading">Sites made by me</h4>
  
    <div className="row">
        <div className="col-sm-6 col-md-3">
            <div className="thumbnail">
              <img className="img-responsive project" src={SafetBeg} alt="Painting by Safet Begic"/>
              <div className="caption">
                <h3>Safetbeg.com</h3>
                <p className="DarkGreyHeading">Artist Portfolio</p>
                <p><a href="https://safetbeg.com/" className="btn btn-default LightGreyBackground" target="_blank" rel="noopener noreferrer" role="button">Live Site</a> <a href="https://github.com/Mickey0001/SafetBeg/" target="_blank" rel="noopener noreferrer" className="btn btn-default DarkGreyBackground" role="button">View Code</a></p>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-3">
            <div className="thumbnail">
              <img className="img-responsive project" src={Dijana} alt="Dijana science"/>
              <div className="caption">
                <h3>Dijana.science</h3>
                <p className="DarkGreyHeading">Chemist Portfolio</p>
                <p><a href="https://dijana.science/" className="btn btn-default LightGreyBackground" target="_blank" rel="noopener noreferrer" role="button">Live Site</a> <a href="https://github.com/Mickey0001/Dixie/" target="_blank" rel="noopener noreferrer" className="btn btn-default DarkGreyBackground" role="button">View Code</a></p>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-3">
            <div className="thumbnail">
              <img className="img-responsive project" src={Basheskia} alt="Basheskia and Edward EQ"/>
              <div className="caption">
                <h3>Basheskia &amp; Edward EQ</h3>
                <p className="DarkGreyHeading">Band Website</p>
                <p><a href="https://basheskiawordpress.000webhostapp.com/" className="btn btn-default LightGreyBackground" target="_blank" rel="noopener noreferrer" role="button">Live Site</a> <a href="https://github.com/Mickey0001/Basko/" target="_blank" rel="noopener noreferrer" className="btn btn-default DarkGreyBackground" role="button">View Code</a></p>
              </div>
            </div>
          </div>

           <div className="col-sm-6 col-md-3">
            <div className="thumbnail">
              <img className="img-responsive project" src={BuvaShop} alt="BuvaShop logo"/>
              <div className="caption">
                <h3>BuvaShop</h3>
                <p className="DarkGreyHeading">eCommerce Website</p>
                <p><a href="https://buvashop.com/" className="btn btn-default LightGreyBackground" target="_blank" rel="noopener noreferrer" role="button">Live Site</a> <a href="https://github.com/Mickey0001/BuvaShop/" target="_blank" rel="noopener noreferrer" className="btn btn-default DarkGreyBackground" role="button">View Code</a></p>
              </div>
            </div>
          </div>
    </div>
    <div className="row"> 
    <h4 className="minor-heading">Sites I contributed to</h4><hr/><br/>
    
        <div className="col-sm-6 col-md-3">
                <div className="thumbnail">
                  <img className="img-responsive project" src={Amuleto} alt="BuvaShop logo"/>
                  <div className="caption">
                    <h3>AmuletoDesigns</h3>
                    <p className="DarkGreyHeading">eCommerce Website</p>
                    <p><a href="https://amuletodesigns.com/" className="btn btn-default LightGreyBackground" target="_blank" rel="noopener noreferrer" role="button">Live Site</a></p>
                  </div>
                </div>
          </div>
          <div className="col-sm-6 col-md-3">
                <div className="thumbnail">
                  <img className="img-responsive project" src={Auto} alt="BuvaShop logo"/>
                  <div className="caption">
                    <h3> Enterprise Auto Transport</h3>
                    <p className="DarkGreyHeading">Company Website</p>
                    <p><a href="https://amuletodesigns.com/" className="btn btn-default LightGreyBackground" target="_blank" rel="noopener noreferrer" role="button">Live Site</a></p>
                  </div>
                </div>
          </div>
          <div className="col-sm-6 col-md-3">
                <div className="thumbnail">
                  <img className="img-responsive project" src={Morais} alt="BuvaShop logo"/>
                  <div className="caption">
                    <h3>Dilma Morais Kinesiology</h3>
                    <p className="DarkGreyHeading">Personal Website</p>
                    <p><a href="http://www.dilmamoraiskinesiology.com/" className="btn btn-default LightGreyBackground" target="_blank" rel="noopener noreferrer" role="button">Live Site</a></p>
                  </div>
                </div>
          </div>
          <div className="col-sm-6 col-md-3">
                <div className="thumbnail">
                  <img className="img-responsive project" src={Fence} alt="BuvaShop logo"/>
                  <div className="caption">
                    <h3>Easy Fence Fix</h3>
                    <p className="DarkGreyHeading">Company Website</p>
                    <p><a href="https://easyfencefix.co.uk" className="btn btn-default LightGreyBackground" target="_blank" rel="noopener noreferrer" role="button">Live Site</a></p>
                  </div>
                </div>
          </div>
    </div>
</div>
);

export default Projects;