import React from 'react';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import { BsWhatsapp, BsTwitter, BsInstagram } from 'react-icons/bs';
import {TbSocial} from 'react-icons/tb';


export default function PortfolioFooter() {
  return (
    
    <section id="footer" className="bg-black pt-5 pb-32 lg:py-12 lg:pb-32 cursor-pointer " > 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="block bg-gray-800 border border-gray-700 rounded-lg shadow hover:bg-gray-700 ">
            <div className="px-6 py-8">
           <a  href="mailto:eljammaasaid@gmail.com" target="_blank">  <div className="flex items-center">
                <MdEmail className="text-5xl ml-8 text-gray-300 mr-4" />
                <h4 className="text-3xl font-bold tracking-tight text-gray-300">
                  Contact Me
                </h4>
              </div>
              <div className="mt-8">
                <h5 className="font-bold ml-12 text-gray-400">
                  eljammaasaid@gmail.com
                </h5>
                
              </div>
              </a> 
            </div>
          </div>
          <div className="block bg-gray-800 border border-gray-700 rounded-lg shadow hover:bg-gray-700">
            <div className="px-6 py-8">
              <div className="flex items-center">
                <MdLocationOn className="text-5xl text-yy dark:text-accent ml-8 mr-4 " />
                <h4 className="  text-3xl font-bold tracking-tight text-gray-300">
                  Location
                </h4>
              </div>
              <div className="mt-8">
                <h5 className="ml-20  font-bold text-gray-400">
                  Agadir, Morocco
                </h5>
              </div>
            </div>
          </div>
          <div className="block bg-gray-800 border border-gray-700 rounded-lg shadow hover:bg-gray-700">
          <div className="px-6 py-8">
          <div className="flex items-center ">
          <TbSocial className='text-5xl text-gray-300 ml-5 mr-4'/>
          <h4 className="text-3xl font-bold text-center  tracking-tight text-gray-300">
                  Social Media
                </h4>
           
                </div>
                
              
             
              <div className="mt-8 flex items-center">
              
              <div className="flex items-center ml-12">
            
              <a href="https://twitter.com/ej_jammaa" target="_blank">  <BsTwitter className="hover:scale-125 transition-all duration-500 text-5xl text-blue-500 mr-6" /></a>
           <a href='https://www.instagram.com/said_ej_j/' target="_blank"><BsInstagram className="hover:scale-125 transition-all duration-500 text-5xl  text-pink-500 mr-6" /></a>     

             <a  href="https://wa.me/+212697342869" target="_blank"> <BsWhatsapp className="hover:scale-125 transition-all duration-500 text-5xl text-green-300  mr-6" /></a>    
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 text-gray-400 text-center  font-semibold">
          <p>&copy; 2023 EJSaid. All rights reserved.</p></div>
       
    </section>
    
  );
}
