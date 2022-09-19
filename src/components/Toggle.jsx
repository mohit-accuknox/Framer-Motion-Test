import React, { useState } from "react";
import "../components/Toggle.css";
import { motion } from "framer-motion";

const Toggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  console.log(isOpen);

  return (
    <div>
      <section className="toggleContainer">
        <motion.div
          animate={{ backgroundColor: isOpen ? "#0718F7" : "#99A0D4" }}
          transition={{ duration: 0.4 }}
          className={isOpen ? "toggle justify-end" : "toggle justify-start"}
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.div
            layout
            transition={{ type: "spring", duration: 0.4 }}
            className="toggleBall"
          ></motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Toggle;
