import "./About.css";
import { SiSimilarweb } from "react-icons/si";
import { CgDesignmodo } from "react-icons/cg";
import { FaAppStore } from "react-icons/fa";

const About = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What i do</span>
      <br></br>
      <span className="skillDiscription">
        I am a skilled and passionate web designer with a strong foundation in
        front-end development, including HTML, CSS, and JavaScript. I am
        actively learning and growing in full-stack development, with experience
        in technologies such as React, Node.js, and MongoDB. My goal is to
        continue expanding my expertise in both front-end and back-end
        technologies, delivering comprehensive and robust web solutions. I also
        have proficiency in Python and design tools like Adobe Illustrator,
        allowing me to combine both development and design to create
        user-centric applications
      </span>

      <div className="skillsBars">
        <div className="skillBar">
          <CgDesignmodo className="web" />
          <div className="skillBarText">
            <h2>UI/UX Design</h2>
            <p>
              I am passionate about designing user-friendly interfaces that
              prioritize both aesthetics and functionality. My focus is on
              creating seamless, intuitive experiences that meet the needs of
              users while ensuring ease of use and engagement.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <SiSimilarweb className="web" />
          <div className="skillBarText">
            <h2>Website Design</h2>
            <p>
              I am passionate about developing highly productive websites that
              are both functional and visually appealing. My focus is on
              creating responsive, efficient, and user-friendly websites that
              deliver exceptional experiences across all devices.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <FaAppStore className="web" />
          <div className="skillBarText">
            <h2>App Development</h2>
            <p>
              I am currently expanding my skills in app development, working on
              building both mobile and web applications. My goal is to gain
              proficiency in creating seamless, functional apps while exploring
              various technologies and frameworks to deliver high-quality user
              experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
