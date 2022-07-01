import React, { useState } from 'react'
import { SliderImage } from './SliderImage'
import "../Styles/Slider.css"


const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if (slideIndex !== SliderImage.length) {
            setSlideIndex(slideIndex + 1)
        }
        else if (slideIndex === SliderImage.length) {
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1) {
            setSlideIndex(SliderImage.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <div className='containerSlide'>
            <div className='sliderContainer'>
                {SliderImage.map((obj, index) => {
                    return (
                        <div
                            key={index + 1}
                            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}>
                            <img src={obj.url} />
                        </div>
                    )
                })}
            </div>
            <div className='mainMtBot'>
                <div className='proBotList' >
                        <div className='title'>
                        <span>Top Rankings &#62;</span>
                            <span><img src="../" alt="" /></span>
                        </div>
                        <div className='proList1'>
                            <div className='proImg'>
                            <span><img src="https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/81/A7/84208453-221d-4259-a0f2-547bca6774a8.jpg.webp" alt="" srcset="" /></span>
                            <span>  <p className='priceNotranslate'>&#8377;8,670.77</p> </span>
                            </div>
                            <div className='proImg'>
                            <span><img src="https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/6C/C0/063d10e7-d800-4ef4-bcd2-4c7b5c1b69e7.jpg.webp" alt="" srcset="" /></span>
                            <span>  <p className='priceNotranslate'>&#8377;31,821.45</p> </span>
                            </div>
                            <div className='proImg'>
                            <span><img src="https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/4B/C7/51465cf3-35e8-446c-a35a-4f978bd779ad.jpg.webp" alt="" srcset="" /></span>
                            <span>  <p className='priceNotranslate'>&#8377;15,512.55</p> </span>
                            </div>
                        </div>
                </div>
                <div className='proBotList' >
                        <div className='title'>
                        <span>Clearance &#62;</span>
                            <span><img src="../" alt="" /></span>
                        </div>
                        <div className='proList1'>
                            <div className='proImg'>
                            <span><img src="https://imgaz2.staticbg.com/thumb/gallery/oaupload/ser1/banggood/images/E2/60/c148c341-ad2b-405b-a16a-e4356ad52d56.jpg.webp" alt="" srcset="" /></span>
                            <span>  <p className='priceNotranslate'>&#8377;78.76</p> </span>
                            </div>
                            <div className='proImg'>
                            <span><img src="https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/E0/90/93a9a00a-66cb-4edd-a66d-ac3ba50103bd.jpg.webp" alt="" srcset="" /></span>
                            <span>  <p className='priceNotranslate'>&#8377;9,939.68</p> </span>
                            </div>
                            <div className='proImg'>
                            <span><img src="https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/FC/23/f8e68554-263d-4e2e-9f5d-786d48f44175.jpg.webp" alt="" srcset="" /></span>
                            <span>  <p className='priceNotranslate'>&#8377;2,385.87</p> </span>
                            </div>
                        </div>
                </div>
              
            </div>
            <div className='conatinerLeft'>
                <div className='mtLogin mtRight'>
                    <div className='userInfoWrap'>
                        <div>
                            <img className='leftAvatar' src="https://css.banggood.in/web/src/img/indexnewest/default.png" alt="" srcset="" />
                        </div>
                        <div className='rightAvatar'>
                            <span className='name'>Welcome to Banggood</span>
                            {localStorage.getItem("isLogin") === "true" ? " ": <div className='btn'>
                                <a href='/Login' className='btnOrange'>Join Us</a>
                                <a href='/Login' className='btnWhite'>Sign in</a>
                            </div>
                        }
                            
                        </div>
                    </div>
                    <div className='benefits'>
                        <p className='titleB'>Customer Service Policy</p>
                        <div className='policy'>
                            <span>&#10003;Payment Security</span>
                            <span>&#10003;Delivery Gauarantee</span>
                            <span>&#10003;Quality Gaurantee</span>
                            <span>&#10003;No Reason Returns</span>
                        </div>
                    </div>
                </div>
                <div className='mtDown'>
                    <div>
                        <p className='titleB'>New User Benefits</p>
                    </div>
                        <div className='allowanceWrap'>
                            <div className='info'>
                                <span>Free Gifts & US$4</span>
                                <span className='price'>Allowance and</span>
                                <span className='light'>12% Off Coupons</span>
                            </div>
                        </div>
                    <div className='freeProlist'>
                        <div className='img'>
                            <span> <img src='https://imgaz1.staticbg.com/thumb/view/oaupload/banggood/images/50/10/86d70233-6e7c-471e-8074-5b1308983f9e.jpg.webp' /> </span>
                            <span className='price'>US$21.99</span>
                        </div>
                        <div className='img'>
                            <span> <img src='https://imgaz1.staticbg.com/thumb/view/oaupload/banggood/images/6D/A2/296539dd-863e-4cfa-9f97-c8db2a7c4e1f.JPG.webp' /> </span>
                            <span className='price'>US$14.99</span>
                        </div>
                        <div className='img'>
                            <span> <img src='https://imgaz3.staticbg.com/thumb/view/oaupload/banggood/images/19/17/08320b92-c6f1-48da-8daf-3c28ffb43bd5.jpg.webp' /> </span>
                            <span className='price'>US$98.14</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Slider