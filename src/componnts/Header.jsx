// import "./Header.css";
// import { Link } from "react-router-dom";

// const Header = () => {
//   return (
//     <>
//       {/* <div className="progress-line"></div> */}
//       <header>
//         <div className="header_container">
//           <div className="logo_content">
//             <Link to="" className="logo">
//               MA
//             </Link>
//           </div>
//           <nav>
//             <Link to="/home">Home</Link>
//             <Link to="/portfolio">Portfolio</Link>
//             <Link to="/contact">Contact</Link>
//           </nav>

//           <div className="hamb">
//             <nav className="navbar bg-tertiary fixed-top-">
//               <div className="container-fluid">
//                 <button
//                   className="navbar-toggler hamm"
//                   type="button"
//                   data-bs-toggle="offcanvas"
//                   data-bs-target="#offcanvasNavbar"
//                   aria-controls="offcanvasNavbar"
//                   aria-label="Toggle navigation"
//                 >
//                   <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div
//                   className="offcanvas offcanvas-end"
//                   tabIndex="-1"
//                   id="offcanvasNavbar"
//                   aria-labelledby="offcanvasNavbarLabel"
//                 >
//                   <div className="offcanvas-header">
//                     <h5
//                       className="offcanvas-title logoName"
//                       id="offcanvasNavbarLabel"
//                     >
//                       M.Adegbite
//                     </h5>
//                     <button
//                       type="button"
//                       className="btn-close"
//                       data-bs-dismiss="offcanvas"
//                       aria-label="Close"
//                     ></button>
//                   </div>
//                   <div className="offcanvas-body">
//                     <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
//                       <li className="nav-item">
//                         <Link className="nav-link" aria-current="page" to="/home">
//                           Home
//                         </Link>
//                       </li>
//                       <li className="nav-item">
//                         <Link className="nav-link" to="/portfolio">
//                           Portfolio
//                         </Link>
//                       </li>
//                       <li className="nav-item">
//                         <Link className="nav-link" to="/contact">
//                           Contact
//                         </Link>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </nav>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// };

// export default Header;

// {
//   /*<div className="header_info">
//               <p>Frontend Web-Devloper</p>
//               <h3>Mustapha Adegbite</h3>
//             </div>
//         </div> */
// }

import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className="header_container">
        <div className="logo_content">
          <Link to="/" className="logo">
            MA
          </Link>
        </div>

        <nav className="desktop_nav">
          <Link to="/home">Home</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <div className="hamburger" onClick={toggleMenu}>
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={isOpen ? "open" : ""}
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </div>

        {/* Mobile menu */}
        <div className={`mobile_menu ${isOpen ? "show" : ""}`}>
          <Link to="/home" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/portfolio" onClick={() => setIsOpen(false)}>
            Portfolio
          </Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
