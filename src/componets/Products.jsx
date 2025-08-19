import React, { useState } from "react";
import Product from "./Product";
import { motion } from "motion/react";

const Products = () => {
  const [Data, setData] = useState([
    {
      tile: "Arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: false,
      bg:'/images-bg/aman1.png'
    },
    {
      tile: "TTR",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      live: true,
      case: false,
           bg:'/images-bg/aman2.png'

    },
    {
      tile: "YIR 2022",
      description:
        "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
      live: true,
      case: false,
          bg:'/images-bg/aman1.png'
    },
    {
      tile: "Yahoo!",
      description:
        "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
      live: true,
      case: false,
          bg:'/images-bg/aman3.png' 
    },
  ]);

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
    setData((prevData) =>
      prevData.map((item, i) =>
        i === index ? { ...item, case: true } : { ...item, case: false }
      )
    );
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const mpver = (val) => {
    setpos(val * 20);
  };

  const [pos, setpos] = useState(0);

  return (
    <div className="flex flex-col items-center relative mt-40 top-0">
      {Data.map((value, index) => (
        <Product
          key={index}
          value={value}
          index={index}
          isHovered={hoveredIndex === index}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          mouseover={mpver}
        />
      ))}
      <div className="w-full h-full absolute pointer-events-none">
        <motion.div
          initial={{ y: pos + `rem` }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.87, 0, 0.13, 1], duration: 0.2 }}
          className="bg-purple-800 w-[23rem] h-[20rem] absolute left-[35%] top-[-5%] overflow-hidden translate-x-[-50%]"
        >
          <motion.div
            animate={{ y: -pos + `rem` }}
            className="w-full h-full bg-gray-400"
            transition={{ ease: [0.87, 0, 0.13, 1], duration: 0.5 }}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute top-0 left-0 w-full h-full object-cover"
            >
              <source src="/videos/ttr-CUQdDHBj.mp4" type="video/mp4" />
            </video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            className="w-full h-full bg-gray-50"
            transition={{ ease: [0.87, 0, 0.13, 1], duration: 0.5 }}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute top-0 left-0 w-full h-full object-cover"
            >
              <source src="/videos/aman.mp4" type="video/mp4" />
              
            </video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            className="w-full h-full bg-red-400"
            transition={{ ease: [0.87, 0, 0.13, 1], duration: 0.5 }}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute top-0 left-0 w-full h-full object-cover"
            >
              <source src="/videos/webflow-education-promo.mp4" type="video/mp4" />
              
            </video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            className="w-full h-full bg-slate-600"
            transition={{ ease: [0.87, 0, 0.13, 1], duration: 0.5 }}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute top-0 left-0 w-full h-full object-cover"
            >
              <source src="/videos/Cula_promo_new_4_3.mp4" type="video/mp4" />
              
            </video>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
