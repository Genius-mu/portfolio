import Port from "../reusables/Port";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <>
      <section className="Portfolio_sec">
        <div className="portfolio_container">
          <div className="portfolio_head">
            <h2>Portfolio</h2>
            <p>
              A showcase of <span>side projects</span> I've loved bringing to
              life.
            </p>
          </div>
          <div className="port_body">
            <Port
              webName={"Invoice Generator"}
              portImg={"/images/invcs.JPG"}
              CTAlink={"https://aiinvoicegenerator.netlify.app/"}
              webDescription={
                "A fully functional React app that allows users to create, edit, and download professional invoices in real time. It features a clean interface, dynamic form handling, and automatic total calculations for accuracy and ease of use. This project highlights my ability to build practical, data-driven React applications with strong focus on usability and modern design."
              }
            />
            <Port
              webName={"Learning Game — Interactive Word Game"}
              portImg={"/images/spllGam.JPG"}
              CTAlink={"https://learningame.netlify.app/"}
              webDescription={
                "A fun, animated word game built with React and Framer Motion, showcasing problem-solving, state management, and interactive UI design. It highlights my ability to create smooth animations, responsive interfaces, and engaging front-end experiences that bring logic and creativity together."
              }
            />
            <Port
              webName={"Hamburger Website"}
              portImg={"/images/car.JPG"}
              CTAlink={"https://holeey.onrender.com/"}
              webDescription={
                "A clean and appetizing landing page for a modern food brand. With bold visuals, smooth navigation, and user-friendly layouts, it shows my ability to design engaging websites that leave a lasting impression."
              }
            />
            <Port
              webName={"Real-Estate Website"}
              portImg={"/images/Capture4.JPG"}
              CTAlink={"http://airbnb-emly.onrender.com/"}
              webDescription={
                "A sleek landing page built for real estate services. It highlights properties with clarity, trust, and modern design while reflecting my skill in creating functional and visually appealing business websites."
              }
            />
            <Port
              webName={"Civil Website"}
              portImg={"/images/Capture.JPG"}
              CTAlink={"civisb.onrender.com"}
              webDescription={
                "A professional landing page designed for civil engineering and construction. It presents services and projects with structure and authority, demonstrating my strength in building industry-specific websites."
              }
            />
            <Port
              webName={"Laundry Website"}
              webDescription={
                "A fresh landing page created for laundry and cleaning services. Simple layouts, clear calls-to-action, and modern visuals make it practical and customer-focused, showing my ability to design service-based websites."
              }
              portImg={"/images/laund.JPG"}
              CTAlink={"https://laundry-ea6v.onrender.com/"}
            />
            <Port
              webName={"Image Gallery"}
              webDescription={
                "A clean and responsive image gallery built with smooth navigation and elegant layouts. It allows users to browse images seamlessly using next and previous controls. This project showcases my skill in creating visually organized, interactive, and user-friendly front-end experiences."
              }
              portImg={"/images/imggal.JPG"}
              CTAlink={"https://image-gallery-geniusmu.onrender.com/"}
            />
            <Port
              webName={"Music PLayer"}
              webDescription={
                "A modern and responsive music player built with clean design and smooth interactions. It features intuitive controls, dynamic track display, and a minimal layout that enhances the listening experience. This project highlights my ability to create interactive, visually appealing, and user-focused web interfaces."
              }
              portImg={"/images/musicPlay.JPG"}
              CTAlink={"http://music-player-nblg.onrender.com/"}
            />
            <Port
              webName={"Ticket Management App (Vue.js)"}
              webDescription={
                "A Vue.js version of the ticket management system featuring authentication, dynamic dashboard, and complete ticket CRUD. Uses composables and localStorage for state management."
              }
              portImg={"/images/tktVu.JPG"}
              CTAlink={"https://ticket-mapp2.netlify.app/"}
            />
            <Port
              webName={"Ticket Management App (React)"}
              webDescription={
                "A full-featured ticket management system built with React, TailwindCSS, and localStorage for persistent storage. Includes authentication, dashboard with ticket stats, and full CRUD functionality."
              }
              portImg={"/images/tktAct.JPG"}
              CTAlink={"http://ticket-mapp.netlify.app/"}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
