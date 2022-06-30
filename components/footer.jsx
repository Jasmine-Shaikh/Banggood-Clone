import React from 'react'
import {DiAndroid} from 'react-icons/di';
import {MdQrCodeScanner} from 'react-icons/md';
import {BsPinterest,BsApple,BsTelegram,BsDiscord} from 'react-icons/bs';
import styled from 'styled-components';
import {AiFillFacebook,AiFillTwitterSquare,AiFillInstagram,AiFillYoutube,AiOutlineWhatsApp,AiFillMediumCircle} from 'react-icons/ai';
import {FaTiktok,FaBlogger,FaWarehouse,FaMedal} from 'react-icons/fa';
import {TbTruckDelivery} from 'react-icons/tb'
import {RiSecurePaymentLine} from 'react-icons/ri'
import {BiSupport} from 'react-icons/bi'
import footer from '../footer.png';


const FooterDiv=styled.div`
   display:flex;
   background-color:whitesmoke;
   margin-top:20px;
`;
const FooterPart=styled.div`
   flex:1;
   text-align:start;
   padding:30px;
`;
const Lists=styled.ul`
list-style-type:none;
`;

const Li=styled.li`
font-size:15px;
color:grey;
margin-bottom:8px;
`;
const Part=styled.div`
text-align:center;
 flex:1;
 padding:20px;
`;
const Main=styled.div`
background-color:smokewhite;
`;
const Footer = () => {
  return (
      <Main>
      <FooterDiv style={{width:"95%",margin:"auto"}}>
          <Part>
              <FaMedal style={{fontSize:"35px",color:"grey"}}/><br/>
             <h5 style={{color: "gray"}}>Quality and Saving</h5> 
            <p style={{fontSize:"15px",color:"grey"}}>
                Comprehensive quality control and affordable prices
            </p> 
          </Part>
          <Part>
              <FaWarehouse style={{fontSize:"35px",color:"grey"}}/>
             <h5 style={{color: "gray"}}> Global Warehouse</h5>
             <p style={{fontSize:"15px",color:"grey"}}>  37 overseas warehouses</p>
        
          </Part>

          <Part>
            <TbTruckDelivery style={{fontSize:"35px",color:"grey"}}/>
            <h5 style={{color: "gray"}}> Fast and convenient logistics</h5>
            <p style={{fontSize:"15px",color:"grey"}}>Fast and convenient door to door delivery</p>
             

          </Part>
          <Part>
              <RiSecurePaymentLine style={{fontSize:"35px",color:"grey"}}/>
              <h5 style={{color: "gray"}}>Payment Security</h5>
              <p style={{fontSize:"15px",color:"grey"}}>More than 40 different secure payment methods</p>
              

          </Part>

          <Part>
              <BiSupport style={{fontSize:"35px",color:"grey"}}/>
              <h5 style={{color: "gray"}}>Professional service and product warranty</h5>
              <p style={{fontSize:"15px",color:"grey"}}> 24/7 Customer Service</p>        
          </Part>


      </FooterDiv>


    <FooterDiv>

       <FooterPart>
           <Lists>
               <h4 style={{color: "gray"}}>Get to Know Us</h4>
               <Li style={{fontSize: "13px" , cursor:"pointer"}}>About Banggood.in</Li>
               <Li style={{fontSize: "13px" , cursor:"pointer"}}>Guarantees & Return Policy</Li>
               <Li style={{fontSize: "13px" , cursor:"pointer"}}>Contact Us</Li>
               <Li style={{fontSize: "13px" , cursor:"pointer"}}>Help Center</Li>
               <Li style={{fontSize: "13px" , cursor:"pointer"}}>Site Map</Li>
               <Li style={{fontSize: "13px" , cursor:"pointer"}}>Intellectual Property Claims</Li>
           </Lists>
           <div style={{margin:"30px"}}>
             <h4 style={{color: "gray"}}>Subscribe</h4>
            <p style={{fontSize:"14px",color:"grey"}}>By subscribing you agree to receive email from us.<br/>
              Please read our <span style={{textDecoration:"underline"}}> Privacy Policy</span></p>
           </div>
          

       </FooterPart>

       <FooterPart>
           <Lists>
               <h4 style={{color: "gray"}}>Payment & Shipping</h4>
               <Li style={{fontSize: "13px" , cursor:"pointer"}}>Payment Methods</Li>
               <Li style={{fontSize: "13px" , cursor:"pointer"}}>BGpay Instruction</Li>
               <Li style={{fontSize: "13px" , cursor:"pointer"}}>Shipping Guide</Li>
               <Li style={{fontSize: "13px" , cursor:"pointer"}}>Locations We Ship To</Li>
               <Li style={{fontSize: "13px" , cursor:"pointer"}}>Estimated Delivery Time</Li>
           </Lists>
           <Lists>
               <h4 style={{color: "gray"}}>Partnership Programs</h4>
               <Li style={{fontSize: "13px" , cursor:"pointer"}}>Drop shipping</Li>
               <Li style={{fontSize: "13px" , cursor:"pointer"}}>Review Club</Li>
               <Li style={{fontSize: "13px" , cursor:"pointer"}}>Affiliate Program</Li>
               <Li style={{fontSize: "13px" , cursor:"pointer"}}>Wholesale Program</Li>
               <Li style={{fontSize: "13px" , cursor:"pointer"}}>Fashion Blogger Program</Li>
           </Lists>
       </FooterPart>
    
       <FooterPart>
           <div>
                <h4 style={{margin:"20px", color: "gray"}}>Download App</h4>
           <div>
               <DiAndroid style={{fontSize:"35px",margin:"20px",color:"grey", cursor:"pointer"}}/>
               <BsApple style={{fontSize:"35px",margin:"20px",color:"grey", cursor:"pointer"}}/>
               <MdQrCodeScanner style={{fontSize:"35px",margin:"20px",color:"grey" , cursor:"pointer"}}/>
            </div>
           </div>

           <div>
               <h4 style={{margin:"20px",  color: "gray"}}>Follow Us</h4>
               <div>
               <AiFillFacebook style={{fontSize:"25px",margin:"10px",color:"grey", cursor:"pointer"}}/>
               <AiFillTwitterSquare style={{fontSize:"25px",margin:"10px",color:"grey", cursor:"pointer"}}/>
               <AiFillInstagram style={{fontSize:"25px",margin:"10px",color:"grey", cursor:"pointer"}}/>
               <AiFillYoutube style={{fontSize:"25px",margin:"10px",color:"grey", cursor:"pointer"}}/>
               <BsPinterest style={{fontSize:"25px",margin:"10px",color:"grey", cursor:"pointer"}}/>
               <FaTiktok style={{fontSize:"25px",margin:"10px",color:"grey", cursor:"pointer"}}/>
               </div>
               <div><AiFillMediumCircle style={{fontSize:"25px",margin:"10px",color:"grey", cursor:"pointer"}}/>
               <FaBlogger style={{fontSize:"25px",margin:"10px",color:"grey", cursor:"pointer"}}/>
               <BsDiscord style={{fontSize:"25px",margin:"10px",color:"grey", cursor:"pointer"}}/>
               <BsTelegram style={{fontSize:"25px",margin:"10px",color:"grey", cursor:"pointer"}}/>
               <AiOutlineWhatsApp style={{fontSize:"25px",margin:"10px",color:"grey", cursor:"pointer"}}/>
               </div>
           </div>
           <div>
           <p style={{fontSize:"12px",color:"grey"}}>© 2006-2022 BANGGOOD</p>
           <p style={{fontSize:"12px",color:"grey"}}>TERMS  PRIVACY  SPECIALIZED AFFAIRS</p>
           </div>

       </FooterPart>
    </FooterDiv>

    <div style={{width:"100%",margin:"auto"}}>
        <img  style={{width:"100%"}} src={footer} alt="" />
    </div>
    </Main>
  )
}


export default Footer;
















