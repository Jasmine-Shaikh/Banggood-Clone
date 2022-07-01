import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { v4 as uuid } from "uuid";

const Logo = styled.img`
width: 172px;
`





const RegisterationHeader = styled.header`
 
   display:flex;
   align-items: left;
   padding: 20px; 
`


const RegisterationHeaderHeading = styled.div`
padding: 0 16%;
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



const SignUpAndLogin = styled.footer`

display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
`









const Button = styled.button`
    font-size: 20px;
    border: none;
    background-color: #fed250;
    padding: 15px;
    cursor: pointer;
    border-radius: 15px;
`;

export default function ThanksPage() {
    const [load, isLoad] = React.useState(true);
    const [cart, setCart] = React.useState([]);

    setTimeout(() => {
        isLoad(false);
    }, 5000)

    fetch("https://fake-server-app-by-atul.herokuapp.com/cart")
        .then(res => res.json())
        .then(data => {
            setCart(data);
            deleteCart();
        })
        .catch((error) => console.log(error))

    const deleteCart = () => {
        cart.forEach((ele) => {
            handleDelete(ele.id);
        });
    };

    const handleDelete = (id) => {
        fetch(`https://fake-server-app-by-atul.herokuapp.com/cart/${id}`, {
            method: "DELETE",
            headers: {
                "content-type": "appliction/json",
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
            .then(() => {

            })
            .catch((error) => console.log(error));
    };

    return (

        <>
            <RegisterationHeader>
                <RegisterationHeaderHeading>
                    <Link to="/">
                        <Logo src="https://i.pinimg.com/originals/ee/40/f3/ee40f3c6616eb63a16ae4b010def1616.png" /></Link>
                    <GreySmallFont>Global leading online shop</GreySmallFont>
                </RegisterationHeaderHeading>
            </RegisterationHeader>
            {load === true ?
                <div style={{ width: "30%", margin: "auto", textAlign: "center" }}>
                    <img style={{ width: "350px" }} src="https://cdn.dribbble.com/users/1787505/screenshots/7300251/media/a351d9e0236c03a539181b95faced9e0.gif" alt="" />
                    <h1 style={{ color: "red" }}>Payment is under process</h1>
                    <h2>Please do not refresh the window</h2>
                </div> :

                <div style={{ width: "30%", margin: "auto", textAlign: "center" }}>
                    <img src="https://i.pinimg.com/originals/0d/e4/1a/0de41a3c5953fba1755ebd416ec109dd.gif" alt="" />
                    <h1 style={{ color: "green" }}>Payment Success</h1>
                    <h2>Your order number is #897890</h2>
                    <Link to="/"><Button>Shop More</Button></Link>
                </div>
            }
            <SignUpAndLogin>
                <div>
                    <div><GreyMediumFont>About Banggood.com  |  Terms And Conditions  |  Privacy Policy  |  Help Center</GreyMediumFont></div>
                    <div><GreySmallFont>Copyright © 2006-2022 Banggood All Rights Reserved.</GreySmallFont></div>
                </div>
            </SignUpAndLogin>
        </>

    )
}

