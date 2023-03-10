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
import TestBashCareers from '../../../src/Images/TestBashCareers.jpg';
import TestBashWorldSarajevoWatchParty from '../../../src/Images/TestBashWorldSarajevoWatchParty.jpeg';
import AutomationForJuniorTesters from '../../../src/Images/AutomationForJuniorTesters.png';
import MakeE2eTestingEasierWithTheRightTools from '../../../src/Images/MakeE2eTestingEasierWithTheRightTools.png';
import TwitterSpaceLetsExploreBDD from '../../../src/Images/TwitterSpaceLetsExploreBDD.png';
import Testival2022 from '../../../src/Images/Testival2022.png';
import SarajevoQaCrewMeetup from '../../../src/Images/SarajevoQaCrewMeetup.jpg';
import ExploreAgileSpikesShiftLeftBdd from '../../../src/Images/ExploreAgileSpikesShiftLeftBdd.png';
import MirzaAgileBosniaDays from '../../../src/Images/MirzaAgileBosniaDays.jpg';
import bddMeme from '../../../src/Images/bddMeme.jpg';
import TactaJavaBlog from '../../../src/Images/TactaJavaBlog.png';
import ProductOwnerQA from '../../../src/Images/ProductOwnerQA.jpg';
import TestshpereRoulettePodcast from '../../../src/Images/TestshpereRoulettePodcast.jpg';
import TestBashSpringIanMirzaPokekon from '../../../src/Images/TestBashSpringIanMirzaPokekon.png';

