import React from "react";
import Header from "./components/Header";
import Hero from "./Sections/Hero";
import Certifications from "./Sections/Certifications";
import Lectures from "./Sections/Lectures";
import Review from "./Sections/Review";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <div className="container">
          <Certifications />
          <Lectures />
          <Review />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
