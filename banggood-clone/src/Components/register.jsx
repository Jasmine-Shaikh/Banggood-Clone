import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { v4 as uuid } from "uuid";

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

const RegisterationHeader = styled.header`
 
   display:flex;
   align-items: left;
   padding: 20px; 
`


const RegisterationHeaderHeading = styled.div`
padding: 0 16%;
`

const RewardDetail = styled.div`
    
    padding: 7px 14px;
    line-height: 17px;
    border-radius: 4px;
    background: #fff5e6;
    font-size: 12px;
    color: #ff6e26;
    display: flex;
    width:100%;
    align-items: center;
`
const GiftImage = styled.img`
    height: 15px;
    margin: 0px 10px;
`
const OrangeSmallFont = styled.p`
margin: 0px;
font-size: 12px;
color: #f25f1f;
text-align: center;
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
const RegisterationForm = styled.div`
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

const CreateAccountButton = styled.button`

background-color: #f25f1f;
background: linear-gradient(270deg,#ff4733,#ff6e26);
border: 1px solid #ebebeb;
width: 100%;
padding: 10px ;
border-radius: 4px;
line-height: 20px;
box-sizing: border-box;
color: white;
margin-top: 10px;
margin-bottom: 10px;
font-size: 16px;
font-weight: bold;
`

const SignUpTitleContainer = styled.div`
    
display: flex;
justify-content: space-evenly;
width: 100%;
margin-bottom: 15px;

`
const SignUpTitle = styled.a`
font-weight: 600;
padding: 15px 30px;
font-size: 18px;
margin: 0px;
`
const RegisterTitle = styled.a`
border-bottom: 2px solid #ff6e26;
color: #ff6e26;
font-weight: 600;
font-size: 18px;
padding: 15px 30px;
margin: 0px;
`

const DivFlexRow = styled.div`
    
display: flex;
justify-content: flex-start;
margin-bottom: 10px;
width: 100%;

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

export default function RegistrationPage(){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigateTo = useNavigate();
   
    const handleRegisteration = () => {
            const payload = {
              id: uuid(),
              email: email,
              password: password,
            };
            addUserToDb(payload).then(()=>{
            alert("User Successfully Registered!")
            setEmail("");
            setPassword("");
            navigateTo("/signup")

            })
    }

    const addUserToDb=async(payload)=>{
        try {
            await fetch(`http://localhost:8080/registeredUsers`,{
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(payload)
            });
          } catch (error) {
            console.log(error);
          }
    }

    return (

      <>
      <RegisterationHeader>
            <RegisterationHeaderHeading>
            <Link to="/">
                <Logo   src="https://i.pinimg.com/originals/ee/40/f3/ee40f3c6616eb63a16ae4b010def1616.png"/></Link>
                <GreySmallFont>Global leading online shop</GreySmallFont>
            </RegisterationHeaderHeading>
      </RegisterationHeader>
      <DivContainerflex>

        <RegisterationForm>

            <SignUpTitleContainer>
                <SignUpTitle><NavLink to="/signup">SIGN IN</NavLink></SignUpTitle>
                
                <RegisterTitle>REGISTER</RegisterTitle>
            </SignUpTitleContainer>
            <FormInput>
            <RewardDetail>
        <GiftImage src="https://icones.pro/wp-content/uploads/2022/01/icone-cadeau-avec-noeud-orange.png"/><OrangeSmallFont>FREE gifts and $4 Allowance are waiting for you</OrangeSmallFont>
      </RewardDetail>
                <InputBar type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <InputBar type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <DivFlexRow><input type="checkbox"/><GreySmallFont>I agree to Banggood.com.Terms and Conditions. </GreySmallFont></DivFlexRow>
                <DivFlexRow><input type="checkbox"/><GreySmallFont>I agree to Banggood.com.Privacy Policy. </GreySmallFont></DivFlexRow>
                <CreateAccountButton onClick={handleRegisteration}>Create Your Account</CreateAccountButton>
            </FormInput>
      

            <div>
                <QuickAccess>Quick Access With</QuickAccess>
                <SocialMediaContainer>

                    <SocialLogoAnchor><SocialLogo src="https://i.pinimg.com/originals/1e/c1/1a/1ec11a869384bc5e59625bac39b6a099.png" alt="Apple Id" /></SocialLogoAnchor>
                    <SocialLogoAnchor><SocialLogo src="https://www.teahub.io/photos/full/11-115962_facebook-logo-png-transparent-background-facebook-png.png" alt="Facebook" /></SocialLogoAnchor>
                    <SocialLogoAnchor><SocialLogo src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" alt="Google" /></SocialLogoAnchor>
                    <SocialLogoAnchor><SocialLogo src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png" alt="Twitter" /></SocialLogoAnchor>
                </SocialMediaContainer>
            </div>

        </RegisterationForm>

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

