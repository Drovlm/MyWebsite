import React from "react";
import "./About.css";
import prof from "../../images/2.jpg";

const About = () => {
  return (
    <div className="bodys">
      <div className="aboutme">
        <div className="image">
          <img className="img" src={prof} alt="Logo" />
        </div>

        <div className="intro">
          <p>
         Hi, i'm  <span class="highlight">Mudar</span>
         , a Syrian web developer based in Moscow. </p>
           <p>
         My passion is web development, and I’m proficient in React, HTML, CSS, SQL, and PHP.
         I love creating dynamic and responsive web applications where the frontend (React, HTML, CSS) and backend (SQL, PHP) work together seamlessly as one cohesive system.
          </p>
          <p>
            I thrive on tackling challenging projects that push my skills to new
            heights and allow me to innovate. Whether it's crafting new
            features, debugging intricate issues, or fine-tuning performance, I
            am dedicated to delivering high-quality solutions that meet user
            needs and exceed expectations. I believe that web development is not
            just a career but a craft that requires dedication, creativity, and
            a keen eye for detail.
          </p>
          <p>
            Beyond the technical aspects, I enjoy collaborating with other
            developers, designers, and stakeholders to create products that make
            a real difference. The opportunity to bring creative ideas to life
            and see them in action on the web is what drives me every day. I'm
            always excited about the next project, eager to explore new
            technologies, and ready to transform innovative concepts into
            functional, user-friendly web applications. Web development is my
            passion, and I am committed to continually honing my skills and
            contributing to the digital world.
          </p>
          <p>
            I'm driven by a passion for beautiful interfaces and intuitive UX
            design. I believe that great design is not just about making
            something look good, but also about creating an experience that
            feels natural and effortless.
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
