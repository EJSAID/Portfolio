import React from 'react'
import img1 from "https://upload.wikimedia.org/wikipedia/commons/3/3d/CSS.3.svg";
import '../index.css'




 const Skills = () => {
 

  return (
    <section id="skills" >
         <div class="skills-section">
    <div class="skills-header">
     <h1>Skills</h1>   
     </div>
     <div class="skills-container">
       
      <div class="skills-box">
       <div class="skills-title">
       <div class="skills-img">
        <img src="https://cdn.freebiesupply.com/logos/large/2x/html-5-logo-png-transparent.png"     alt="" class="skills-icons"/>
        </div>
         <h3>HTML 5</h3>
        </div>
        <p> Lorem  Lorem  Lorem  </p>
       </div>
       
       
        <div class="skills-box">
       <div class="skills-title">
       <div class="skills-img">
        <img src={img1} alt="" class="skills-icons"/>
        </div>
        <h3>CSS3</h3>
        </div>
        <p> Lorem  Lorem  Lorem  </p>
       </div>
       
       
        <div class="skills-box">
       <div class="skills-title">
       <div class="skills-img">
        <img src="https://icon-library.net/images/javascript-icon-png/javascript-icon-png-23.jpg" alt="" class="skills-icons"/>
        </div>
        <h3>JAVASCRIPT</h3>
        </div>
        <p> Lorem  Lorem  Lorem  </p>
               </div>
       
          <div class="skills-box">
       <div class="skills-title">
       <div class="skills-img">
        <img src="http://pluspng.com/img-png/nodejs-logo-png-nice-images-collection-node-js-desktop-wallpapers-370.png" alt="" class="skills-icons"/>
        </div>
        <h3>NODE.JS</h3>
        </div>
        <p> Lorem  Lorem  Lorem  </p>
       </div>
       
          <div class="skills-box">
       <div class="skills-title">
       <div class="skills-img">
        <img src="https://mildaintrainings.com/wp-content/uploads/2017/11/react-logo.png" alt="" class="skills-icons"/>
        </div>
        <h3>REACT</h3>
        </div>
        <p> Lorem  Lorem  Lorem  </p>
       </div>
       
          <div class="skills-box">
       <div class="skills-title">
       <div class="skills-img">
        <img src="https://javascriptforwp.com/wp-content/uploads/2019/03/badge-gatsby.png" alt="" class="skills-icons"/>
        </div>
        <h3>GATSBY.JS</h3>
        </div>
        <p> Lorem  Lorem  Lorem  </p>
       </div>
       
       
       </div>
    
     </div>



    
         </section>
  )
}


export default Skills;


