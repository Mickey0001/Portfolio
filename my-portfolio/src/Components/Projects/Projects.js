import React from 'react';

const Projects = () => (
  <div class="container">
  <div class="row centered mt mb">
    <h1>My Portfolio</h1>

    <div class="col-lg-4 col-md-4 col-sm-4 gallery">
      <a href="work.html"><img src={require("src/Images/portfolio/folio01.png")} class="img-responsive"/></a>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-4 gallery">
      <a href="work.html"><img src="../src/images/portfolio/folio02.png" class="img-responsive"/></a>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-4 gallery">
      <a href="work.html"><img src="../src/images/portfolio/folio03.png" class="img-responsive"/></a>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-4 gallery">
      <a href="work.html"><img src="../src/images/portfolio/folio04.png" class="img-responsive"/></a>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-4 gallery">
      <a href="work.html"/><img src="../src/images/portfolio/folio05.png" class="img-responsive"/><a/>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-4 gallery">
      <a href="work.html"><img src="../src/images/portfolio/folio06.png" class="img-responsive"/></a>
    </div>
  </div>
</div>
);

export default Projects;