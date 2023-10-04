import React from 'react'
import "./Reasons.css"
import img1 from "../../../assets/image1.png"
import img2 from "../../../assets/image2.png"
import img3 from "../../../assets/image3.png"
import img4 from "../../../assets/image4.png"
import tick from "../../../assets/tick.png"
import nb from "../../../assets/nb.png"
import nike from "../../../assets/nike.png"
import adidas from "../../../assets/adidas.png"

const Reasons = () => {
   
    return (
        <>
       
            <div className="reasons">
                <div className="lift-r">

                    <img src={img1} alt="" />   
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />
                </div>
                <div className="right-r">
                    <h1>Some Reasons</h1>
                    <p><span className='strong'>why</span> choose us</p>

                    <div className="list-box">
                        <div className="list"><img src={tick} alt='' /> <span>our 140+  expert coachs </span></div>
                        <div className="list"><img src={tick} alt='' /> <span>train smarter and faster than before </span></div>
                        <div className="list"><img src={tick} alt='' /> <span>1 free program for new member  </span></div>
                        <div className="list"><img src={tick} alt='' /> <span>reliable pratners </span></div>
                    </div>
                    <div className="line">
                    <p>our partners</p>
                    </div>
                    <div className="partners">
                        <img src={nb} alt="" />
                        <img src={adidas} alt="" />
                        <img src={nike} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Reasons
