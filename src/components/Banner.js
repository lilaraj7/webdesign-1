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
import girl from '../Assets/girl.png'
import arcitect from '../Assets/arcitect.png'
import comment  from '../Assets/comment.png'


import { GoQuote} from 'react-icons/go';
import {RiFolder3Fill,RiCheckboxCircleFill} from 'react-icons/ri'
import {FaUser,FaStar,FaArrowRight} from 'react-icons/fa'




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
<div className='new-container'>
    <div className='feature'>
    <h1>Features that blows mind</h1>  
<p>We so opinion friends me message as delight.<br></br> Whole front do of plate heard 
    oh ought.<br></br> His defective nor convinced residence own.</p>
    </div>
  
    <div className='new-card-con'>
<div className='new-card-con1'>
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

</div>
<div className='new-card-con2'>
    <div className='new-card'>
    Merits behind on afraid or warmly
    </div>
    <div className='new-card'>
    Merits behind on afraid or warmly
    </div>
    
</div>
    </div>
</div>
<div className='testo-section'>
    <div className='testo-title'>
            <h1>Testomonials</h1>
        <p>We so opinion friends me message as delight. 
            Whole front do of plate heard oh<br></br> ought.
             His defective nor convinced residence own.</p>
    </div>
    <div className='testo-boxes'>
        <div className='testo-box1'>
            <div className='testo-heading'>
            <span className='go-quote'>        <GoQuote className='testo-icon'/>
</span>
                <p>Wise busy past both park when an ye no.
                     Nay likely her length sooner thrown sex lively income. 
                    The expense windows . Blessing welcomed ladyship.</p>
            </div>
            <div className='testo-cont'>
            <img className='testo-img' alt=' 'src={girl}/>

            </div>
        </div>
        <div className='testo-box1'>

            <div className='testo-heading'>
            <span className='go-quote'>        <GoQuote className='testo-icon'/>
</span>
                <p>Wise busy past both park when an ye no.
                     Nay likely her length sooner thrown sex lively income. 
                    The expense windows . Blessing welcomed ladyship.</p>
            </div>
            <div className='testo-cont'>
            <img className='testo-img' alt=' 'src={girl}/>

            </div>
        </div>
    </div>
</div>
<div className='blue-banner'>
    <div className='blue-banner-title'>
        <p>We speak with
our powerfull
statistics</p>
    </div>
    <div className='blue-box1'>
        <h1>1M+</h1>
        <h3><span><FaUser/></span>Active users</h3>
    </div>
    <div className='blue-box1'>
        <h1>1M+</h1>
        <h3><span><FaStar/></span>5-Stars Reviews</h3>
    </div>
    <div className='blue-box1'>
        <h1>$450m</h1>
        <h3><span><FaStar/></span>Transations</h3>
    </div>
</div>
<div className='Blog-container'>
    <h1>Recent Blogs</h1>
    <div className='blog-box1'>
        <div className='blog-cont1'>
            <p>BEST PRACTICE</p>
            <h1>In design active temper be uneasy.<br></br>
                 Thirty for remove plenty regard.</h1>
            <p>read more <FaArrowRight/></p>
        </div>
        <div>
        <img className='blog-img' alt=' ' src={arcitect}/>

        </div>
    </div>
    <div className='blog-box2'>
        <div className='blog-box2-container'>
        <div className='blog-cont2'>
        <p>BEST PRACTICE</p>
            <h4>In design active temper be uneasy.
                 Thirty for remove plenty regard.</h4>
        </div>
        <div className='blog-img'>
        <img className='blog-img-row' alt=' ' src={arcitect}/>

        </div>
        </div>
        <div className='blog-box2-container'>
        <div className='blog-cont2'>
        <p>BEST PRACTICE</p>
            <h4>In design active temper be uneasy.
                 Thirty for remove plenty regard.</h4>
        </div>
        <div>
        <img className='blog-img-row' alt=' ' src={arcitect}/>

        </div>
        </div>
        <div className='blog-box2-container'>
        <div className='blog-cont2'>
        <p>BEST PRACTICE</p>
            <h4>In design active temper be uneasy.
                 Thirty for remove plenty regard.</h4>
        </div>
        <div >
        <img className='blog-img-row' alt=' ' src={arcitect}/>

        </div>
        </div>
     
    </div>

</div>
<div className='qna-section'>
    <h1>Frequently <br></br>
    Asked Question</h1>
    <div className='qna-container'>
    <div className='qna-row1'>
        <div className='qna1'>
            <h3>The expense windows adapted sir. Wrong widen drawn.</h3>
            <p>Offending belonging promotion provision an be oh consulted ourselves it. 
                Blessing welcomed ladyship she met humoured sir breeding her. </p>
        </div>
        <div className='qna2'>
            <h4>Six curiosity day assurance bed necessary?</h4>
        </div>
        <div className='qna2'>
            <h4>Six curiosity day assurance bed necessary?</h4>
        </div>
        <div className='qna2'>
            <h4>Six curiosity day assurance bed necessary?</h4>
        </div>
        <div className='qna2'>
            <h4>Six curiosity day assurance bed necessary?</h4>
        </div>
    </div>
    <div className='qna-row2'>
    <img alt=' ' src={comment}/>
    <h3>Do you have more questions?</h3>
    <p>End-to-end payments and financial management in a single solution.
         Meet the right platform to help realize.</p>
         <div className='qna-btn'>
            Shoot a Direct Mail
         </div>

    </div>
    </div>
   
</div>

<div className='discover'>
    <h1>Discover a better way to<br></br> manage spendings</h1>
    <div className='discover-btn'>
        Get start Now
    </div>
</div>


    </div>
   

  )
}

export default Banner;