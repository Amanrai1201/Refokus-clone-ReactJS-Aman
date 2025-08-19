import React from "react";
import LocomotiveScroll from "locomotive-scroll";
import Navbar from "./componets/Navbar";
import Work from "./componets/Work";
import Stripe from "./componets/Stripe";
import Product from "./componets/Product";
import Products from "./componets/Products";
import Marque from "./componets/Marque";
import Marques from "./componets/Marques";
import Cards from "./componets/Cards";
import Footer from "./componets/Footer";
import { motion } from "motion/react";
function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="bg-zinc-900  font-[Satoshi-Variable]  overflow-hidden   ">
      <Navbar />
      <Work />
      <Stripe />
      <Products />
      <Marques />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
