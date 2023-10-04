import React from 'react'
import "./Testimonial.css"
import { testimonialsData } from "../../testimonialsData"
import { useState } from 'react'
import leftarrow from "../../../assets/leftArrow.png"
import rightarrow from "../../../assets/rightArrow.png"

const Testimonial = () => {
  const [slected, setSlected] = useState(0);
  const llength = testimonialsData.length
  return (
    <>
      <div className="testimonial">
        <div className="left-t">
          <h1>Testimonial</h1>
          <h2>
            <span className='strong'>what they</span>
            <span> say about us</span>
          </h2>
          <h3>
            {testimonialsData[slected].review}
          </h3>
          <p>
            <span style={{ color: "var(--orange)" }}> {testimonialsData[slected].name} </span> {"  "} -
            <span> {testimonialsData[slected].status} </span>
          </p>
        </div>

        <div className="right-t">
          <div className="imgback1"></div>
          <div className="imgback2"></div>
          <img src={testimonialsData[slected].image} alt="" />

          <div className="arrows">
            <img onClick={() => {
              slected === 0
                ? setSlected(llength - 1)
                : setSlected((prev) => prev - 1)
            }} src={leftarrow} alt="" />

            <img onClick={() => {
              slected === llength -1
                ? setSlected(0)
                : setSlected((prev) => prev + 1)
            }} src={rightarrow} alt="" />
          </div>
        </div>

      </div>
    </>
  )
}

export default Testimonial
