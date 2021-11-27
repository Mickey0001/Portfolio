import React from 'react';

const Resume = () => (
<div id="Resume" className="container text-justify">
<div className="row">
<h3 className="text-center heading"><strong>Resume</strong></h3>
<h5 className="text-center  minor-heading">Employment History</h5>
    <ul className="timeline">

    <li>
          <div className="timeline-badge"><i className="fa fa-bug resume-icons"></i></div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4 className="timeline-title">Software QA Engineer - <a href="https://tacta.io" target="_blank" rel="noopener noreferrer">Tacta</a></h4>
            </div>
            <p><small className="text-muted"><i className="fa fa-calendar-o"></i>January 2019 - Current</small></p>
            <div className="timeline-body">
              <p>Taking part in establishing testing process on new projects from scratch. Working closely with the developers, as the company is using Domain Driver Design and Test Driven Development. Collaborating with multiple teams to standardize testing on the company level. Writing testing documentation: policies, strategies, master and project level test plans. Doing a lot of API testing, both manual and automated. Pair programming with the developers in designing and developing an API end-to-end testing framework.</p>
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
              <p>
              I worked in several teams, mainly doing functional end-to-end testing of web and mobile apps for the first few months. Later, I was in a production support team, triaging new tickets, checking logs, using SQL, reporting bugs, etc.</p>
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
              <p>I made a few websites for local clients and did some freelancing on Upwork as well. Mostly part-time front-end gigs, HTML, CSS, BootStrap, WordPress, jQuery, React, and PHP. Fore more details, you can check my Upwrok profile <a href="https://www.upwork.com/freelancers/~01a70d936afbbff30e" target="_blank" rel="noopener noreferrer" role="button">here</a>.</p>
            </div>
          </div>
        </li>
        <li>
          <div className="timeline-badge"><i className="fa fa-search resume-icons"></i></div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4 className="timeline-title">Manual QA Tester - <a href="http://www.learninglibrary.com/education" target="_blank" rel="noopener noreferrer">Learning Library</a></h4>
            </div>
            <p><small className="text-muted"><i className="fa fa-calendar-o"></i> April 2017 - January 2019</small></p>
            <div className="timeline-body">
              <p>Testing company's online courses and over 50 web portals, reporting found issues. During this time I become very comfortable with using Chrome Developer tools, Browserstack, Wrike and Jira project management products.</p>
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
              <p>Providing tech support for the customers, over chat, email, phone, and remote desktop. Later on, I was also tasked with making monthly ticket reports, training new team members and handling high-priority issues reported by the client.</p>
            </div>
          </div>
        </li>
    </ul>
</div>
</div>
);

export default Resume;