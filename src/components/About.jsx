import React from "react";
import { Link } from "react-scroll";

const About = () => {
  return (
    <section id="about" className="py-8 lg:py-24 lg:h-screen flex items-center">
      <div className="container mx-auto">
        <div
         
          className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gapp-y-0 h-screen"
        >
          {/* image */}
          <div className="flex-1 bg-about bg-contain bg-no-repeat max-w-[420px] h-[540px]  bg-top "></div>
          {/* text */}
          <div className="flex-1 overflow-hidden ">
            <h2 className=" text-yy dark:text-accent text-[36px] lg:text-[60px] font-secondary font-semibold h-[100px] text-center">
              About me.
            </h2>
            <h3 className="dark:text-white text-white mb-4 font-bold text-[26px] text-justify ">
            Passionate web developer with a diploma in Computer Engineering. Skilled in HTML, CSS, JavaScript, PHP (Laravel), and MERN stack. Committed to exceeding expectations, creating visually stunning and user-friendly websites for businesses and individuals to thrive online.
            </h3>
            <p className="mb-6"> </p>
            <div className="h-[140px] flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0">
            <button className="h-[56px] px-10 text-base text-white bg-yy hover:bg-qq dark:bg-gradient-to-r dark:from-pink-500 dark:via-purple-600 dark:to-blue-500 dark:hover:from-[#FF56F6] dark:hover:to-[#42A6E3] shadow-md rounded-full font-primary font-medium transform transition-all duration-300 hover:scale-105">
  <Link
    activeClass="active"
    to="contact"
    spy={true}
    smooth={true}
    duration={500}
  >
    Hire me
  </Link>
</button>
              <a
                href="#"
                className="text-base  text-yy    dark:text-purple-400 hover:text-qq dark:bg-gradient-to-r text-transparent bg-clip-text dark:from-[#42A6E3] dark:to-[#FF56F6] font-bold font-primary dark:hover:from-[#FF56F6] dark:hover:to-[#42A6E3] "
              >
                My Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
