import React from 'react'
import "../Styles/FlashDeals.css"

const FlashDeals = () => {
    return (
        <>
            <div className='flashContainer'>
                <div className='top'>
                    <div className='head'></div>
                    <div><a href="/">See More</a></div>
                </div>
                <div className='bottom'>
                    <div className='items'>
                        <span><img src="https://imgaz2.staticbg.com/thumb/grid/oaupload/banggood/images/9C/A5/be9bbc56-b522-4454-9ddd-b862a8d19b11.jpg.webp" alt="img" /></span>
                        <span className='oriprice'>&#8377;4,374.76</span>
                        <div className='off'>76% Off</div>
                    </div>
                    <div className='items'>

                        <span><img src="https://imgaz1.staticbg.com/thumb/grid/oaupload/banggood/images/F9/07/96b0ba27-7322-4d32-945e-64507d36afe9.jpg.webp" alt="img" /></span>
                        <span className='oriprice'>&#8377;3,658.76</span>
                        <div className='off'>75% Off</div>
                    </div>
                    <div className='items'>
                        <span><img src="https://imgaz3.staticbg.com/thumb/grid/oaupload/banggood/images/27/1C/9f9574ea-b6b1-4c45-8e9d-e92e9fffa960.jpg.webp" alt="img" /></span>
                        <span className='oriprice'>&#8377;2,067.65</span>
                        <div className='off'>76% Off</div>
                    </div>
                    <div className='items'>
                        <span><img src="https://imgaz.staticbg.com/thumb/grid/oaupload/banggood/images/47/98/32b8ac1c-76bf-4d8e-a689-c36f6745ee6c.jpg.webp" alt="img" /></span>
                        <span className='oriprice'>&#8377;931.60</span>
                        <div className='off'>76% Off</div>
                    </div>
                    <div className='items'>
                        <span><img src="https://imgaz.staticbg.com/thumb/grid/oaupload/banggood/images/25/46/051d5260-7fb2-4d8e-8c83-8decc705b6db.JPG.webp" alt="img" /></span>
                        <span className='oriprice'>&#8377;2,704.10</span>
                        <div className='off'>76% Off</div>
                    </div>
                    <div className='items'>
                        <span><img src="https://imgaz1.staticbg.com/thumb/grid/oaupload/banggood/images/56/A7/f43fad5b-9ac2-4554-82b5-73d0b4c2a664.jpg.webp" alt="img" /></span>
                        <span className='oriprice'>&#8377;5,965.88</span>
                        <div className='off'>76% Off</div>
                    </div>
                </div>
            </div>
            <div className='lowerContainer'>

                <div className='leftSide'>
                    <div className='title' >
                        <span>Discover New</span>
                        <div><a href="/">See More</a></div>
                    </div>
                    <div className='discoverDiv'>
                        <div>
                            <span><img src="https://imgaz1.staticbg.com/thumb/grid/oaupload/banggood/images/ED/3C/4416b6cd-c391-499f-850a-0c07d1ffb9b4.jpg.webp" alt="img" /></span>
                            <span className='oriprice'>&#8377;11,375</span>
                        </div>
                        <div>
                            <span><img src="https://imgaz2.staticbg.com/thumb/grid/oaupload/banggood/images/E6/B5/7c0ed023-df65-4a21-a8b5-b83a2c2ef884.jpg.webp" alt="img" /></span>
                            <span className='oriprice'> &#8377;2,544.98</span>
                        </div>
                        <div>
                            <span><img src="https://imgaz.staticbg.com/thumb/grid/oaupload/banggood/images/22/96/d107b24a-a319-4636-aa89-d7c49560c0ae.jpg.webp" alt="img" /></span>
                            <span className='oriprice'>&#8377;3,230.54</span>
                        </div>
                    </div>

                </div>
                <div className='rightSide'>
                    <div className='title' >
                        <span>Top Brands</span>
                        <div><a href="/">See More</a></div>
                    </div>
                    <div className='discoverDiv topBrands'>
                        <div>
                            <span><img style={{ width: "100%", height: "100px", marginBottom: "30px" }} src="https://imgaz.staticbg.com/banggood/os/201908/20190819020401_862.png.webp" alt="img" /></span>
                            <span><img src='https://imgaz.staticbg.com/brands/20210421042708_871.jpg.webp' /></span>
                        </div>
                        <div>
                            <span><img style={{ width: "100%", height: "100px", marginBottom: "30px" }} src="https://imgaz.staticbg.com/banggood/os/201912/20191204011824_561.jpg.webp" alt="img" /></span>
                            <span><img src="https://imgaz.staticbg.com/brands/20190722042549_635.jpg.webp" alt="img" /></span>

                        </div>
                        <div>
                            <span><img style={{ width: "100%", height: "100px", marginBottom: "30px" }} src="https://imgaz.staticbg.com/banggood/os/201908/20190819020446_646.png.webp" alt="img" /></span>
                            <span><img src="https://imgaz.staticbg.com/brands/20190623211827_727.jpg.webp" alt="img" /></span>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default FlashDeals