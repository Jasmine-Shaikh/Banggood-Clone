import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginContext } from "./registerContext"; 

const Logo = styled.img`
width: 172px;
`

const SocialMediaContainer = styled.div`
    
display: flex;
width: 300px;
align-items: center;
justify-content: space-evenly;

`
const SocialLogo = styled.img`
height: 48px;
border-radius: 50%;
`

const SocialLogoAnchor = styled.a`
border-radius: 50%;
`

const SignUpHeader = styled.header`
 
   display:flex;
   align-items: left;
   padding: 20px; 
`


const SignUpHeaderHeading = styled.div`
padding: 0 16%;
`

const DivContainerflex = styled.div`
background-color: #F5F5F5;
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;

`
const GreySmallFont = styled.p`
margin: 0px;
font-size: 14px;
color: #999;
text-align: center;
`
const GreyMediumFont = styled.p`
    
margin: 30px;
font-size: 16px;
color: #5a5a5a;
text-align: center;
    
`
const SignUpForm = styled.div`
background-color: #FFFFFF;
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 48px;
margin-bottom: 135px;
padding: 24px 32px 32px;
width: 330px;
background-color: #fff;
border-radius: 4px;
`


const SignUpAndLogin = styled.footer`

display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const FormInput = styled.div`
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
`
const InputBar = styled.input`

border: 1px solid #ebebeb;
width: 100%;
padding: 10px 32px 10px 10px;
border-radius: 4px;
line-height: 20px;
box-sizing: border-box;
margin: 15px;
`

const SignUpButton = styled.button`

background-color: #f25f1f;
background: linear-gradient(270deg,#ff4733,#ff6e26);
border: 1px solid #ebebeb;
width: 100%;
padding: 10px ;
border-radius: 4px;
line-height: 20px;
box-sizing: border-box;
color: white;
margin-bottom: 10px;
font-size: 16px;
font-weight: bold;
`

const DivFlexRow = styled.div`
    
display: flex;
justify-content: space-evenly;
width: 100%;
margin-bottom: 15px;

`
const SignUpTitle = styled.span`
border-bottom: 2px solid #ff6e26;
color: #ff6e26;
font-weight: 600;
padding: 15px 30px;
font-size: 18px;
margin: 0px;
`
const RegisterTitle = styled.span`
font-weight: 600;
font-size: 18px;
padding: 15px 30px;
margin: 0px;
`

const QuickAccess = styled.h3`
color: #999;
font-weight: 600;
text-align: center;
`

const NavLink = styled(Link)`
    color: black;
    text-decoration: none;

`
export default function SignUpPage(){
    
    
    const {register} = React.useContext(LoginContext);
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();
    const handleSignup = () => {

       if(email === "" || password === ""){
         alert("Please fill all details!")
         return
       }
        let payload = {
            email: email,
            password: password,
          };
          register(payload).then((res)=>{
            if(res){
            //   alert("Login Successful!")
                navigate("/");
            }
            else{
              alert("Incorrect email or Password!")
            }
          });
    }
    return (

      <>
      <SignUpHeader>
            <SignUpHeaderHeading>
            <Link to="/">
                <Logo   src="https://i.pinimg.com/originals/ee/40/f3/ee40f3c6616eb63a16ae4b010def1616.png"/>
                </Link>
                <GreySmallFont>Global leading online shop</GreySmallFont>
            </SignUpHeaderHeading>
      </SignUpHeader>
      <DivContainerflex>

        <SignUpForm>

            <DivFlexRow>
                <SignUpTitle>SIGN IN</SignUpTitle>
                <RegisterTitle><NavLink to="/register">REGISTER</NavLink></RegisterTitle>
            </DivFlexRow>
            <FormInput>
                <InputBar type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <InputBar type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <SignUpButton onClick={handleSignup}>Sign In</SignUpButton>
            </FormInput>
            <GreySmallFont>Forgot password?</GreySmallFont>

            <div>
                <QuickAccess>Quick Access With</QuickAccess>
                <SocialMediaContainer>

                    <SocialLogoAnchor><SocialLogo src="https://i.pinimg.com/originals/1e/c1/1a/1ec11a869384bc5e59625bac39b6a099.png" alt="Apple Id" /></SocialLogoAnchor>
                    <SocialLogoAnchor><SocialLogo src="https://www.teahub.io/photos/full/11-115962_facebook-logo-png-transparent-background-facebook-png.png" alt="Facebook" /></SocialLogoAnchor>
                    <SocialLogoAnchor><SocialLogo src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" alt="Google" /></SocialLogoAnchor>
                    <SocialLogoAnchor><SocialLogo src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png" alt="Twitter" /></SocialLogoAnchor>
                </SocialMediaContainer>
            </div>

        </SignUpForm>

      </DivContainerflex>
      <SignUpAndLogin>
        <div>
            <div><GreyMediumFont>About Banggood.com  |  Terms And Conditions  |  Privacy Policy  |  Help Center</GreyMediumFont></div>
            <div><GreySmallFont>Copyright © 2006-2022 Banggood All Rights Reserved.</GreySmallFont></div>
        </div>
      </SignUpAndLogin>
      </>

    )
}

