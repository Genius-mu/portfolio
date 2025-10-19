import Content1 from "../../reusables/Content1";
import "./Section3.css";

const Section3 = () => {
  return (
    <>
      <section className="sec3" id="panel">
        <div className="sec3_container">
          <h1>
            Selcted <span>Pojects</span>
          </h1>
          <div className="sec3_inner">
            <Content1
              img={"/images/Capture4.JPG"}
              h2_Content={"Real-Estate Website"}
              p={
                "This is an Hybid Real-Estate website I built from two different templates I got from Dribble."
              }
              ctaLink={"https://airbnb-emly.onrender.com/"}
            />
            <Content1
              img={"/images/car.JPG"}
              h2_Content={"Hamburger website"}
              p={
                "I built this polished Hamburger website for one of my High School senior who wanted to start an Hamburger Business."
              }
              ctaLink={"https://holeey.onrender.com/"}
            />
            <Content1
              img={"/images/laund.JPG"}
              h2_Content={"Laundry website"}
              p={
                "This is the landing page I built for Laundry Business Startup."
              }
              ctaLink={"https://laundry-ea6v.onrender.com/"}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Section3;
