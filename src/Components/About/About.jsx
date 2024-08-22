import React from "react"
import "./About.css"
import about_img from "../../assets/prophoto2.png"
import play_icon from "../../assets/play-icon.png"


const About=({setplayState})=>{
  return(
    <div className="about">
      <div className="about-left">
      <img src={about_img} alt="" className="about-img"/>
        <img src={play_icon} alt="" className="play-icon" onClick={()=>{setplayState(true)} } />
      </div>
      <div className="about-right"> 
      <h3>ABOUT UNIVERSITY </h3>
      <h2>Nuturing Tomorrow's Leaders Today </h2>
      <p>A university is an institution of higher education, usually comprising a college of liberal arts and sciences and graduate and professional schools and having the authority to confer degrees in various fields of study. </p>
        <p> an institution of higher learning, especially one providing a general or liberal arts education rather than technical or professional training. Compare university. a constituent unit of a university, furnishing courses of instruction in the liberal arts and sciences, usually leading to a bachelor's degree.  </p>
        <p> College is an educational school where people go to learn and earn an academic degree upon graduation. The requirement to enter college is different in different countries, but in most countries, the student must have a high school diploma or equivalent (in the United States and Canada, a GED). </p>

        
      </div>
    </div>
  )
}
export default About