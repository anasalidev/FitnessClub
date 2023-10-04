import React from 'react'
import "./Program.css"
import { programsData } from '../../programsData'
import join from "../../../assets/rightArrow.png"

const Program = () => {
    return (
        <>
            <div className="program">
                <div className="program-header">
                    <p className='strong'>Explore our</p>
                    <p className='st-co'>Programs</p>
                    <p className='strong'>to shap you</p>
                </div>

                <div className="programs-cat">
                    {
                        programsData.map((program) => (
                            <div className="category">
                                {program.image}
                                <h3> {program.heading}</h3>
                                <p> {program.details}</p>
                                <div className="join-btn"><p><span>join now</span> <img src={join} alt="" /></p></div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </>
    )
}

export default Program
