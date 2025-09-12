import { Link } from "react-router-dom";
import "./Section4.css";

const Section4 = () => {
  return (
    <>
      <section className="sec4">
        <div className="sec4_container" id="panel">
          <div className="cont5">
            <h2>Based in Nigeria, working worldwide.</h2>
            <Link to="/contact">Get in touch</Link>{" "}
            {/* Takes You to contact  */}
          </div>
          <div className="cont6">
            <div className="links1">
              <h3>Social</h3>
              <nav>
                <Link
                  to="https://www.linkedin.com/in/mustaphaadegbite/"
                  target="_blank"
                >
                  <i className="bx bxl-linkedin-square"></i> LinkedIn
                </Link>
                <Link to="https://github.com/Genius-mu" target="_blank">
                  <i className="bx bxl-github"></i> Github
                </Link>
                <Link to="https://x.com/mustapha679821" target="_blank">
                  <i className="bx bxl-twitter"></i> X (formerly Titter)
                </Link>
              </nav>
            </div>

            <div className="links1">
              <h3>
                Quick <span>Links</span>
              </h3>
              <nav>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/home#sec2">Skills and Experience</Link>
                <Link to="/contact">Contact</Link>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section4;
