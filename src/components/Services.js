
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import img1 from "../assets/resta.png";

 import img3 from "../assets/Screenshot_8.png";
 import img4 from "../assets/cab.png";


const Services = () => {

  return (
    <section
      id="services"
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
    >
      <div className="  container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10 mb-10 lg:mb-0"
          >
            {/* text */}
            <div>
              <h2 className="h2 leading-tight text-yy dark:text-accent text-[36px] lg:text-[60px] font-secondary font-semibold">
                My Latest <br />
                work
              </h2>
              <p className="max-w-sm mb-16  font-secondary text-[20px] font-bold text-white dark:text-white text-justify">
                "These projects showcase my proficiency in various web
                development technologies and my ability to create high-quality,
                user-friendly applications."
              </p>
              <button className=" h-[56px] px-10 text-base text-white hover:text-black bg-yy  hover:bg-qq  dark:bg-gradient-to-r dark:from-pink-500 dark:via-purple-600 dark:to-blue-500 dark:hover:from-[#FF56F6] dark:hover:to-[#42A6E3] shadow-md rounded-full font-primary  font-medium ">
                <a
                  href="https://github.com/EJSAID?tab=repositories"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  View all projects
                </a>
              </button>
            </div>
            {/* image1 */}
         
            <div className="cursor-pointer group relative overflow-hidden border-2 border-white/50 rounded-xl"   >
       
              {/* overday */}
              <div className=" group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* image */}
              <img
                className="bg-ww dark:bg-purple-950 group-hover:scale-125 transition-all duration-500"
                src={img1}
                alt=""
              />
              {/* pretitive */}
              <div className="absolute placeholder:-bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="dark:text-gradient text-white font-bold dark:text-white">
                  HTML5/CSS3/JS
                </span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white font-bold dark:text-white ">
                  Cab Booking
                </span>
              </div>
            </div>
           
          </motion.div>
          
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1  flex flex-col gap-y-12"
          >
            {/* image */}
         
            <div className=" group relative overflow-hidden border-2 border-white/50 rounded-xl cursor-pointer" >
              {/* overday */}
              <div className=" group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* image */}
              <img
                className="bg-ww dark:bg-purple-950 p-16 group-hover:scale-125 transition-all duration-500"
                src={img4}
                alt=""
              />
              {/* pretitive */}
              <div className="absolute placeholder:-bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="dark:text-gradient text-white font-bold dark:text-white">
                  Java Fx/oracle DB
                </span>
              </div>
              {/* title */}
              <div className="absolute  -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white font-bold dark:text-white ">
                  CV Création
                </span>
              </div>
            </div>
          
            {/* image */}
            <a href="https://iptvspotlight.com/">
            <div className="  cursor-pointer group relative overflow-hidden border-2 border-white/50 rounded-xl" >
              {/* overday */} 
              <div className=" group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* image */}
             <img
       src={img3}
          className="group-hover:scale-125 transition-all duration-500  rounded-lg overflow-hidden"
          alt=""
        />  

              {/* pretitive */}
              <div className="absolute placeholder:-bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="dark:text-gradient text-white font-bold dark:text-white">
                  HTML5/BootStrap/js
                </span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white font-bold dark:text-white">
                  E-commerce website
                </span>
              
              </div>
             
           </div>
           </a>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
