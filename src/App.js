import React from "react";
import "./index.css";
// components
import Banner from "./components/Banner";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import PortfolioFooter from "./components/footer";




const App = () => {
  return (
    <div className="bg-ww  dark:bg-site  overflow-hidden bg-cover bg-no-repeat">
      <Header />
      <Banner />
      <Nav />
      <About />
      <Services />
      <Contact />
      <PortfolioFooter />
  

    </div>
  );
};

export default App;
