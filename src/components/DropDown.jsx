import React from "react";
import { useState } from "react";
import "../components/DropDown.css";
import { AnimatePresence, motion } from "framer-motion";

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="dropDownContainer">
      <motion.div
        layout
        transition={{ layout: {duration: 0.5} }}
        animate={{height: isOpen ? "300px" : "70px"}}
        className="dropDown"
      >
        <motion.h2 layout={"position"}>Select A Car</motion.h2>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              // initial={{y:300}} animate={{y:0}} exit={{y:"-50%", transition:{duration: "0.5"}}} transition={{duration:0.5}}
              initial={{ opacity: 0, y: "50%"}}
              animate={{ opacity: 1, y: "0%" }}
              exit={{y: "100%", transition: { duration: "0.2" } }}
              transition={{ duration: "0.5", delay: 0.2}}
              className="car"
            >
              <h2>BMW</h2>
              <h2>Audi</h2>
              <h2>Jaguar</h2>
            </motion.div>
          )}
        </AnimatePresence>

        <img
          onClick={() => setIsOpen(!isOpen)}
          src={isOpen ? "/images/downarrow.png" : "/images/uparrow.png"}
          alt=""
        />
      </motion.div>
    </div>
  );
};

export default DropDown;
