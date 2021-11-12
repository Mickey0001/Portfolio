import React from 'react';
import LeadershipLessons from '../../../src/Images/LeassonsLearnedAboutLeadershipMotArticle.png';
import ExploratoryTools from '../../../src/Images/ExploratoryToolsForBetterTesting.jpg';
import Basheskia from '../../../src/Images/BasheskiaEdward.jpg';
import BuvaShop from '../../../src/Images/BuvaShop.jpg';
import Amuleto from '../../../src/Images/AmuletoDesigns.jpg';
import Morais from '../../../src/Images/DilmaMorais.jpg';
import Auto from '../../../src/Images/EnterpriseAutoTransport.jpg';
import Fence from '../../../src/Images/EasyFenceFix.jpg';

const Projects = () => (
  <div className="container" id="workwrap">
  <h3 className="text-center heading"><strong>My Work</strong></h3>
  <h4 className="minor-heading"><strong>What I've been up to lately</strong></h4>
  
    <div className="row">
        <div className="col-sm-6 col-md-3">
            <div className="thumbnail">
              <img className="img-responsive project" src={LeadershipLessons} alt="Lessons Learned About Leadership, From Perspective Of An Aspiring Leader - For testers trying to get into Team Lead or similar roles, article by Mirza Sisic"/>
              <div className="caption">
                <h3>Lessons Learned About Leadership, From Perspective Of An Aspiring Leader</h3>
                <p className="DarkGreyHeading">Ministry of Testing - The Testing Planet 2021</p>
                <p><a href="https://www.ministryoftesting.com/dojo/lessons/lessons-learned-about-leadership-from-perspective-of-an-aspiring-leader" className="btn btn-default LightGreyBackground" target="_blank" rel="noopener noreferrer" role="button">Read the article</a></p>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-3">
            <div className="thumbnail">
              <img className="img-responsive project" src={ExploratoryTools} alt="Software Tools For Easy, Effective Exploratory Testing, article by Mirza Sisic"/>
              <div className="caption">
                <h3>Software Tools For Easy, Effective Exploratory Testing</h3>
                <p className="DarkGreyHeading">Ministry of Testing - The Testing Planet 2021</p>
                <p><a href="https://www.ministryoftesting.com/dojo/lessons/software-tools-for-easy-effective-exploratory-testing" className="btn btn-default LightGreyBackground" target="_blank" rel="noopener noreferrer" role="button">Read the article</a></p>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-3">
            <div className="thumbnail">
              <img className="img-responsive project" src={Basheskia} alt="Basheskia and Edward EQ"/>
              <div className="caption">
                <h3>Basheskia &amp; Edward</h3>
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
    <h4 className="minor-heading"><strong>Sites I contributed to</strong></h4>
    
        <div className="col-sm-6 col-md-3">
                <div className="thumbnail">
                  <img className="img-responsive project" src={Amuleto} alt="BuvaShop logo"/>
                  <div className="caption">
                    <h3>Amuleto Designs</h3>
                    <p className="DarkGreyHeading">eCommerce Website</p>
                    <p><a href="https://amuletodesigns.com/" className="btn btn-default LightGreyBackground" target="_blank" rel="noopener noreferrer" role="button">Live Site</a></p>
                  </div>
                </div>
          </div>
          <div className="col-sm-6 col-md-3">
                <div className="thumbnail">
                  <img className="img-responsive project" src={Auto} alt="BuvaShop logo"/>
                  <div className="caption">
                    <h3>EnterpriseAuto</h3>
                    <p className="DarkGreyHeading">Company Website</p>
                    <p><a href="https://amuletodesigns.com/" className="btn btn-default LightGreyBackground" target="_blank" rel="noopener noreferrer" role="button">Live Site</a></p>
                  </div>
                </div>
          </div>
          <div className="col-sm-6 col-md-3">
                <div className="thumbnail">
                  <img className="img-responsive project" src={Morais} alt="BuvaShop logo"/>
                  <div className="caption">
                    <h3>Dilma Morais</h3>
                    <p className="DarkGreyHeading">Personal Website</p>
                    <p><a href="https://dilmamoraiskinesiology.com/" className="btn btn-default LightGreyBackground" target="_blank" rel="noopener noreferrer" role="button">Live Site</a></p>
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