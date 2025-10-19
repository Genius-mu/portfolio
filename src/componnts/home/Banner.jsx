import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Banner.css";

const Banner = () => {
  return (
    <>
      <section className="banner" id="panel">
        <div className="banner_container">
          <motion.div animate={{y: 0}} className="banner_contents">
            <p>Hello, I'm</p>
            <h2>Mustapha Adegbite</h2>
            <Link to="mailto:adegbitemustapha@gmail.com">
              <i class="bx bx-envelope"></i> hey@mustapha.com
            </Link>{" "}
            {/* link to send mail */}
            <Link
              to="https://discord.com/channels/1139301071114748135"
              target="_blank"
            >
              <i class="bx bxl-discord"></i> discord
            </Link>
          </motion.div>
          <motion.div drag className="banner_img">
            <img src="/images/IMG_20250907_175210~3.jpg" alt="" />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Banner;
