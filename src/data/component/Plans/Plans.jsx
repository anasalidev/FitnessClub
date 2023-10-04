import React from 'react'
import "./Plans.css"
import { plansData } from '../../plansData'
import whitetick from "../../../assets/whiteTick.png"
import arrow from "../../../assets/rightArrow.png"

const Plans = () => {
    return (
        <>
            <div className="plans-contanier">
                <div className="program-head">
                    <p className='strong'>ready to start</p>
                    <p className='clr'>your journey</p>
                    <p className='strong'>now with us</p>
                </div>


                <div className="plans">
                    {
                        plansData.map((plans, i) => (
                            <div className="plan-card" key={i}>
                                {plans.icon}
                                <h2>{plans.name} </h2>
                                <h3>$ {plans.price} </h3>
                                <div className="features">
                                    {
                                        plans.features.map((features, i) => (
                                            <div className="feature">
                                                <img src={whitetick} alt="" />
                                                <p key={i}>{features} </p>
                                            </div>
                                        ))
                                    }
                                </div>

                                <div className="more">
                                    <p>see more benefits </p><img src={arrow} alt="" />
                                </div>
                                <button className='btn'>Join Now</button>
                            </div>
                        ))
                    }
                </div>
            </div>

        </>
    )
}

export default Plans
