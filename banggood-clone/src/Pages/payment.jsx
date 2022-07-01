import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Divider } from "@mui/material";
import { orange } from "@mui/material/colors";
import TextField from "@mui/material/TextField";


const OrangeTextField = styled(TextField)`
  & label.Mui-focused {
    color: orange;
    
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: orange;
    }
  }
`


const Logo = styled.img`
width: 172px;
`

const PaymentHeader = styled.header`
   display:flex;
   align-items: left;
   padding: 20px; 
`

const PaymentHeaderHeading = styled.div`
padding: 0 8%;
display: flex;
align-items: center;
`

const DivContainerflex = styled.div`
background-color: #F5F5F5;
padding: 15px 70px;
display:flex;
align-items: center;
`
const GreySmallFont = styled.p`
margin: 0px;
font-size: 12px;
color: #999;
text-align: center;
background-color: white;
`

const PaymentFooter = styled.footer`
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 30px;
font-size: 20px;
`
const DivContainerFlexRow = styled.div`
display:flex;
align-items: center;
justify-content: center;
background-color: white;
`
const DivFlex = styled.div`
display:flex;
width: 100%;
justify-content: space-between;
background-color: white;
`
const Img = styled.img` 
height: 40px;
padding: 30px 20px;
`
const ImageLabel = styled.p`
font-weight: bold;
font-size: 14px;
margin: 0px;
`

const GreySmallAdd = styled.p`
margin: 20px 5px 30px;
font-size: 14px;
color: #999;
`
const ImgRating = styled.img`
    
height: 30px;
margin: -5px;

`
const PayNowButton = styled.button`

background-color: #f25f1f;
background: linear-gradient(270deg,#ff4733,#ff6e26);
border: 1px solid #ebebeb;
width: 100%;
padding: 10px ;
border-radius: 4px;
line-height: 20px;
box-sizing: border-box;
color: white;
margin-top: 7px;
margin-bottom: -10px;
font-size: 16px;
font-weight: bold;
`

const IdealPay = (
  <DivContainerFlexRow >

    <Img src="https://d2csxpduxe849s.cloudfront.net/media/F44207E3-1DDE-4798-B0FCC94F6227FCB7/85D1D91C-D288-44AB-B652CC295928725E/webimage-A8E2585B-48C3-44C9-BFF062539BA93181.jpg" alt="ideal_pay" />
    <ImageLabel>Pay with iDeal</ImageLabel>

  </DivContainerFlexRow>

)

const PayPal = (
  <DivContainerFlexRow >

    <Img src="https://www.chrisvanburen.com/wp-content/uploads/2016/12/paypal-logo.png" alt="paypal" />
    <ImageLabel>Paypal</ImageLabel>

  </DivContainerFlexRow>

)

const CreditDebit = (

  <DivContainerFlexRow >
    <Img src="https://jwolfflaw.com/wp-content/uploads/2021/10/136-1367249_visa-mastercard-discover-png-visa-mastercard-american-express.jpg" alt="credit" />
    <ImageLabel >Credit Or Debit Card</ImageLabel>
  </DivContainerFlexRow>

)
const GPay = (
  <DivContainerFlexRow >

    <Img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Google_Pay_Acceptance_Mark_%282018-2020%29.svg/1280px-Google_Pay_Acceptance_Mark_%282018-2020%29.svg.png" alt="gpay" />
    <ImageLabel>Google Pay</ImageLabel>

  </DivContainerFlexRow>

)

const Klarna = (
  <DivContainerFlexRow >

    <Img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Klarna_Payment_Badge.svg/1280px-Klarna_Payment_Badge.svg.png" alt="klarna" />
    <ImageLabel>Klarna</ImageLabel>

  </DivContainerFlexRow>

)


