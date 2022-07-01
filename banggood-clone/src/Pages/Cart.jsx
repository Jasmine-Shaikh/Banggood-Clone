import React from 'react'
import "../Styles/CartDetails.css"
import pic from "../Images/allmethod.png";
import { BsShieldCheck } from "react-icons/bs"
import { TbMinusVertical } from "react-icons/tb"
import { AiOutlineHeart } from "react-icons/ai"
import { RiDeleteBin5Line } from "react-icons/ri"
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import { NavLink } from "react-router-dom";

const Cart = () => {
  let totalCart = 0;
  console.log(totalCart)
  const [cart, setCart] = React.useState([]);
  const [cartQuantity, setCartQuantity] = React.useState(1);
  const [load, isLoad] = React.useState(false);

  const fetchdata = () => {
    isLoad(true)
    fetch("https://fake-server-app-by-atul.herokuapp.com/cart")
      .then(res => res.json())
      .then(data => {
        setCart(data);
        isLoad(false)
      })
      .catch((error) => console.log(error))
  }

  const handlepayment = (amount) => {
    localStorage.setItem("totalCartAmount", JSON.stringify(amount))
  }



  const handleDec = (id) => {
    isLoad(true)
    setCartQuantity(cartQuantity - 1);
    fetch(`https://fake-server-app-by-atul.herokuapp.com/cart/${id}`)
      .then((res) => res.json())
      .then((data) => console.log(data.price))
      isLoad(false);
    console.log(id)
  }
  const handleInc = (id) => {
    setCartQuantity(cartQuantity + 1)
    fetch(`https://fake-server-app-by-atul.herokuapp.com/cart/${id}`)
      .then((res) => res.json())
      .then((data) => console.log(data.price))
    console.log(id)
  }

  function handledelete(id) {
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
        fetchdata();
      })
      .catch((error) => console.log(error));
  }
  React.useEffect(() => {
    fetchdata()

  }, [])



  return (
    <>
      <Box sx={{ width: "100%", position: "fixed" }}>
        {load === true ? <LinearProgress sx={{
          backgroundColor: "#ff6e26", "& .MuiLinearProgress-bar": {
            backgroundColor: `#fae0a7`
          }
        }} /> : ""}
      </Box>
      <div>
        <div className='shopCartPath'>
          <div className='wrap'>
            <div className='pathLogo'>
            <NavLink to="/"><a></a></NavLink>
              <span><TbMinusVertical></TbMinusVertical><BsShieldCheck></BsShieldCheck>Secure Checkout </span>
            </div>
          </div>
        </div>
        <div className='cartDetails'>
          <div className='cartDetailsLeft'>
            <div className='list-top'>
              <h2>Shopping Cart ({cart.length})</h2>
              <div>
                <span>Select all</span>
              </div>
            </div>
            <div className='listBlock'>
              <span className='type-sign'>Free Gift</span>
              <i href="/" className='gift-text'> Click here! 3000+ Free gifts for you</i>
            </div>
            <div className='list-product'>
              <div className='list-block'>
                {
                  cart.map((item) => {
                    totalCart = totalCart + Math.floor(item.price)
                    return (
                      <>

                        <div key={item.id} >
                          <div >
                            <img src={item.image} alt="img" />
                          </div>
                          <div className='productNameMain'>
                            <a className='productName' href="/">{item.name}</a>
                            <div className='pro-title-main'>
                              <span className='pro-title'>Ship from: CN</span>
                            </div>
                            <div className='pricediv'>
                              <div className='first'>
                                {item.price}&#8377;
                              </div>
                              <div className='second'>
                                <span>COD</span>
                              </div>
                            </div>
                          </div>
                          <div className='option'>
                            <span >
                              <button onClick={() => handleDec(item.id)} >-</button>
                              <input type="text" value={cartQuantity} />
                              <button onClick={() => handleInc(item.id)} >+</button>
                            </span>
                            <span className='icons'>
                              <button><AiOutlineHeart /></button>
                              <button onClick={() => handledelete(item.id)}><RiDeleteBin5Line /></button>
                            </span>
                          </div>
                        </div>
                        <hr style={{ border: "1px thin gray", marginTop: "20px", marginBottom: "20px" }} />
                      </>


                    )
                  })
                }
              </div>

            </div>
            <div className='deleteAll'>
              <span className='deleteFirst'>
                <i href="/">Select all</i>
              </span>
              <span className='deleteSecond'>
                <span style={{ marginRight: "20px" }}>|</span>
                <span>Delete selected items</span>
              </span>
            </div>
            <div className='randomProduct'>
              <div className='randomTitle'>
                Maybe You Are Looking For
              </div>
              <div className='randomProduct'>
                <div className='randomDiv'>
                  <img className='randomimg' src="https://imgaz.staticbg.com/thumb/large/oaupload/banggood/images/92/33/d607cd3b-305b-4001-a880-a987ad4ba2de.jpg.webp" alt="img" />
                  <span className='randomPrice'>1700&#8377;</span>
                  <span className='randomDes'>Mens Plain Character Slogan Print Breathable Henley</span>
                </div>
                <div className='randomDiv'>
                  <img className='randomimg' src="https://imgaz2.staticbg.com/thumb/large/oaupload/banggood/images/FB/73/9f60f168-35d8-49e6-9e1f-939479fb0127.jpg.webp" alt="img" />
                  <span className='randomPrice'>2765.78&#8377;</span>
                  <span className='randomDes'>Women Casual Cartoon Embroidery Half Sleeve T-Shirts - One Size Red</span>
                </div>
                <div className='randomDiv'>
                  <img className='randomimg' src="https://imgaz.staticbg.com/thumb/large/oaupload/banggood/images/9D/A3/845a336e-e36d-4384-938b-012c71dd21d1.jpg.webp" alt="img" />
                  <span className='randomPrice'>2947.20&#8377;</span>
                  <span className='randomDes'>Temperament Ladies Women's New Loose Flocking Flower Coat Wide-leg Pants Two-piece Fashion Suit Women - S Black</span>
                </div>
                <div className='randomDiv'>
                  <img className='randomimg' src="https://imgaz1.staticbg.com/thumb/large/oaupload/banggood/images/64/9F/82f8d3df-a8ff-42f2-a8f5-f28a06223c25.jpg.webp" alt="img" />
                  <span className='randomPrice'>2000&#8377;</span>
                  <span className='randomDes'>Mens Newspaper Print Round Neck Short Sleeve Casual T-Shirts Adidas</span>
                </div>
                <div className='randomDiv'>
                  <img className='randomimg' src="https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/FD/2D/fb2b621e-eb0b-4b17-9e42-1930cedd9450.JPG.webp" alt="img" />
                  <span className='randomPrice'>1843.60&#8377;</span>
                  <span className='randomDes'>Women Knit Long Sleeve Zipper Casual Square Collar Basic T-Shirts - S Black</span>
                </div>
                <div className='randomDiv'>
                  <img className='randomimg' src="https://imgaz.staticbg.com/thumb/large/oaupload/banggood/images/43/6E/683ed069-a130-49b3-b4fc-6f13357354ac.jpg" alt="img" />
                  <span className='randomPrice'>1807.44&#8377;</span>
                  <span className='randomDes'>Big Pockets Stitching Short Sleeve</span>
                </div>
                <div className='randomDiv'>
                  <img className='randomimg' src="https://imgaz.staticbg.com/thumb/large/oaupload/banggood/images/F8/D3/1826c727-926f-4227-9c06-9932c3ebd0ba.jpeg" alt="img" />
                  <span className='randomPrice'>2,418.08&#8377;</span>
                  <span className='randomDes'>Mens Letter Tape Multi Pockets</span>
                </div>
                <div className='randomDiv'>
                  <img className='randomimg' src="https://n.nordstrommedia.com/id/sr3/a2a45393-3c6d-432f-af63-8e1459ee8532.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196" alt="img" />
                  <span className='randomPrice'>124.00&#8377;</span>
                  <span className='randomDes'>Ribbed Long Slipdress</span>
                </div>
              </div>




            </div>
            <div className='footerPart'>
              <div className='innerfooter'>
                <span className='linkLogo'>
                  <a href="/"></a>
                </span>
                <span className='linkText'>
                  <a href="/">Terms</a>
                  <a href="/">Privacy</a>
                  <a href="/">Specialized Affiars</a>
                </span>
                <span className='linkCopy'>
                  &copy;2006-2022 BANGGOOD
                </span>
              </div>
            </div>
          </div>
          <div className='cartDetailsRight'>
            <div className='summary'>
              <h2>Order Summary</h2>
              <div className='summaryList'>
                <div className='summaryList1'>
                  <span>Subtotal</span>
                  <span>{totalCart}&#8377;</span>
                </div>
                <div className='summaryList2'>
                  <span>Total({cart.length})</span>
                  <span>{totalCart}&#8377;</span>
                </div>
              </div>
              <div className='paymentbutton'>
                <button onClick={() => handlepayment(totalCart)} className='paypalCheckout' >Paypal</button>
                <button onClick={() => handlepayment(totalCart)} className='withoutPaypal'>Proceed to Checkout</button>
              </div>
            </div>
            <div className='method'>
              <img src={pic} alt="img" />
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Cart