import React from "react";
import { useState } from "react";
import "../components/menuSection.css";
import {motion} from 'framer-motion'

const MenuSection = () => {
    const [isOpen,setIsOpen] = useState(false);
  return (
    <div>
      <section className="menuSection">
        <motion.nav layout animate={{width: isOpen ? "200px" : "50px"}} transition={{duration:0.7, type:"tween"}} className="navBar">
          <div className="arrowSection">
            {isOpen ? <h2>Menu</h2> : null}
            <img onClick={() => setIsOpen(!isOpen)} src={isOpen? "/images/leftarrow.png" : "/images/rightarrow.png"} alt="" />
          </div>

          <div className="menuList">

            <div>
                <img src="/images/home.png" alt="" />
                <p>HOME</p>
            </div>
            <div>
                <img src="/images/about.png" alt="" />
                <p>DASHBOARD</p>
            </div>
            <div>
                <img src="/images/contact.png" alt="" />
                <p>PROFILE</p>
            </div>
            <div>
                <img src="/images/call.png" alt="" />
                <p>CONTACT</p>
            </div>
            <div>
                <img src="/images/setting.png" alt="" />
                <p>SETTING</p>
            </div>
            <div>
                <img src="/images/dashboard.png" alt="" />
                <p>ABOUT</p>
            </div>
          </div>
        </motion.nav>
      </section>
    </div>
  );
};

export default MenuSection;
