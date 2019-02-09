import React from 'react';

const Resume = () => (
<div id="Resume" className="container text-justify">
<div className="row">
<h3 className="text-center heading"><strong>Resume</strong></h3>
<h5 className="text-center  minor-heading">Employment History</h5>
    <ul className="timeline">
       <li>
          <div className="timeline-badge"><i className="fa fa-search resume-icons"></i></div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4 className="timeline-title">QA Analyst - <a href="https://authoritypartners.com/" target="_blank" rel="noopener noreferrer">Authority Partners</a></h4>
            </div>
            <p><small className="text-muted"><i className="fa fa-calendar-o"></i>January 20197 - Current</small></p>
            <div className="timeline-body">
              <p>Working in a Agile/Scrum team is rewarding experience due to it's dynamic nature - testing web and native apps as well. I'm learning a bunch of new stuff and improving my existing knowledge on SQL, APIs and QA processes in general. Doing E2E, Integration, Regression, UI, Smoke, Exploratory and other kinds of testing. Also, I'll be learning more about test automation, which makes this a a very exciting journey for me!</p>
            </div>
          </div>
        </li>
        <li>
          <div className="timeline-badge"><i className="fa fa-code resume-icons"></i></div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4 className="timeline-title">Web Developer - <a href="https://www.upwork.com/o/profiles/users/_~01a70d936afbbff30e/" target="_blank" rel="noopener noreferrer">Freelance</a></h4>
              <p><small className="text-muted"><i className="fa fa-calendar-o"></i> September 2017 - January 2019</small></p>
            </div>
            <div className="timeline-body">
              <p>I made a few websites for local clients and done some freelancing on Upwork as well. Mostly part time front-end gigs, HTML, CSS, BootStrap, WordPress, jQuery, React and little bit of PHP - every junior has to start from somewhere.</p>
            </div>
          </div>
        </li>
        <li>
          <div className="timeline-badge"><i className="fa fa-search resume-icons"></i></div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4 className="timeline-title">QA Tester - <a href="http://www.learninglibrary.com/education" target="_blank" rel="noopener noreferrer">Learning Library</a></h4>
            </div>
            <p><small className="text-muted"><i className="fa fa-calendar-o"></i> April 2017 - January 2019</small></p>
            <div className="timeline-body">
              <p>Testing company's online courses and over 50 web portals, reporting found issues. During this time I become very comfortable with using Chrome Developer tools, Browserstack and Wrike project management software. </p>
            </div>
          </div>
        </li>
        <li>
          <div className="timeline-badge"><i className="fa fa-headphones resume-icons"></i></div>
          <div className="timeline-panel">
            <div className="timeline-heading">
            <h4 className="timeline-title">Support Specialist - <a href="http://www.learninglibrary.com/education" target="_blank" rel="noopener noreferrer">Learning Library</a></h4>
            </div>
            <p><small className="text-muted"><i className="fa fa-calendar-o"></i> October 2014 - April 2017 </small></p>
            <div className="timeline-body">
              <p>Providing tech support for the customers, over chat, email, phone and RDP. Later on I was also tasked with making monthly ticket reports and training new team members.</p>
            </div>
          </div>
        </li>
        <li>
        <div className="timeline-badge"><i className="fa fa-wrench resume-icons"></i></div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4 className="timeline-title">Pc Repairs - Self Employed </h4>
            </div>
            <p><small className="text-muted"><i className="fa fa-calendar-o"></i> February 2012 - September 2014</small></p>
            <div className="timeline-body">
              <p>Installing operation systems (Windows mostly) and troubleshooting hardware and software issues. I'm one of those coders who actually know a thing or two about hardware.</p>
            </div>
          </div>
        </li>
    </ul>
</div>
</div>
);

export default Resume;