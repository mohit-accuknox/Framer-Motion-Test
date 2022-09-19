import React, { useState } from "react";
import "../components/DivExpand.css";
import { motion } from "framer-motion";
const DivExpand = () => {
  const [isOpen, setIsOpen] = useState(false);

  console.log(isOpen);
  return (
    <div className="framerContainer">
  
        <motion.div layout animate={{backgroundColor: isOpen ? "#B9FFF8" : "white"}} transition={{layout: {duration:0.5}}}  className="card" onClick={() => setIsOpen(!isOpen)}>
          <motion.h2 layout={"position"} >The Framer Motion Library</motion.h2>
          {isOpen && <p>
            The Framer Motion is the best library which was built for animation
            to be used inside of the React Js. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Consectetur, libero amet laudantium
            quasi nostrum temporibus quas quod modi! Earum culpa dolorem
            perferendis reprehenderit nisi.
          </p>}
        </motion.div>
    </div>
  );
};

export default DivExpand;
