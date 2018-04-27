import React from 'react';
import SafetBeg from '../../../src/Images/SafetBeg.jpg';
import Dijana from '../../../src/Images/Dijana.science.jpg';
import Dijana from '../../../src/Images/Dijana.science.jpg';
import Basheskia from '../../../src/Images/BasheskiaEdward.jpg';

const Projects = () => (
  <div className="container" id="workwrap">
  <h3 className="text-center heading"><strong>Projects</strong></h3>
  
    <div className="row">
        <div className="col-sm-6 col-md-3">
            <div className="thumbnail">
              <img className="img-responsive" src={SafetBeg} alt="Painting by Safet Begic"/>
              <div className="caption">
                <h3>Safetbeg.com</h3>
                <p>Artist portfolio website.</p>
                <p><a href="https://safetbeg.com/" className="btn btn-success" target="_blank" rel="noopener noreferrer" role="button">Live Site</a> <a href="https://github.com/Mickey0001/SafetBeg/" target="_blank" rel="noopener noreferrer" className="btn btn-info" role="button">View Code</a></p>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-3">
            <div className="thumbnail">
              <img className="img-responsive" src={Dijana} alt="Dijana science"/>
              <div className="caption">
                <h3>Dijana.science</h3>
                <p>Chemist portfolio.</p>
                <p><a href="https://dijana.science/" className="btn btn-success" target="_blank" rel="noopener noreferrer" role="button">Live Site</a> <a href="https://github.com/Mickey0001/Dixie/" target="_blank" rel="noopener noreferrer" className="btn btn-info" role="button">View Code</a></p>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-3">
            <div className="thumbnail">
              <img className="img-responsive" src="https://basheskiawordpress.000webhostapp.com/wp-content/uploads/2018/02/baskoStage-2400x1800.jpg" alt="Basheskia and Edward EQ"/>
              <div className="caption">
                <h3>Basheskia &amp; Edward EQ</h3>
                <p>Band portfolio website.</p>
                <p><a href="https://basheskiawordpress.000webhostapp.com/" className="btn btn-success" target="_blank" rel="noopener noreferrer" role="button">Live Site</a> <a href="https://github.com/Mickey0001/Basko/" target="_blank" rel="noopener noreferrer" className="btn btn-info" role="button">View Code</a></p>
              </div>
            </div>
          </div>

           <div className="col-sm-6 col-md-3">
            <div className="thumbnail">
              <img className="img-responsive" src="https://buvashop.com/wp-content/uploads/2018/02/cropped-BUVAbigLOGO-1.png" alt="BuvaShop logo"/>
              <div className="caption">
                <h3>BuvaShop</h3>
                <p>eCommerce Website.</p>
                <p><a href="https://buvashop.com/" className="btn btn-success" target="_blank" rel="noopener noreferrer" role="button">Live Site</a> <a href="https://github.com/Mickey0001/BuvaShop/" target="_blank" rel="noopener noreferrer" className="btn btn-info" role="button">View Code</a></p>
              </div>
            </div>
          </div>

    </div>

</div>
);

export default Projects;