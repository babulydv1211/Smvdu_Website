import "./Hero.css"
import React from "react"
import darkArrow from "../../assets/dark-arrow.png";


const Hero=()=>{
  return(
    <div className="hero container">
     <div className="hero-text">
     <h1>We Ensure better education for a better world</h1>
       <p> Our cutting-edge curriculum is desigened to empower students with the knowledge,skills and exprience need to excel in the dynamic field of education</p>

      <button className="btn">Explore more <img src={ darkArrow } alt=""/> </button>
       
     </div>
    </div>
  )
}
export default Hero