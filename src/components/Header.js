import { BsFillMoonStarsFill } from "react-icons/bs";
import {  useState, useEffect } from "react";
import logo from "../assets/hi.png";



const Header = () => {
  const [theme, setheme] = useState("dark");


  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
 
    } else {
      document.documentElement.classList.remove("dark");
   
    }
  }, [theme]);
  

  const handleThemeSwitch = () => {
    console.log("Theme switched!");
    setheme(theme === "dark" ? "light" : "dark");
  };

  return (
  
    <div className="container mx-auto ">
      <div className="flex justify-between items-center px-9 pt-5">
        <a href="#">
          <img
            src={logo}
            alt=""
            className="w-52 h-30 rounded-lg   cursor-pointer"
          />
        </a>
        <ul>
          <li>
            
            <BsFillMoonStarsFill
              onClick={handleThemeSwitch}
              className=" cursor-pointer text-5xl text-qq  dark:text-white "
            />
          </li>
        </ul>
      </div>
  
      </div>
    

  );
};

export default Header;
