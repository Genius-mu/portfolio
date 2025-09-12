import { Link } from "react-router-dom";
import "./Section2.css";

const Section2 = () => {
  return (
    <>
      <section className="sec2" id="panel">
        <div className="sec2_container">
          <div className="head">
            <p>Who I am and what I do</p>
            <h3>Skills and Experience</h3>
            {/* <h3>About Me</h3> */}
          </div>
          <div className="sec2_cont2">
            <div className="div3">
              <p>
                I'm a <span>product-focused frontend engineer</span>{" "}
                specializing in React and modern web tooling, I design and ship
                polished UIs that increase trust and conversion. I lean on
                animations and micro-interactions to give products a premium
                feel while keeping accessibility and performance in mind.
              </p>
              <div className="inner">
                <ul>
                  <li>HTML CSS & JS</li>
                  <li>
                    <span>React</span>, Vite
                  </li>
                </ul>
                <ul>
                  <li>
                    <span>Responsive</span> design
                  </li>
                  <li>API design & integrations</li>
                </ul>
              </div>
            </div>
            <div className="div4">
              <h3>Why hire me?</h3>
              <p>
                <span>I build fast, write maintainable code</span>, and care
                about how users feel. I focus on outcomes—conversion, retention
                and clarity.
              </p>
              <Link to="/contact">Reach Out <i className='bx bx-link-external'></i></Link>
            </div>
          </div>
          {/* <div className="sec2_cont4">
            <div className="skills">
              <i></i>
              <h2>HTML5</h2>
            </div>
            <div className="skills">
              <i></i>
              <h2>CSS</h2>
            </div>
            <div className="skills">
              <i></i>
              <h2>JavaScript</h2>
            </div>
            <div className="skills">
              <i></i>
              <h2>React</h2>
            </div>
            <div className="skills">
              <i></i>
              <h2>Responsive Design</h2>
            </div>
            <div className="skills">
              <i></i>
              <h2>API Design</h2>
            </div>
          </div> */}         
        </div>
      </section>
    </>
  );
};

export default Section2;

{
  /* <h2>Beyond My Core Work</h2>
<p>
Beyond my core work, I’m passionate about contributing to the
community, collaborate on exciting projects, and explore new
ventures that align with my interests and values. I’m always
looking for ways to grow, give back, and make an impact.
</p> */
}
