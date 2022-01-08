import React from 'react';
import LeadershipLessons from '../../../src/Images/LeassonsLearnedAboutLeadershipMotArticle.png';
import ExploratoryTools from '../../../src/Images/ExploratoryToolsForBetterTesting.jpg';
import MisconceptionsExploratory from '../../../src/Images/CommonMisconceptionsAboutExploratoryTesting.jpg';
import TestingAMA from '../../../src/Images/MotAmaTestingToolsWithMirzaSisic.png';

const Projects = () => (
  <div className="container" id="workwrap">
    <h3 className="text-center heading"><strong>Activities</strong></h3>
    <h4 className="minor-heading"><strong>What I've been up to lately</strong></h4>

    <div className="row">
      <div className="col-sm-6 col-md-3">
        <div className="thumbnail">
          <img className="img-responsive project" src={LeadershipLessons} alt="Lessons Learned About Leadership, From Perspective Of An Aspiring Leader - For testers trying to get into Team Lead or similar roles, article by Mirza Sisic" />
          <div className="caption">
            <h3>Lessons Learned About Leadership, From Perspective Of An Aspiring Leader</h3>
            <p className="DarkGreyHeading">Ministry of Testing - The Testing Planet 2021</p>
            <span className="spacer"></span>
            <p><a href="https://www.ministryoftesting.com/dojo/lessons/lessons-learned-about-leadership-from-perspective-of-an-aspiring-leader" className="btn btn-default LightGreyBackground" target="_blank" rel="noopener noreferrer" role="button">Read the article</a></p>
          </div>
        </div>
      </div>

      <div className="col-sm-6 col-md-3">
        <div className="thumbnail">
          <img className="img-responsive project" src={ExploratoryTools} alt="Software Tools For Easy, Effective Exploratory Testing, article by Mirza Sisic" />
          <div className="caption">
            <h3>Software Tools <br /> For Easy, Effective Exploratory Testing</h3><br />
            <p className="DarkGreyHeading">Ministry of Testing - The Testing Planet 2021</p><br />

            <p><a href="https://www.ministryoftesting.com/dojo/lessons/software-tools-for-easy-effective-exploratory-testing" className="btn btn-default LightGreyBackground" target="_blank" rel="noopener noreferrer" role="button">Read the article</a></p>
          </div>
        </div>
      </div>

      <div className="col-sm-6 col-md-3">
        <div className="thumbnail">
          <img className="img-responsive project" src={MisconceptionsExploratory} alt="Common Misconceptions About Exploratory Testing - article" />
          <div className="caption">
            <h3>Common Misconceptions About Exploratory Testing</h3>
            <p className="DarkGreyHeading">Ministry of Testing - The Testing Planet 2021</p>
            <span className="spacer"></span>
            <p><a href="https://www.ministryoftesting.com/dojo/lessons/common-misconceptions-about-exploratory-testing" className="btn btn-default LightGreyBackground" target="_blank" rel="noopener noreferrer" role="button">Read the article</a></p>
          </div>
        </div>
      </div>

      <div className="col-sm-6 col-md-3">
        <div className="thumbnail">
          <img className="img-responsive project" src={TestingAMA} alt="Testing Ask Me Anything - Testing Tools with Mirza Sisic" />
          <div className="caption">
            <h3>Testing Ask Me Anything - Testing Tools with Mirza Sisic</h3>
            <p className="DarkGreyHeading">Ministry of Testing - Testing Ask Me Anything</p>
            <span className="spacer"></span>
            <p><a href="https://www.ministryoftesting.com/dojo/lessons/testing-ask-me-anything-testing-tools-with-mirza-sisic" className="btn btn-default LightGreyBackground" target="_blank" rel="noopener noreferrer" role="button">Watch the recording</a></p>
          </div>
        </div>
      </div>

    </div>
  </div>
);

export default Projects;