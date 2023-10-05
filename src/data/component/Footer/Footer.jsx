import React from 'react'
import "./Footer.css"
import git from "../../../assets/github.png"
import linkden from "../../../assets/linkedin.png"
import instagram from "../../../assets/instagram.png"

const Footer = () => {
    return (
        <>
            {/* <hr /> */}
            <div className="footer-contanier">
                <div className="footer">
                    <img src={git} alt="" />
                    <img src={linkden} alt="" />
                    <img src={instagram} alt="" />
                </div>
            </div>

        </>
    )
}

export default Footer
