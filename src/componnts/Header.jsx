import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      {/* <div className="progress-line"></div> */}
      <header>
        <div className="header_container">
          <div className="logo_content">
            <Link to="" className="logo">
              MA
            </Link>
          </div>
          <nav>
            <Link to="/home">Home</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/contact">Contact</Link>
          </nav>

          <div className="hamb">
            <nav className="navbar bg-tertiary fixed-top-">
              <div className="container-fluid">
                <button
                  className="navbar-toggler hamm"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasNavbar"
                  aria-controls="offcanvasNavbar"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="offcanvas offcanvas-end"
                  tabIndex="-1"
                  id="offcanvasNavbar"
                  aria-labelledby="offcanvasNavbarLabel"
                >
                  <div className="offcanvas-header">
                    <h5
                      className="offcanvas-title logoName"
                      id="offcanvasNavbarLabel"
                    >
                      M.Adegbite
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                      <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/home">
                          Home
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/portfolio">
                          Portfolio
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/contact">
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

{
  /*<div className="header_info">
              <p>Frontend Web-Devloper</p>
              <h3>Mustapha Adegbite</h3>
            </div>
        </div> */
}
