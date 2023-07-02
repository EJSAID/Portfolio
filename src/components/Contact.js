import React from "react";
// eslint-disable-next-line
import  { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // get the input fields
    const emailInput = form.current.user_email;
    const nameInput = form.current.user_name;
    const messageInput = form.current.message;

    // check if the input fields are not empty
    if (
      !emailInput.value.trim() ||
      !nameInput.value.trim() ||
      !messageInput.value.trim()
    ) {
      // alert('Please fill all the input fields.');
      Swal.fire("Oops!", "Please fill all the input fields.!", "warning");
      return;
    }

    emailjs
      .sendForm(
        "service_g7vclny",
        "template_vxjwiw8",
        form.current,
        "yVkI9W5o08BIJFutr"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire(
            "Email sent successfully😊!",
            "Thank you for getting in touch. We will respond to your message shortly.",
            "success"
          );
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section
      
      className="py-16  lg:py-24 lg:h-screen flex items-center"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4 className=" uppercase text-yy dark:text-accent text-[36px] lg:text-[60px] font-secondary font-semibold mb-2 tracking-wide">
                Get in touch
              </h4>
              <h2 className="text-white dark:text-white text-[45px] lg:text-[90px] leading-none mb-12">
                Let's work <br /> together
              </h2>
            </div>
          </motion.div>

          {/* form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border border-yy dark:border-accent rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
          >
            <input
              type="email"
              name="user_email"
              className=" focus:text-black placeholder-font-bold font-bold font-mono dark:text-white border-yy dark:border-accent bg-transparent border-b py-3 outline-none w-full placeholder:text-white placeholder:dark:text-white focus:dark:border-accent focus:border-blue-700 transition-all"
              placeholder="Your email"
            />
            <input
              type="text"
              name="user_name"
              className="focus:border-blue-500 placeholder-font-bold font-bold font-mono dark:text-white border-yy dark:border-accent text-black bg-transparent border-b py-3 outline-none w-full placeholder:text-white placeholder:dark:text-white focus:dark:border-accent  transition-all"
              placeholder="Your name"
            />
            <textarea
              name="message"
              className="focus:border-blue-500 placeholder-font-bold font-mono font-bold dark:text-white border-yy dark:border-accent text-black bg-transparent border-b py-3 outline-none w-full placeholder:text-white placeholder:dark:text-white focus:dark:border-accent  transition-all resize-none mb-12"
              placeholder="Your message"
            ></textarea>
            <button
              type="submit"
              className="h-[56px] px-10 text-base text-white hover:text-black bg-yy  hover:bg-qq  dark:bg-gradient-to-r dark:from-pink-500 dark:via-purple-600 dark:to-blue-500 dark:hover:from-[#FF56F6] dark:hover:to-[#42A6E3] shadow-md rounded-full font-primary  font-medium "
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