export default function PaymentPage() {

  const [value, setValue] = React.useState('ideal');
  const [creditDetails, showcreditDetails] = React.useState(false)
  const [cvvcode, setCvv] = React.useState("")
  const [expiry, setExpiry] = React.useState("")
  const [carddnumber, setCardNumber] = React.useState("");

  const handleChange = (e) => {
    setValue(e.target.value)

    if (value === "credit") {
      showcreditDetails(!creditDetails)
    }

  }


  return (

    <>
      <PaymentHeader>
        <PaymentHeaderHeading>
          <Link to="/">
            <Logo src="https://i.pinimg.com/originals/ee/40/f3/ee40f3c6616eb63a16ae4b010def1616.png" />

          </Link>
          <ImgRating style={{ margin: 10 }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzjy4CIHWkYG2gh-L6K3wMqzpK8vH7cbWUKA&usqp=CAU" />

          <GreySmallAdd >SECURE PAYMENT</GreySmallAdd>



        </PaymentHeaderHeading>
      </PaymentHeader>

      <DivContainerflex>
        <DivFlex>

          <Box sx={{ minWidth: 700 }}>
            <Card variant="outlined" sx={{ minWidth: 350 }}>
              <React.Fragment>
                <CardContent>
                  <Typography sx={{ fontSize: 20 , backgroundColor : "white" }} fontWeight="bold" gutterBottom>
                    Payment Methods
                  </Typography>
                  <Divider />
                  <FormControl>
                    <FormLabel sx={{ fontSize: 12 }} id="demo-controlled-radio-buttons-group">Please choose one of the below payment options:</FormLabel>
                    <RadioGroup
                      aria-labelledby="demo-controlled-radio-buttons-group"
                      name="controlled-radio-buttons-group"
                      value={value}

                    >

                      <FormControlLabel value="ideal" control={<Radio sx={{
                        color: orange[800],
                        '&.Mui-checked': {
                          color: orange[600],
                        }
                      }} />} label={IdealPay} onClick={handleChange} />
                      <FormControlLabel value="paypal" control={<Radio sx={{
                        color: orange[800],
                        '&.Mui-checked': {
                          color: orange[600],
                        }
                      }} />} label={PayPal} onClick={handleChange} />
                      <FormControlLabel value="credit" control={<Radio sx={{
                        color: orange[800],
                        '&.Mui-checked': {
                          color: orange[600],
                        }
                      }} />} label={CreditDebit} onClick={handleChange} />
                      {
                        creditDetails ? <>
                          <div style={{ marginLeft: 50 }}>
                            <OrangeTextField
                              id="standard-helperText"
                              label="Card Number"
                              type="numeric"
                              inputProps={{ maxLength: 16 }}
                              value={carddnumber}
                              onChange={(e) => (setCardNumber(e.target.value))}
                              error={carddnumber.length > 0 && carddnumber.length < 16}
                              helperText={carddnumber.length === 0 ? "Please enter your 16 digit card number" : carddnumber.length > 0 && carddnumber.length < 16 ? 'Invalid card number' : ""}
                              variant="standard"
                              color="warning"
                              sx={{ width: 260 }}
                            />
                          </div>
                          <div style={{ marginLeft: 50, marginTop: 10 }}>
                            <OrangeTextField
                              id="standard-input"
                              label="Expiry Date"
                              type="numeric"
                              inputProps={{ maxLength: 5 }}
                              variant="standard"
                              value={expiry}
                              onChange={(e) => (setExpiry(e.target.value))}
                              error={expiry.length > 0 && expiry.length < 5}
                              helperText={expiry.length === 0 ? "MMYY" : expiry.length > 0 && expiry.length < 5 ? 'Invalid Expiry date' : ""}
                              color="warning"
                              sx={{ width: 150, marginRight: 8, }}
                            />
                            <OrangeTextField
                              id="standard-error-helper-text"
                              label="CVV"
                              inputProps={{ inputMode: "numeric", maxLength: 3 }}
                              type="password"
                              value={cvvcode}
                              onChange={(e) => (setCvv(e.target.value))}
                              error={cvvcode.length > 0 && cvvcode.length < 3}
                              helperText={cvvcode.length === 0 ? "Please enter 3 digit cvv" : cvvcode.length > 0 && cvvcode.length < 3 ? 'Incorrect security code' : ""}
                              variant="standard"
                              color="warning"
                            />
                          </div>

                        </> : null
                      }
                      <FormControlLabel value="gpay" control={<Radio sx={{
                        color: orange[800],
                        '&.Mui-checked': {
                          color: orange[600],
                        }
                      }} />} label={GPay} onClick={handleChange} />
                      <FormControlLabel value="klarna" control={<Radio sx={{
                        color: orange[800],
                        '&.Mui-checked': {
                          color: orange[600],
                        }
                      }} />} label={Klarna} onClick={handleChange} />
                    </RadioGroup>
                  </FormControl>
                </CardContent>
              </React.Fragment></Card>
          </Box>

          <div>
            <Box sx={{ minWidth: 380 }}>
              <Card variant="outlined" sx={{ minWidth: 300 }}>
                <React.Fragment>
                  <CardContent>
                    <Typography sx={{ fontSize: 20 }} fontWeight="bold" gutterBottom>
                      Your bill
                    </Typography>
                    <Divider />
                    <GreySmallAdd>
                      <i>Shipping Address:</i><br />
                      XYZ, 999999999<br />
                      5th Main, Sector 5<br />
                      Bengaluru,India.
                    </GreySmallAdd>
                    <DivFlex>
                      <ImageLabel>Total:</ImageLabel><ImageLabel> ₹ {localStorage.getItem("totalCartAmount")}</ImageLabel></DivFlex>
                    <Divider />
                    <Link to="/Success"><PayNowButton>PAY NOW</PayNowButton></Link>

                  </CardContent>
                </React.Fragment></Card>
            </Box>

            <Box sx={{ minWidth: 275 }}>
              <Card variant="outlined" sx={{ minWidth: 300 }}>
                <React.Fragment>
                  <CardContent>
                    <DivFlex>
                      <ImgRating src="https://i.affi.io/merchants/norton-de.png" alt="norton_reseller_rating" />
                      <ImgRating src="https://www.nicepng.com/png/full/305-3052256_we-only-collect-3rd-party-verified-reviews-and.png" />
                    </DivFlex>
                  </CardContent>
                </React.Fragment></Card>
            </Box>
          </div>
        </DivFlex>
      </DivContainerflex>

      <PaymentFooter>
        <div>
          <div><GreySmallFont>Copyright © 2006-2021 Banggood All rights reserved.</GreySmallFont></div>
        </div>
      </PaymentFooter>
    </>

  )
}

