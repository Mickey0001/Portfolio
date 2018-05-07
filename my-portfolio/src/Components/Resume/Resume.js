import React from 'react';

const Resume = () => (
<div id="Resume" className="container text-justify">
<div className="row">
<h3 className="text-center heading"><strong>Resume</strong></h3>
    <ul className="timeline">
        <li>
          <div className="timeline-badge"><i className="fa fa-code"></i></div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4 className="timeline-title">Freelance Web Developer</h4>
              <p><small className="text-muted"><i className="glyphicon glyphicon-time"></i> September 2017 - Current</small></p>
            </div>
            <div className="timeline-body">
              <p>I made a few websites for local clients and done some freelancing on <a href="https://www.upwork.com/o/profiles/users/_~01a70d936afbbff30e/" target="_blank" rel="noopener noreferrer">Upwork</a> as well. Mostly part time front-end gigs, HTML, CSS, BootStrap, WordPress, jQuery and React and little bit of PHP - every junior has to start from somewhere.</p>
            </div>
          </div>
        </li>
        <li>
          <div className="timeline-badge"><i className="fa fa-search"></i></div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4 className="timeline-title">QA Tester - <a href="http://www.learninglibrary.com/education" target="_blank" rel="noopener noreferrer">Learning Library</a></h4>
            </div>
            <p><small className="text-muted"><i className="glyphicon glyphicon-time"></i> April 2017 - Current </small></p>
            <div className="timeline-body">
              <p>Testing company's online courses and over 50 web portals and reporting found issues.</p>
            </div>
          </div>
        </li>
        <li>
          <div className="timeline-badge"><i className="fa fa-headphones"></i></div>
          <div className="timeline-panel">
            <div className="timeline-heading">
            <h4 className="timeline-title">Technical Support Specialist - <a href="http://www.learninglibrary.com/education" target="_blank" rel="noopener noreferrer">Learning Library</a></h4>
            </div>
            <p><small className="text-muted"><i className="glyphicon glyphicon-time"></i> October 2014 - April 2017 </small></p>
            <div className="timeline-body">
              <p>Providing tech support for the customers, over chat, email, phone and RDP.</p>
            </div>
          </div>
        </li>
        <li>
        <div className="timeline-badge"><i className="fa fa-wrench"></i></div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4 className="timeline-title">Pc Repairs - Self Employed </h4>
            </div>
            <p><small className="text-muted"><i className="glyphicon glyphicon-time"></i> February 2012 - September 2014 </small></p>
            <div className="timeline-body">
              <p>Installing operation systems and troubleshooting hardware and software issues.</p>
            </div>
          </div>
        </li>
    </ul>
</div>
</div>
);

export default Resume;