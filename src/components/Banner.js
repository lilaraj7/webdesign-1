import React from 'react'
import './banner.css'
import zepline from '../Assets/zepline.png'
import morpheus from '../Assets/morpheus.png'
import protonet from '../Assets/protonet.png'
import monday from '../Assets/monday.png'
import segment from '../Assets/segment.png'
import user1 from '../Assets/user1.png'
import barcharts from '../Assets/barcharts.png'
import img1 from '../Assets/img1.png'


import { GoQuote} from 'react-icons/go';
import {RiFolder3Fill,RiCheckboxCircleFill} from 'react-icons/ri'




const Banner = () => {
  return (
    <div>
         <div className='banner-container'>
<p className='ban-title'>Over 32k+ software  businesses growing with AR Shakir.</p>
<div className='main-con'>
<div className='con1'>
    <img className='zimg' alt="" src={zepline}/>
    <p className='para'>Openzepline</p>
</div>
<div >
    <h5 className='oracle'>Oracle</h5>
</div>
<div className='con1'>
    <img className='zimg' alt=' 'src={morpheus}/>
    <p className='para'>Morpheus</p>
</div>
<div className='con1'>
    <p className='sams'>Samsung</p>
</div>
<div className='con1'>
<img className='zimg' alt=' 'src={monday}/>
<p className='para'>Monday.com</p>

</div>
<div className='con1'>
<img className='zimg' alt=' 'src={segment}/>
<p className='para'>Segment</p>
</div>
<div className='con1'>
<img className='zimg' alt=' 'src={protonet}/>
<p className='para'>Protonet</p>
</div>
</div>


    </div>
    <div className='quotes-container'>
    <div className='left-main-con'>
        <h1>Automated<br></br>
        Profile Tracking</h1>
        <p>Yet bed for travelling assistance indulegence upleasing</p>
        <p>Not thoughts all exercise blessing.</p>
    </div>
    <div className='right-main-con'>
        <div className='main-quote'>
<GoQuote className='quote-icon'/>

        </div>
            <p className='para'>Wise busy past both park when an ye no.
     Nay likely her length sooner thrown sex lively income. 
    The expense windows adapted sir. Wrong widen.</p>
    <p className='na'>-Mike Taylor, web desiginer</p>
    </div>
</div>
<div className='card-container'>
<div className='cards'>
    <div className='card-main'>
        <span className='num'>01</span>
        <span className='ri-icon'><RiFolder3Fill className='folder'/></span>
        <h1>Connect wallets & companies</h1>
        <p>Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of. </p>
    </div>
</div>
<div className='cards'>
    <div className='card-main'>
        <span className='num'>01</span>
        <span className='ri-icon'><RiFolder3Fill className='folder'/></span>
        <h1>Connect wallets & companies</h1>
        <p>Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of. </p>
    </div>
</div>
<div className='cards'>
    <div className='card-main'>
        <span className='num'>01</span>
        <span className='ri-icon'><RiFolder3Fill className='folder'/></span>
        <h1 className='card-heading'>Review <br></br> Transations</h1>
        <p>Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of. </p>
    </div>
</div>
</div>
<div className='user-container'>
<div className='user-left'>
<div className='user-con1'>
    <div className='img-user'>
    <img alt=' ' src={user1}/>
    </div>
    <div className='user-title'>
    <span className='u-money'>+ $45000</span>
    <p>Recived from Machile v</p>
    </div>
  
   
</div>
<div className='user-con2'>
    <div className='img-user'>
    <img alt=' ' src={user1}/>
    </div>
    <div className='user-title'>
    <span className='u-money'>+ $45000</span>
    <p>Recived from Machile v</p>
    </div>
  
   
</div>
<div className='user-con3'>
    <div className='img-user'>
    <img alt=' ' src={user1}/>
    </div>
    <div className='user-title'>
    <span className='u-money'>+ $45000</span>
    <p>Recived from Machile v</p>
    </div>
  
   
</div>
<div className='user-con4'>
    <div className='img-user'>
    <img alt=' ' src={user1}/>
    </div>
    <div className='user-title'>
    <span className='u-money'>+ $45000</span>
    <p>Recived from Machile v</p>
    </div>
  
   
</div>
</div>
<div className='user-right'>
    <div className='ri-cont'>
    <span><h5 className='blue'>Why to choose us</h5></span>
    <h1>Track your payments
on the go with the
best way possible</h1>
<p>Indulgence way everything joy alteration boisterous the attachment.
     Party we years to order allow asked of. </p>
    </div>
    <div className='ricircle'> 
        <span className='ri'><RiCheckboxCircleFill className='check-icon'/><p>Get Overview at a glance</p></span>
        <span className='ri'><RiCheckboxCircleFill className='check-icon'/><p>Deoposit funds easily, securlity</p></span>
       <span className='ri'><RiCheckboxCircleFill className='check-icon'/><p>Get Live Support</p></span> 
    </div>
   

</div>
</div>
<div className='m-con'>
    <div className='m-con-left'>
    <div className='ri-conts'>
    <span><h5 className='blue'>Why to choose us</h5></span>
    <h1>Save money with
proper transaction</h1>
<p>Indulgence way everything joy alteration boisterous the attachment.
     Party we years to order allow asked of. </p>
    </div>
    <div className='right-main-con'>
        <div className='main-quote'>
<GoQuote className='quote-icon'/>

        </div>
            <p className='para'>Wise busy past both park when an ye no.
     Nay likely her length sooner thrown sex lively income. 
    The expense windows adapted sir. Wrong widen.</p>
    <p className='na'>-Mike Taylor, web desiginer</p>
    </div>
    </div>
    <div className='m-con-left'>
        <div className='m-cont-box'>
        <img className='credit' alt=" " src={img1} />

            <div className='m-cont-box-aside'>
            <img  alt=" " src={barcharts} />

            </div>
        </div>

    </div>

</div>

    </div>
   

  )
}

export default Banner;