import { Link } from "react-router-dom";
import "./Port.css";

const Port = ({ webName, webDescription, portImg, CTAlink }) => {
  return (
    <>
      <div className="port_container">
        <div className="port_img">
          <img src={portImg} alt="" />
        </div>
        <div className="port_content">
          <h2>{webName}</h2>
          <p>{webDescription}</p>
          <Link to={CTAlink} className="port_CTA" target="_blank">
            View project <i className="bx bx-link-external"></i>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Port;
