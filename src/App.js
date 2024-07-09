import React from "react";
import Header from "./Components/Navbar";
// import Navbar from "./Components/Navbar2";
import ImageCarousel from "./Components/ImageCarousel";
import About from "./Components/About";
import ProductSection from "./Components/ProductSection";
import InfoSection from "./Components/InfoSection";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <Header />
      {/* <Navbar /> */}
      <ImageCarousel />
      <About />
      <ProductSection />
      <InfoSection />
      <Footer />
    </>
  );
};

export default App;
