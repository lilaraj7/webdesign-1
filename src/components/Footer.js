import React from 'react'
import './footer.css'
import { FaLinkedinIn,FaFacebookMessenger,FaTwitter,FaFacebook } from 'react-icons/fa';


const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='cont-main-footer'>
        <div className='footer-main'>
            <div className='footer-cont-box1'>
                <h1>AR Shakir</h1>
                <p>Finance helps companies<br></br> manage payments easily.</p>
                <div className='social'>
                <FaLinkedinIn/>
                <FaFacebookMessenger/>
                <FaTwitter/>
                <FaFacebook/>
                </div>
            </div>
            <div className='footer-cont-box2'>
                <h1>Company</h1>
                <p>About us</p>
                <p>Career</p>
                <p>Blogs</p>
                <p>Pricing</p>
            </div>
            <div className='footer-cont-box2'>
                <h1>Resources</h1>
                <p>Proposal Template</p>
                <p>Invoice Template</p>
                <p>Tuturioal</p>
                <p>How to write a contract</p>
            </div>
            <div className='footer-cont-box3'>
                <h1>Join our Newsletter</h1>
                <div className='footer-input'>
                    <input className='input-box' placeholder='your email address'></input>
                    <button className='subs-btn'>subscribe</button>
                    <p>*  Will send you weekly updates for your better<br></br>
finance management.</p>
                </div>
            </div>
        </div>

        </div>
        <div className='footer-copyright'>
        Copyright @ AR Shakir 2022. All Rights Reserved.
        </div>
        

    </div>
  )
}

export default Footer