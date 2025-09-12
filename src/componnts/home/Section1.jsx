import { Link } from "react-router-dom";
import "./Section1.css";

const Section1 = () => {
  return (
    <>
      <section className="sec1" id="panel">
        <div className="sec1_container">
          <div className="cont1">
            <div className="div1">
              <h1>I build interfaces that make businesses hire faster</h1>
              <p>
                Beautiful, reliable and conversion-focused web and React apps
                with delightful micro-interactions and performance-first
                architecture.
              </p>
            </div>
            <div className="div2">
              <Link to="/contact">Hire me</Link>
              <Link to="/portfolio">See projects</Link>
            </div>
          </div>
          <div className="cont2">
            <img
              src="/src/images/IMG_20231123_160037-removebg-preview.png"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Section1;
