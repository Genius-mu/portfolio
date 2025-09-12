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
              webName={"Hamburger Website"}
              portImg={"/src/images/car.JPG"}
              CTAlink={"https://holeey.onrender.com/"}
              webDescription={
                "A clean and appetizing landing page for a modern food brand. With bold visuals, smooth navigation, and user-friendly layouts, it shows my ability to design engaging websites that leave a lasting impression."
              }
            />
            <Port
              webName={"Real-Estate Website"}
              portImg={"/src/images/Capture4.JPG"}
              CTAlink={"http://airbnb-emly.onrender.com/"}
              webDescription={
                "A sleek landing page built for real estate services. It highlights properties with clarity, trust, and modern design while reflecting my skill in creating functional and visually appealing business websites."
              }
            />
            <Port
              webName={"Civil Website"}
              portImg={"/src/images/Capture.JPG"}
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
              portImg={"/src/images/laund.JPG"}
              CTAlink={"https://laundry-ea6v.onrender.com/"}
            />
            {/* <Port
              webName={"Hamburger Website"}
              webDescription={
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae libero architecto ipsa omnis quod a odit veniam beatae molestias dolorem, asperiores inventore deleniti autem vitae eos sit quasi ratione illum!"
              }
            /> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