const Projects = () => (
  <div className="container">
    <div className="container" id="workwrap">
      <h3 className="text-center heading">
        <strong>Activities</strong>
      </h3>
      <h4 className="minor-heading">
        <strong>What I've been up to lately</strong>
      </h4>

      <div className="row">
        <div className="col-sm-6 col-md-3">
          <div className="thumbnail">
            <img
              className="img-responsive project"
              src={LeadershipLessons}
              alt="Lessons Learned About Leadership, From Perspective Of An Aspiring Leader - For testers trying to get into Team Lead or similar roles, article by Mirza Sisic"
            />
            <div className="caption">
              <h3>
                Lessons Learned About Leadership, From Perspective Of An
                Aspiring Leader
              </h3>
              <p className="DarkGreyHeading">MoT - The Testing Planet</p>
              <span className="spacer"></span>
              <p>
                <a
                  href="https://www.ministryoftesting.com/articles/f0720cc9?s_id=14301141"
                  className="btn btn-default LightGreyBackground"
                  target="_blank"
                  rel="noopener noreferrer"
                  role="button"
                >
                  Read the article
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-md-3">
          <div className="thumbnail">
            <img
              className="img-responsive project"
              src={ExploratoryTools}
              alt="Software Tools For Easy, Effective Exploratory Testing, article by Mirza Sisic"
            />
            <div className="caption">
              <h3>
                Software Tools <br /> For Easy, Effective Exploratory Testing
              </h3>
              <br />
              <p className="DarkGreyHeading">MoT - The Testing Planet</p>
              <br />

              <p>
                <a
                  href="https://www.ministryoftesting.com/articles/113fa955?s_id=14301142"
                  className="btn btn-default LightGreyBackground"
                  target="_blank"
                  rel="noopener noreferrer"
                  role="button"
                >
                  Read the article
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-md-3">
          <div className="thumbnail">
            <img
              className="img-responsive project"
              src={MisconceptionsExploratory}
              alt="Common Misconceptions About Exploratory Testing - article"
            />
            <div className="caption">
              <h3>Common Misconceptions About Exploratory Testing</h3>
              <p className="DarkGreyHeading">MoT - The Testing Planet</p>
              <span className="spacer"></span>
              <p>
                <a
                  href="https://www.ministryoftesting.com/articles/7bd1afdc?s_id=14301143"
                  className="btn btn-default LightGreyBackground"
                  target="_blank"
                  rel="noopener noreferrer"
                  role="button"
                >
                  Read the article
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-md-3">
          <div className="thumbnail">
            <img
              className="img-responsive project"
              src={TestingAMA}
              alt="Testing Ask Me Anything - Testing Tools with Mirza Sisic"
            />
            <div className="caption">
              <h3>Testing Ask Me Anything - Testing Tools with Mirza Sisic</h3>
              <p className="DarkGreyHeading">MoT - Testing AMA</p>
              <span className="spacer"></span>
              <p>
                <a
                  href="https://www.ministryoftesting.com/ask-me-anythings/607a3cd6?s_id=14301151"
                  className="btn btn-default LightGreyBackground"
                  target="_blank"
                  rel="noopener noreferrer"
                  role="button"
                >
                  Watch the recording
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="col-sm-6 col-md-3">
        <div className="thumbnail">
          <img
            className="img-responsive project"
            src={ModernTestingPrinciples}
            alt="Modern Testing Principles - blog article for TestProject, by Mirza Sisic"
          />
          <div className="caption">
            <h3>Modern Testing Principles</h3>
            <p className="DarkGreyHeading">TestProject - Blog Article</p>
            <span className="spacer"></span>
            <p>
              <a
                href="https://blog.testproject.io/2022/04/21/modern-testing-principles/"
                className="btn btn-default LightGreyBackground"
                target="_blank"
                rel="noopener noreferrer"
                role="button"
              >
                Read the article
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="col-sm-6 col-md-3">
        <div className="thumbnail">
          <img
            className="img-responsive project"
            src={ChallengesInTestingLegacySystems}
            alt="Challenges in Testing Legacy Systems - blog article for TestProject, by Mirza Sisic"
          />
          <div className="caption">
            <h3>Challenges in Testing Legacy Systems</h3>
            <p className="DarkGreyHeading">TestProject - Blog Article</p>
            <span className="spacer"></span>
            <p>
              <a
                href="https://blog.testproject.io/08/16/challenges-in-testing-legacy-systems/"
                className="btn btn-default LightGreyBackground"
                target="_blank"
                rel="noopener noreferrer"
                role="button"
              >
                Read the article
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="col-sm-6 col-md-3">
        <div className="thumbnail">
          <img
            className="img-responsive project"
            src={OrganizingYourVeryOwnTestingMeetup}
            alt="Organizing Your Very Own Testing Meetup - article"
          />
          <div className="caption">
            <h3>Organizing Your Very Own Testing Meetup</h3>
            <p className="DarkGreyHeading">MoT - The Testing Planet</p>
            <span className="spacer"></span>
            <p>
              <a
                href="https://www.ministryoftesting.com/articles/042e4019?s_id=14301152"
                className="btn btn-default LightGreyBackground"
                target="_blank"
                rel="noopener noreferrer"
                role="button"
              >
                Read the article
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="col-sm-6 col-md-3">
        <div className="thumbnail">
          <img
            className="img-responsive project"
            src={ModernTestingBestPractices}
            alt="Modern Testing Best Practices with Venkat Ramakrishnan - meetup"
          />
          <div className="caption">
            <h3>Modern Testing Best Practices</h3>
            <p className="DarkGreyHeading">MoT Sarajevo - Meetup</p>
            <span className="spacer"></span>
            <p>
              <a
                href="https://www.crowdcast.io/e/mot-sarajevo-3"
                className="btn btn-default LightGreyBackground"
                target="_blank"
                rel="noopener noreferrer"
                role="button"
              >
                Watch the Recording
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="col-sm-6 col-md-3">
        <div className="thumbnail">
          <img
            className="img-responsive project"
            src={TheRoleOfQaInSoftwareDevelopment}
            alt="The role of QA in software development with Velibor Mandžo - meetup"
          />
          <div className="caption">
            <h3>QA role in Software Development</h3>
            <p className="DarkGreyHeading">MoT Sarajevo - Meetup</p>
            <span className="spacer"></span>
            <p>
              <a
                href="https://www.ministryoftesting.com/talks/e384569f?s_id=14301183"
                className="btn btn-default LightGreyBackground"
                target="_blank"
                rel="noopener noreferrer"
                role="button"
              >
                Watch the Recording
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="col-sm-6 col-md-3">
        <div className="thumbnail">
          <img
            className="img-responsive project"
            src={MotSarajevo1}
            alt="MoT Sarajevo's First Meetup with Maaret Pyhäjärvi, Conor Fitzgerald and Larry Goddard - meetup"
          />
          <div className="caption">
            <h3>MoT Sarajevo's First Meetup</h3>
            <p className="DarkGreyHeading">MoT Sarajevo - Meetup</p>
            <span className="spacer"></span>
            <p>
              <a
                href="https://www.ministryoftesting.com/talks/93d74186?s_id=14301185"
                className="btn btn-default LightGreyBackground"
                target="_blank"
                rel="noopener noreferrer"
                role="button"
              >
                Watch the Recording
              </a>
            </p>
          </div>
        </div>
      </div>

    <div className="col-sm-6 col-md-3">
      <div className="thumbnail">
        <img className="img-responsive project" src={iSQI} alt="MoT Sarajevo's First Meetup with Maaret Pyhäjärvi, Conor Fitzgerald and Larry Goddard - meetup" />
        <div className="caption">
          <h3>ISTQB Certification: where to start?</h3>
          <p className="DarkGreyHeading">MoT Sarajevo - Meetup</p>
          <span className="spacer"></span>
          <p><a href="https://dms.licdn.com/playlist/C4E05AQEiM-1NDE-aoA/mp4-720p-30fp-crf28/0/1642435046149?e=1652281200&v=beta&t=5VFQTbOqxIFVg-gl4MpXMpQuQCCiNx4LSOgztTpvSmE" className="btn btn-default LightGreyBackground" target="_blank" rel="noopener noreferrer" disabled type="button" role="button">Recording Unavailable</a></p>
        </div>
      </div>
    </div>

      <div className="col-sm-6 col-md-3">
        <div className="thumbnail">
          <img
            className="img-responsive project"
            src={GeekleModerationCert}
            alt="MoT Sarajevo's First Meetup with Maaret Pyhäjärvi, Conor Fitzgerald and Larry Goddard - meetup"
          />
          <div className="caption">
            <h3>QA Global Summit 2022</h3>
            <p className="DarkGreyHeading">Geekle - Conference</p>
            <span className="spacer"></span>
            <p>
              <a
                href="https://youtu.be/RVDXWiqFX0M?t=594"
                className="btn btn-default LightGreyBackground"
                target="_blank"
                rel="noopener noreferrer"
                role="button"
              >
                Watch the Recording
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="col-sm-6 col-md-3">
        <div className="thumbnail">
          <img
            className="img-responsive project"
            src={TestBashCareers}
            alt="How to Market Yourself Better as a Software Tester - online conference presentation with Q and A"
          />
          <div className="caption">
            <h3>TestBash Careers</h3>
            <p className="DarkGreyHeading">MoT - Conference</p>
            <span className="spacer"></span>
            <p>
              <a
                href="https://www.ministryoftesting.com/events/testbash-careers-2022"
                className="btn btn-default LightGreyBackground"
                target="_blank"
                rel="noopener noreferrer"
                role="button"
              >
                Watch the Recording
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="col-sm-6 col-md-3">
        <div className="thumbnail">
          <img
            className="img-responsive project"
            src={TestBashWorldSarajevoWatchParty}
            alt="Ministry of Testing Sarajevo Watch Party for TestBash World conference"
          />
          <div className="caption">
            <h3>Watch Party</h3>
            <p className="DarkGreyHeading">MoT Sarajevo - Meetup</p>
            <span className="spacer"></span>
            <p>
              <a
                href="https://www.ministryoftesting.com/dojo/series/testbash-world-2022"
                className="btn btn-default LightGreyBackground"
                target="_blank"
                rel="noopener noreferrer"
                role="button"
              >
                Watch the Recording
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="col-sm-6 col-md-3">
        <div className="thumbnail">
          <img
            className="img-responsive project"
            src={AutomationForJuniorTesters}
            alt="Understanding what is required to start with test automation for junior testers"
          />
          <div className="caption">
            <h3>Test Automation</h3>
            <p className="DarkGreyHeading">LambdaTest - Blog</p>
            <span className="spacer"></span>
            <p>
              <a
                href="https://www.lambdatest.com/blog/automation-for-junior-testers/"
                className="btn btn-default LightGreyBackground"
                target="_blank"
                rel="noopener noreferrer"
                role="button"
              >
                Read the article
              </a>
            </p>
          </div>
        </div>
      </div>

    <div className="col-sm-6 col-md-3">
      <div className="thumbnail">
        <img className="img-responsive project" src={MakeE2eTestingEasierWithTheRightTools} alt="Make e2e Testing Easier With the Right Tools" />
        <div className="caption">
          <h3>E2E Testing</h3>
          <p className="DarkGreyHeading">LambdaTest - Blog</p>
          <span className="spacer"></span>
          <p><a href="https://www.lambdatest.com/blog/make-e2e-testing-easier/" className="btn btn-default LightGreyBackground" target="_blank" rel="noopener noreferrer" role="button">Read the article</a></p>
        </div>
      </div>
    </div>

    <div className="col-sm-6 col-md-3">
      <div className="thumbnail">
        <img className="img-responsive project" src={TwitterSpaceLetsExploreBDD} alt="Make e2e Testing Easier With the Right Tools" />
        <div className="caption">
          <h3>Explore BDD</h3>
          <p className="DarkGreyHeading">MoT - Twitter Spaces</p>
          <span className="spacer"></span>
          <p><a href="https://www.ministryoftesting.com/events/twitter-space-let-s-explore-bdd-with-co-hosts-mirza-sisic-and-simon-tomes" className="btn btn-default LightGreyBackground" target="_blank" rel="noopener noreferrer" role="button">Open Link</a></p>
        </div>
      </div>
    </div>

    <div className="col-sm-6 col-md-3">
      <div className="thumbnail">
        <img className="img-responsive project" src={Testival2022} alt="Make e2e Testing Easier With the Right Tools" />
        <div className="caption">
          <h3>Keynote Speech</h3>
          <p className="DarkGreyHeading">Testival - Conference</p>
          <span className="spacer"></span>
          <p><a href="https://testival.eu/testival-osijek-2022-sponsors-and-speakers/" className="btn btn-default LightGreyBackground" target="_blank" rel="noopener noreferrer" role="button">Open Link</a></p>
        </div>
      </div>
    </div>

    <div className="col-sm-6 col-md-3">
      <div className="thumbnail">
        <img className="img-responsive project" src={ExploreAgileSpikesShiftLeftBdd} alt="Let us Explore how Agile Architecture Spikes are used in Shift-Left Behavior Driven Development" />
        <div className="caption">
          <h3>Agile Spikes in BDD</h3>
          <p className="DarkGreyHeading">LambdaTest - Blog</p>
          <span className="spacer"></span>
          <p><a href="https://www.lambdatest.com/blog/agile-architecture-spikes-in-shift-left-bdd" className="btn btn-default LightGreyBackground" target="_blank" rel="noopener noreferrer" role="button">Read the article</a></p>
        </div>
      </div>
    </div>

    <div className="col-sm-6 col-md-3">
      <div className="thumbnail">
        <img className="img-responsive project" src={MirzaAgileBosniaDays} alt="Make e2e Testing Easier With the Right Tools" />
        <div className="caption">
          <h3>Agile Testing</h3>
          <p className="DarkGreyHeading">Agile Day - Conference</p>
          <span className="spacer"></span>
          <p><a href="https://conference.agile.ba/en/lectures/145/modern-testing-principles-natural-evolution-of-agile-testing" className="btn btn-default LightGreyBackground" target="_blank" rel="noopener noreferrer" role="button">Open Link</a></p>
        </div>
      </div>
    </div>

    <div className="col-sm-6 col-md-3">
      <div className="thumbnail">
        <img className="img-responsive project" src={bddMeme} alt="Modern Testing trough BDD" />
        <div className="caption">
          <h3>MTP and BDD</h3>
          <p className="DarkGreyHeading">STB - Blog</p>
          <span className="spacer"></span>
          <p><a href="https://softwaretestingboard.com/blogs/modern-testing-trough-bdd/" className="btn btn-default LightGreyBackground" target="_blank" rel="noopener noreferrer" role="button">Read the article</a></p>
        </div>
      </div>
    </div>


 
    <div className="col-sm-6 col-md-3">
      <div className="thumbnail">
        <img className="img-responsive project" src={TactaJavaBlog} alt="Tacta Academy: How I started coding & finding myself as Quality Assurance Engineer" />
        <div className="caption">
          <h3>Java and QA</h3>
          <p className="DarkGreyHeading">Tacta - Blog</p>
          <span className="spacer"></span>
          <p><a href="https://tacta.io/en/news/tacta-academy-how-i-started-coding-finding-myself-as-quality-assurance-engineer/17" className="btn btn-default LightGreyBackground" target="_blank" rel="noopener noreferrer" role="button">Read the article</a></p>
        </div>
      </div>
    </div>

    <div className="col-sm-6 col-md-3">
      <div className="thumbnail">
        <img className="img-responsive project" src={ProductOwnerQA} alt="How Product Owners With Testing Experience Can Promote Quality " />
        <div className="caption">
          <h3>PO Tester</h3>
          <p className="DarkGreyHeading">MoT - The Testing Planet</p>
          <span className="spacer"></span>
          <p><a href="https://www.ministryoftesting.com/articles/2be3bc75?s_id=14301135" className="btn btn-default LightGreyBackground" target="_blank" rel="noopener noreferrer" role="button">Read the article</a></p>
        </div>
      </div>
    </div>

    <div className="col-sm-6 col-md-3">
      <div className="thumbnail">
        <img className="img-responsive project" src={TestshpereRoulettePodcast} alt="TestSphere Roulette Episode 14 - Lena Pejgan Wiberg and Mirza Sisic. 
            Ministry Of Testing Software Testing / QA Podcast" />
        <div className="caption">
          <h3>TestSphere Roulette</h3>
          <p className="DarkGreyHeading">MoT - Podcast</p>
          <span className="spacer"></span>
          <p><a href="https://soundcloud.com/ministryoftesting/1-testsphere-roulette-episode-14-lena-pejgan-wiberg-and-mirza-sisic" className="btn btn-default LightGreyBackground" target="_blank" rel="noopener noreferrer" role="button">Podcast Recording</a></p>
        </div>
      </div>
    </div>
    
   

    <div className="col-sm-6 col-md-3">
      <div className="thumbnail">
        <img className="img-responsive project" src={TestBashSpringIanMirzaPokekon} alt="Let's test the Pokemon API with REST and GraphQL" />
        <div className="caption">
          <h3>TestBash Spring</h3>
          <p className="DarkGreyHeading">MoT - Conference</p>
          <span className="spacer"></span>
          <p><a href="" className="btn btn-default LightGreyBackground" target="_blank" rel="noopener noreferrer" role="button">Watch the Recording</a></p>
        </div>
      </div>
    </div> 

    <div className="col-sm-6 col-md-3">
      <div className="thumbnail">
        <img className="img-responsive project" src={ProductOwnerQA} alt="How Product Owners With Testing Experience Can Promote Quality " />
        <div className="caption">
          <h3>Mobile Testing</h3>
          <p className="DarkGreyHeading">SQ Mag - Article</p>
          <span className="spacer"></span>
          <p><a href="https://www.ministryoftesting.com/dojo/lessons/how-product-owners-with-testing-experience-can-promote-quality" className="btn btn-default LightGreyBackground" target="_blank" rel="noopener noreferrer" role="button">Read the article</a></p>
        </div>
      </div>
    </div>

    <div className="col-sm-6 col-md-3">
        <div className="thumbnail">
          <img
            className="img-responsive project"
            src={SarajevoQaCrewMeetup}
            alt="How to pass the ISTQB Foundation Level Certification Exam"
          />
          <div className="caption">
            <h3>Pass ISTQB CTFL</h3>
            <p className="DarkGreyHeading">QA Crew - Meetup</p>
            <span className="spacer"></span>
            <p>
              <a
                href="https://www.eventbrite.com/e/qa-meetup-lets-test-together-5-tickets-410034152187?fbclid=IwAR2xMiMgozNACGOIkpPFJwzVrSdHGKoKcFUGpBIrmI4wM6lE0CfqdUk90zo"
                className="btn btn-default LightGreyBackground"
                target="_blank"
                rel="noopener noreferrer"
                role="button"
              >
                Open Link
              </a>
            </p>
          </div>
        </div>
      </div>
    
    </div>
  </div>
);

export default Projects;
