import React from "react";
import image from "../assets/said.png";
import { FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section
      id="home"
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center lg:text-left font-secondary">
            <motion.h1
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-qq dark:text-white text-sm leading-[0.8] text-[100px] font-semibold mb-6"
            >
              Ej jammaa<span>Said</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className=" dark:text-white text-white mr-4">I am a </span>
              <TypeAnimation
                sequence={[
                  "Developper",
                  2000,
                  "Student",
                  2000,
                  "Designer",
                  2000,
                  "Front-End",
                  2000,
                ]}
                speed={50}
                className="dark:text-accent text-yy"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>

            <motion.p
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0 font-secondary font-semibold text-white text-[20px] text-justify"
            >
              My name is Ej Jammaa Said, a passionate and skilled 21-year-old web developer, dedicated to creating innovative and user-friendly websites.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
   <button className="h-[56px] px-10 text-base text-white bg-yy  hover:bg-qq dark:bg-gradient-to-r dark:from-pink-500 dark:via-purple-600 dark:to-blue-500 dark:hover:from-[#FF56F6] dark:hover:to-[#42A6E3] shadow-md rounded-full font-primary  font-medium  ">
                <a
                  href="https://drive.google.com/file/d/1CC-UUkGq_OUQm1RCZ8Mb8E_z87eW2NYV/view?usp=share_link"
                  download
                  target="_blank"
                  rel="noreferrer"
                >
                  Download CV
                </a>
              </button>

              <a
                href="#"
                className="text-base text-yy dark:text-purple-400 hover:text-qq dark:bg-gradient-to-r text-transparent bg-clip-text dark:from-[#42A6E3] dark:to-[#FF56F6] font-bold font-primary dark:hover:from-[#FF56F6] dark:hover:to-[#42A6E3]"
              >
                My Portfolio
              </a>
            </motion.div>
          </div>
          <div className="flex text-[20px] gap-x-6 max-w-mx mx-auto lg:mx-0 text-white">
            <a href="https://www.facebook.com/prince.eljammaa">
              <FaFacebook className="w-8 h-8" />
            </a>
            <a href="https://github.com/">
              <FaGithub className="w-8 h-8" />
            </a>
            <a href="https://www.instagram.com/said_ej_j/">
              <FaInstagram className="w-8 h-8" />
            </a>
          </div>
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
          >
            <img src={image} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
