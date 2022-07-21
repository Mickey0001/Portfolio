import React from 'react';

const Resume = () => (
<div id="Resume" className="container text-justify">
<div className="row">
<h3 className="text-center heading"><strong>Resume</strong></h3>
<h5 className="text-center  minor-heading">Employment History</h5>
    <ul className="timeline">

    <li>
          <div className="timeline-badge"><i className="fa fa-wrench resume-icons"></i></div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4 className="timeline-title">Senior Test Analyst - <a href="https://www.consulteer.com/" target="_blank" rel="noopener noreferrer">Consulteer</a></h4>
            </div>
            <p><small className="text-muted"><i className="fa fa-calendar-o"></i>June  2022 - Current</small></p>
            <div className="timeline-body">
              <p>A team comprised of senior testers, using BDD and a shift-left approach to testing.</p>
            </div>
          </div>
        </li>

    <li>
          <div className="timeline-badge"><i className="fa fa-desktop resume-icons"></i></div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4 className="timeline-title">Founder - <a href="/" target="_blank" rel="noopener noreferrer">TestOps</a></h4>
            </div>
            <p><small className="text-muted"><i className="fa fa-calendar-o"></i>June  2022 - Current</small></p>
            <div className="timeline-body">
              <p>Consulting agency providing testing-as-a-service (TaaS) and DevOps consulting services to our clients.</p>
            </div>
          </div>
        </li>

    <li>
          <div className="timeline-badge"><i className="fa fa-laptop resume-icons"></i></div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4 className="timeline-title">QA Lead - <a href="https://comberry.com" target="_blank" rel="noopener noreferrer">Comberry Studios</a></h4>
            </div>
            <p><small className="text-muted"><i className="fa fa-calendar-o"></i>January  2022 - Current</small></p>
            <div className="timeline-body">
              <p>Working closely with the PO and SM to improve the testing process, creating new user stories and improvement suggestions. Validating new user functionalities, reporting defects, and conducting exploratory testing. Doing back-end GrapQL testing.</p>
            </div>
          </div>
        </li>

    <li>
          <div className="timeline-badge"><i className="fa fa-bug resume-icons"></i></div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4 className="timeline-title">Software QA Engineer - <a href="https://tacta.io" target="_blank" rel="noopener noreferrer">Tacta</a></h4>
            </div>
            <p><small className="text-muted"><i className="fa fa-calendar-o"></i>February  2021 - December 2021</small></p>
            <div className="timeline-body">
              <p>Working in a Domain Driver Design and Test-Driven Development environment. Improving the Testing processes on a new project. Writing testing documentation, and performing UI and API testing.</p>
            </div>
          </div>
        </li>

       <li>
          <div className="timeline-badge"><i className="fa fa-search-plus resume-icons"></i></div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4 className="timeline-title">QA Analyst - <a href="https://authoritypartners.com" target="_blank" rel="noopener noreferrer">Authority Partners</a></h4>
            </div>
            <p><small className="text-muted"><i className="fa fa-calendar-o"></i>January 2019 - February 2021</small></p>
            <div className="timeline-body">
              <p>Functional end-to-end testing of web and mobile apps. Analysis and validation of new user stories. Design, execution, and maintenance of test cases. Member of a production support team, triaging new tickets, checking logs, using SQL, reporting bugs, mentoring new team members.</p>
            </div>
          </div>
        </li>
        <li>
          <div className="timeline-badge"><i className="fa fa-code resume-icons"></i></div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4 className="timeline-title">Web Developer - <a href="https://www.upwork.com/o/profiles/users/_~01a70d936afbbff30e" target="_blank" rel="noopener noreferrer">Freelance</a></h4>
              <p><small className="text-muted"><i className="fa fa-calendar-o"></i> September 2017 - January 2019</small></p>
            </div>
            <div className="timeline-body">
              <p>Freelance front-end gigs, related mostly to WordPress. You can check my Upwrok profile <a href="https://www.upwork.com/freelancers/~01a70d936afbbff30e" target="_blank" rel="noopener noreferrer" role="button">here</a>.</p>
            </div>
          </div>
        </li>
        <li>
          <div className="timeline-badge"><i className="fa fa-search resume-icons"></i></div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4 className="timeline-title">Junior QA Tester - <a href="http://www.learninglibrary.com/education" target="_blank" rel="noopener noreferrer">Learning Library</a></h4>
            </div>
            <p><small className="text-muted"><i className="fa fa-calendar-o"></i> April 2017 - January 2019</small></p>
            <div className="timeline-body">
              <p>Testing company's online courses and over 50 web portals, reporting found issues.  Using Browserstack for cross-browser testing, Wrike, and Jira for defect management.</p>
            </div>
          </div>
        </li>
        <li>
          <div className="timeline-badge"><i className="fa fa-headphones resume-icons"></i></div>
          <div className="timeline-panel">
            <div className="timeline-heading">
            <h4 className="timeline-title">Technical Support Agent - <a href="http://www.learninglibrary.com/education" target="_blank" rel="noopener noreferrer">Learning Library</a></h4>
            </div>
            <p><small className="text-muted"><i className="fa fa-calendar-o"></i> October 2014 - April 2017 </small></p>
            <div className="timeline-body">
              <p>Providing tech support for the customers, over chat, email, phone, and remote desktop. Composing monthly ticket reports, handling urgent client issues, and training new members of the support team.</p>
            </div>
          </div>
        </li>
    </ul>
</div>
</div>
);

export default Resume;