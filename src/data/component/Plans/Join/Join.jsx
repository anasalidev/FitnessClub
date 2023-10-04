import React from 'react'
import emailjs from "@emailjs/browser"
import { useRef } from 'react';

import "./Join.css"
const Join = () => {
   
        const form = useRef();
      
        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs.sendForm('service_rorjrfp', 'template_l12gnvv', form.current, 'yNCYHhwFbP9zrGOlG')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        };
    return (
        <>
            <div className="join" id="join-us">
                <div className="left-j">
                    <div className="j-head">
                        <p>
                            <span className='strong'>ready to</span>
                            <span> level up</span>
                        </p>
                        <p>
                            <span>your body</span>
                            <span className='strong'>  with us ?</span>
                        </p>
                    </div> 
                </div>
                <form ref={form} className="right-j" onSubmit={sendEmail}>
                    <div className="email">
                        <input type="email" name='from_name' placeholder='Enter Your Email' />
                        <button className='btn'>Join Now</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Join
