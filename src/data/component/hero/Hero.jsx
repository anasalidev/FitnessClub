import React from 'react'
import "./Hero.css"
import Header from '../Header/Header'
import heart from "../../../assets/heart.png"
import hero_image from "../../../assets/hero_image.png"
import hero_back from "../../../assets/hero_image_back.png"
import calories from "../../../assets/calories.png"


const Hero = () => {
    return (
        <>
            <div className="hero">
                <div className="left-h">
                    <Header />
                    {/* ======================================================= */}
                    <div className="the-best-ad">
                        <div></div>
                        <span>the best fitness club in the town</span>
                    </div>

                    {/* ========================================= */}
                    <div className="hero-text">
                        <h1><span className='strong'>shape</span> your</h1>
                        <h1>ideal body</h1>
                        <p className="text-span">In here we will help you to shape and build your ideal body and your life to fullest</p>
                    </div>
                    {/* =========================================== */}

                    <div className="figures">
                        <div className="figures-bx">
                            <h4>+140</h4>
                            <p>export coachsk</p>
                        </div>
                        <div className="figures-bx">
                            <h4>+978</h4>
                            <p>members joined</p>
                        </div>
                        <div className="figures-bx">
                            <h4>+50</h4>
                            <p>fitness programs</p>
                        </div>
                    </div>

                    {/* ==================================================== */}

                    <div className="hero-buttons">
                        <button className="btn">Get started</button>
                        <button className="btn">Learn more</button>
                    </div>

                </div>

                {/* ==================================================================================================== */}

                <div className="right-h">
                    <button className="btn">Join now</button>

                    {/* ====================== */}
                    <div className="heart-rate">
                        <img src={heart} alt="" />
                        <p>
                            <span>heart rate</span>
                            <span>116 bpm</span>

                        </p>
                    </div>
                    {/* =================================== */}


                    <div className="hero-img">
                    <img src={hero_image} alt=""  className='hero-imgs'/>
                        <img src={hero_back} alt="" className='hero-back' />
                    </div>


                    {/* ==================================== */}

                    <div className="calories">
                        <img src={calories} alt="" />
                        <p>
                            <span>calories bround</span>
                            <span>220 kcal</span>
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Hero
