import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
import aboutPic from "../../assets/image/img13.jpg";

const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img src={aboutPic} alt="profile_pic" />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
                Hey👋! I'm a Full-Stack Developer. Aspiring fresher looking for
                Entery/associate level position as a Full-Stack developer ,
                having knowledge of MERN, Redux,Next.js .Quick learner and
                adaptive to given role and responsibilities. I focus on building
                attractive and beautiful websites that excite users. I
                continuously expand my skills and explore new tools and
                technologies to stay at the forefront of website development. I
                enjoy working with other web developer and designer to make
                websites that match the clients brands and business objectives.
                i attended professional web development courses to improve my
                skills . My goal is to create websites that are both visually
                and appealing and easy to use. if you are looking for web
                developer , please feel free to get in touch with me ...........
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
