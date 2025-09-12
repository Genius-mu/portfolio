import { Link } from "react-router-dom";
import "./Content1.css";

const Content1 = ({img, h2_Content, p, bg, ctaLink}) => {
  return (
    <>
      <div className="reusable_content" style={{ backgroundColor: { bg } }}>
        <div className="img">
          <img src={img} alt="" />
        </div>
        <div className="des">
          <h2>{h2_Content}</h2>
          <p>{p}</p>
          <Link to={ctaLink}>View <i className='bx bx-link-external'></i></Link>
        </div>
      </div>
    </>
  );
};

export default Content1;
