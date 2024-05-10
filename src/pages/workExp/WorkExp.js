import React from "react";
import { SiReact } from "react-icons/si";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./WorkExp.css";
const WorkExp = () => {
  return (
    <>
      <div className="work" id="work">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Work Experience
          </h2>
          <hr />
          <VerticalTimeline lineColor="#1e1e2c">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="Mar 2024 - present"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Full Stack Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Globalia Soft llp
              </h4>
              <p>
                My internship experience has equipped me with a solid foundation
                in full-stack development, with a focus on the
                <b> MERN stack, Redux, and Next.js. </b>Through hands-on
                projects and collaborative teamwork, I have honed my skills in
                building scalable and efficient web applications, leveraging
                modern technologies to deliver impactful solutions. I am eager
                to leverage my expertise and continue my journey in software
                development, contributing to innovative projects and driving
                success in the ever-evolving tech industry.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="Feb 2023 - April 2024"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Web Developer intern
              </h3>
              <h4 className="vertical-timeline-element-subtitle">IIIT Delhi</h4>
              <p>
                I worked on the selecting of stakeholder. Requirement analysis,
                functional requirement and non functional requirement. I did
                this internship during 6th semester i learn a lots of things
                like ui/ux staruml requirement analysis , how to initiate the
                web development part without jumping into the coding part
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;
