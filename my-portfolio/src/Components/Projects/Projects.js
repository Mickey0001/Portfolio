import React from 'react';
import LeadershipLessons from '../../../src/Images/LeassonsLearnedAboutLeadershipMotArticle.png';
import ExploratoryTools from '../../../src/Images/ExploratoryToolsForBetterTesting.jpg';
import MisconceptionsExploratory from '../../../src/Images/CommonMisconceptionsAboutExploratoryTesting.jpg';
import ChallengesInTestingLegacySystems from '../../../src/Images/ChallengesInTestingLegacySystems.png';
import TestingAMA from '../../../src/Images/MotAmaTestingToolsWithMirzaSisic.png';
import ModernTestingPrinciples from '../../../src/Images/ModernTestingPrinciples.jpg';
import OrganizingYourVeryOwnTestingMeetup from '../../../src/Images/OrganizingYourVeryOwnTestingMeetup.jpg';
import ModernTestingBestPractices from '../../../src/Images/ModernTestingBestPractices.jpg';
import TheRoleOfQaInSoftwareDevelopment from '../../../src/Images/TheRoleOfQaInSoftwareDevelopment.jpg';
import MotSarajevo1 from '../../../src/Images/MotSarajevo1.jpg';
import iSQI from '../../../src/Images/iSQI.jpg';
import GeekleModerationCert from '../../../src/Images/GeekleModerationCert.png';



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

    <div className="col-sm-6 col-md-3">
      <div className="thumbnail">
        <img className="img-responsive project" src={ModernTestingPrinciples} alt="Modern Testing Principles - blog article for TestProject, by Mirza Sisic" />
        <div className="caption">
          <h3>Modern Testing Principles</h3>
          <p className="DarkGreyHeading">TestProject - Blog Article</p>
          <span className="spacer"></span>
          <p><a href="https://blog.testproject.io/2022/04/21/modern-testing-principles/" className="btn btn-default LightGreyBackground" target="_blank" rel="noopener noreferrer" role="button">Read the article</a></p>
        </div>
      </div>
    </div>

    <div className="col-sm-6 col-md-3">
      <div className="thumbnail">
        <img className="img-responsive project" src={ChallengesInTestingLegacySystems} alt="Challenges in Testing Legacy Systems - blog article for TestProject, by Mirza Sisic" />
        <div className="caption">
          <h3>Challenges in Testing Legacy Systems</h3>
          <p className="DarkGreyHeading">TestProject - Blog Article</p>
          <span className="spacer"></span>
          <p><a href="https://blog.testproject.io/2021/08/16/challenges-in-testing-legacy-systems/" className="btn btn-default LightGreyBackground" target="_blank" rel="noopener noreferrer" role="button">Read the article</a></p>
        </div>
      </div>
    </div>

    <div className="col-sm-6 col-md-3">
      <div className="thumbnail">
        <img className="img-responsive project" src={OrganizingYourVeryOwnTestingMeetup} alt="Organizing Your Very Own Testing Meetup - article" />
        <div className="caption">
          <h3>Organizing Your Very Own Testing Meetup</h3>
          <p className="DarkGreyHeading">Ministry of Testing - The Testing Planet 2022</p>
          <span className="spacer"></span>
          <p><a href="https://www.ministryoftesting.com/dojo/lessons/organizing-your-very-own-testing-meetup" className="btn btn-default LightGreyBackground" target="_blank" rel="noopener noreferrer" role="button">Read the article</a></p>
        </div>
      </div>
    </div>

    <div className="col-sm-6 col-md-3">
      <div className="thumbnail">
        <img className="img-responsive project" src={ModernTestingBestPractices} alt="Modern Testing Best Practices with Venkat Ramakrishnan - online meetup" />
        <div className="caption">
          <h3>Modern Testing Best Practices</h3>
          <p className="DarkGreyHeading">Ministry of Testing Sarajevo - Online Meetup</p>
          <span className="spacer"></span>
          <p><a href="https://www.ministryoftesting.com/dojo/lessons/organizing-your-very-own-testing-meetup" className="btn btn-default LightGreyBackground" target="_blank" rel="noopener noreferrer" role="button">Watch the Recording</a></p>
        </div>
      </div>
    </div>

    <div className="col-sm-6 col-md-3">
      <div className="thumbnail">
        <img className="img-responsive project" src={TheRoleOfQaInSoftwareDevelopment} alt="The role of QA in software development with Velibor Mandžo - online meetup" />
        <div className="caption">
          <h3>The role of QA in software development</h3>
          <p className="DarkGreyHeading">Ministry of Testing Sarajevo - Online Meetup</p>
          <span className="spacer"></span>
          <p><a href="https://www.ministryoftesting.com/dojo/series/meetups/lessons/the-role-of-qa-in-software-development" className="btn btn-default LightGreyBackground" target="_blank" rel="noopener noreferrer" role="button">Watch the Recording</a></p>
        </div>
      </div>
    </div>

    <div className="col-sm-6 col-md-3">
      <div className="thumbnail">
        <img className="img-responsive project" src={MotSarajevo1} alt="MoT Sarajevo's First Meetup with Maaret Pyhäjärvi, Conor Fitzgerald and Larry Goddard - online meetup" />
        <div className="caption">
          <h3>MoT Sarajevo's First Meetup</h3>
          <p className="DarkGreyHeading">Ministry of Testing Sarajevo - Online Meetup</p>
          <span className="spacer"></span>
          <p><a href="https://www.ministryoftesting.com/dojo/series/meetups/lessons/mot-sarajevo-s-first-meetup" className="btn btn-default LightGreyBackground" target="_blank" rel="noopener noreferrer" role="button">Watch the Recording</a></p>
        </div>
      </div>
    </div>

    <div className="col-sm-6 col-md-3">
      <div className="thumbnail">
        <img className="img-responsive project" src={iSQI} alt="MoT Sarajevo's First Meetup with Maaret Pyhäjärvi, Conor Fitzgerald and Larry Goddard - online meetup" />
        <div className="caption">
          <h3>Open Discussion ISTQB Certification: where to start?</h3>
          <p className="DarkGreyHeading">Ministry of Testing Sarajevo - Online Meetup</p>
          <span className="spacer"></span>
          <p><a href="https://www.ministryoftesting.com/dojo/series/meetups/lessons/mot-sarajevo-s-first-meetup" className="btn btn-default LightGreyBackground" target="_blank" rel="noopener noreferrer" role="button">Watch the Recording</a></p>
        </div>
      </div>
    </div>

    <div className="col-sm-6 col-md-3">
      <div className="thumbnail">
        <img className="img-responsive project" src={GeekleModerationCert} alt="MoT Sarajevo's First Meetup with Maaret Pyhäjärvi, Conor Fitzgerald and Larry Goddard - online meetup" />
        <div className="caption">
          <h3>QA Global Summit 2022</h3>
          <p className="DarkGreyHeading">Geekle - Online Conference</p>
          <span className="spacer"></span>
          <p><a href="https://youtu.be/RVDXWiqFX0M?t=594" className="btn btn-default LightGreyBackground" target="_blank" rel="noopener noreferrer" role="button">Watch the Recording</a></p>
        </div>
      </div>
    </div>

  </div>
);

export default Projects;