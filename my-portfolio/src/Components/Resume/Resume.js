import React from "react";

const Resume = () => (
  <div className="container">
    <div id="Resume" className="container text-justify">
      <div className="row">
        <h3 className="text-center heading">
          <strong>Resume</strong>
        </h3>
        <h5 className="text-center  minor-heading">Employment History</h5>

        <ul className="timeline">
          <li>
            <div className="timeline-badge">
              <i className="fa fa-desktop resume-icons"></i>
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4 className="timeline-title">
                  QE Consultant -{" "}
                  <a href="/" target="_blank" rel="noopener noreferrer">
                    TestOps
                  </a>
                </h4>
              </div>
              <p>
                <small className="text-muted">
                  <i className="fa fa-calendar-o"></i>June 2022 - Current
                </small>
              </p>
              <div className="timeline-body">
                <p>
                  Consulting agency providing testing-as-a-service (TaaS) and
                  DevOps services.
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className="timeline-badge">
              <i className="fa fa-book resume-icons"></i>
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4 className="timeline-title">
                  Course Instructor -{" "}
                  <a
                    href="https://systemduo.ba/ba/home/course/68"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    SystemDuo
                  </a>
                </h4>
              </div>
              <p>
                <small className="text-muted">
                  <i className="fa fa-calendar-o"></i>December 2023 - April 2024
                </small>
              </p>
              <div className="timeline-body">
                <p>
                  Teaching software testing to begginers.
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className="timeline-badge">
              <i className="fa fa-mobile resume-icons"></i>
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4 className="timeline-title">
                  Freelance QE -{" "}
                  <a
                    href="https://snappmobile.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    SnappMobile
                  </a>
                </h4>
              </div>
              <p>
                <small className="text-muted">
                  <i className="fa fa-calendar-o"></i>June 2022 - July 2022
                </small>
              </p>
              <div className="timeline-body">
                <p>
                  Helping out with mobile testing, on a part-time freelance
                  basis.
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className="timeline-badge">
              <i className="fa fa-laptop resume-icons"></i>
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4 className="timeline-title">
                  Lead QA -{" "}
                  <a
                    href="https://comberry.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Comberry Studios
                  </a>
                </h4>
              </div>
              <p>
                <small className="text-muted">
                  <i className="fa fa-calendar-o"></i>July 2021 - September 2022
                </small>
              </p>
              <div className="timeline-body">
                <p>
                  Improving the testing process, creating new user stories, and
                  improvement suggestions. Validating new user functionalities,
                  reporting defects, and conducting exploratory testing. Doing
                  back-end GrapQL testing.
                </p>
              </div>
            </div>
          </li>
          
          <li>
            <div className="timeline-badge">
              <i className="fa fa-bug resume-icons"></i>
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4 className="timeline-title">
                  Software QA Engineer -{" "}
                  <a
                    href="https://tacta.io"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Tacta
                  </a>
                </h4>
              </div>
              <p>
                <small className="text-muted">
                  <i className="fa fa-calendar-o"></i>February 2021 - December
                  2022
                </small>
              </p>
              <div className="timeline-body">
                <p>
                  Domain Driven Design and Test-Driven Development environment.
                  Improving the Testing processes on a new project. Writing
                  testing documentation, and performing UI and API testing.
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className="timeline-badge">
              <i className="fa fa-book resume-icons"></i>
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4 className="timeline-title">
                  Freelance Writer -{" "}
                  <a
                    href="https://www.ministryoftesting.com/search?q=Mirza+Sisic"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ministry of Testing
                  </a>
                </h4>
              </div>
              <p>
                <small className="text-muted">
                  <i className="fa fa-calendar-o"></i>July 2021 - Current
                </small>
              </p>
              <div className="timeline-body">
                <p>Creating software testing-related content: articles, video tutorials and conference presentations.</p>
              </div>
            </div>
          </li>

          <li>
            <div className="timeline-badge">
              <i className="fa fa-search-plus resume-icons"></i>
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4 className="timeline-title">
                  QA Analyst -{" "}
                  <a
                    href="https://authoritypartners.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Authority Partners
                  </a>
                </h4>
              </div>
              <p>
                <small className="text-muted">
                  <i className="fa fa-calendar-o"></i>January 2019 - February
                  2021
                </small>
              </p>
              <div className="timeline-body">
                <p>
                  Functional end-to-end testing of web and mobile apps. Analysis
                  and validation of new user stories. Design, execution, and
                  maintenance of test cases. Member of a production support
                  team, triaging new tickets, checking logs, using SQL,
                  reporting bugs, mentoring new team members.
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className="timeline-badge">
              <i className="fa fa-code resume-icons"></i>
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4 className="timeline-title">
                  Freelancer QA -{" "}
                  <a
                    href="https://www.upwork.com/o/profiles/users/_~01a70d936afbbff30e"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Upwork
                  </a>
                </h4>
                <p>
                  <small className="text-muted">
                    <i className="fa fa-calendar-o"></i> September 2017 -
                    Current{" "}
                  </small>
                </p>
              </div>
              <div className="timeline-body">
                <p>
                  Occasional QA consulting for short projects, if they're
                  interesting. You can check my Upwrok profile{" "}
                  <a
                    href="https://www.upwork.com/freelancers/~01a70d936afbbff30e"
                    target="_blank"
                    rel="noopener noreferrer"
                    role="button"
                  >
                    here
                  </a>
                  .
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="timeline-badge">
              <i className="fa fa-search resume-icons"></i>
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4 className="timeline-title">
                  Junior QA Analyst -{" "}
                  <a
                    href="http://www.learninglibrary.com/education"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learning Library
                  </a>
                </h4>
              </div>
              <p>
                <small className="text-muted">
                  <i className="fa fa-calendar-o"></i> April 2017 - January 2019
                </small>
              </p>
              <div className="timeline-body">
                <p>
                  Testing company's online courses and web portals, reporting
                  found issues. Using Browserstack for cross-browser testing,
                  Wrike, and Jira for defect management.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="timeline-badge">
              <i className="fa fa-headphones resume-icons"></i>
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4 className="timeline-title">
                  Technical Support Agent -{" "}
                  <a
                    href="http://www.learninglibrary.com/education"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learning Library
                  </a>
                </h4>
              </div>
              <p>
                <small className="text-muted">
                  <i className="fa fa-calendar-o"></i> October 2014 - April 2017{" "}
                </small>
              </p>
              <div className="timeline-body">
                <p>
                  Providing tech support for the customers, over chat, email,
                  phone, and remote desktop. Composing monthly ticket reports,
                  handling urgent client issues, and training new members of the
                  support team.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Resume;
