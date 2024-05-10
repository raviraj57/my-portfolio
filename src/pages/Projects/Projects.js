import React from "react";
import "./Projects.css";
import RubberBand from "react-reveal/RubberBand";
const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
          Through the utilization of the MERN stack, this project embodies the
          fusion of cutting-edge technologies to deliver a dynamic and
          responsive web application. With a robust backend powered by Node.js
          and Express.js, seamlessly integrated with a MongoDB database, and a
          sleek, interactive frontend built with React.js, this project
          exemplifies the versatility and scalability of the MERN stack.
        </p>
        {/* card design */}
        <div className="row" id="ads">
        <RubberBand>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full stack</span>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREHYVH6Kw3YUA8i1qLCKLYOJ_GNBCe033qyP4Lbizc1w&s"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">react</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">Chat Snippet Website</h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/raviraj57/MERN-Webchat-app"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Frontend</span>
                  <img
                    src="https://muffingroup.com/blog/wp-content/uploads/2022/09/UFC-GYM.png"
                    alt="project2"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">React js</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Gym website</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/raviraj57/gym_website"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Backend</span>
                  <img
                    src="https://code-projects.org/wp-content/uploads/2018/03/Screenshot-3249000.png"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>

                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">CRUD Form </h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/raviraj57/react-redux-crud"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            </RubberBand>
        </div>
      </div>
    </>
  );
};

export default Projects;
