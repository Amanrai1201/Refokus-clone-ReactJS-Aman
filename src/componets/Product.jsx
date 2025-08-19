import React from "react";

import { FaArrowRight } from "react-icons/fa";
import Button from "./Button";
import { motion } from "motion/react";

const Product = ({
  value,
  isHovered,
  onMouseEnter,
  onMouseLeave,
  mouseover,
  index,
}) => {

  return (
    <motion.div
             style={{
          backgroundImage: isHovered ? `url(${value.bg})` : "none",
  backgroundSize: "cover",

      }}
      className={`w-full min-h-[18rem] flex justify-center`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseOver={() => mouseover(index)}
    >
      <div className="flex justify-between  items-center max-w-screen-xl mx-auto  text-white ">
        <h1 className="text-5xl capitalize font-bold md-10 ">{value.tile}</h1>
        <div className=" w-1/4 flex flex-col items-between gap-14">
          <p className="text-xl">{value.description}</p>
          <div className="flex gap-5 group-hover:transition-all duration-500 ease-in-out ">
            {value.live && <Button  />}
            {value.case && <Button title="live project "
                          
                 />}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Product;
