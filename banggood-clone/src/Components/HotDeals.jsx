import React, { useState, useEffect } from 'react'
import { FaGreaterThan } from "react-icons/fa";
import "../Styles/HotDeals.css"


const HotDeals = () => {
    const [pics, setPics] = useState([]);
    useEffect(() => {
        fetch(` http://localhost:8080/hotDeals`)
            .then((res) => res.json())
            .then((data) => setPics(data));
    }, [])

    return (
        <div className='hotContainer'>
            <div className='heading'>
            </div>
            <div className='down'>
                <div className='left'>
                    <span className='cateName'>Consumer Electronics</span>
                    <span className='goBtn'>GO <FaGreaterThan style={{ background: "#0c8dff" }}></FaGreaterThan> </span>
                    <div className='proList'>
                        <span className='img'><img style={{ width: "300px", height: "170px" }} src='https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/DE/B2/8bf49b8c-dafe-4f15-887a-d1f2b835b0e8.jpg' /></span>
                        <span>
                            <span className='img'><img style={{ width: "84px", height: "84px" }} src='https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/3C/20/29799c9b-cfec-459f-a550-e237e546671e.jpg' /></span>
                            <span className='img'><img style={{ width: "84px", height: "84px" }} src='https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/9D/A9/7b84de76-8edc-4810-8e49-05b87cb13679.png' /></span>
                        </span>
                    </div>
                </div>
                <div className='right'>
                    <div>
                        <span>Computers & Office</span>
                        <div className='computer'>
                            <span><img src="https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/A0/F5/3bd0a3ed-32e8-444f-9c6d-8db101149052.jpg" /></span>
                            <span><img src='https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/DA/72/81efb30a-50be-4083-842f-bfabf9726e9f.jpg' /></span>
                            <span><img src="https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/29/A1/590de9dc-df08-4960-a52d-935b7f802392.jpg" /></span>
                        </div>
                    </div>
                    <div>
                        <span>Automobiles & Motorcycle</span>
                        <div className='computer'>
                            <span><img src="https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/9C/A5/be9bbc56-b522-4454-9ddd-b862a8d19b11.jpg" /></span>
                            <span><img src='https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/43/D7/9e8de01e-6f1b-4567-af8f-7a698791cc9a.jpg' /></span>
                            <span><img src="https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/A0/EB/940a952d-e304-4d3e-ba81-a5430156a604.jpg" /></span>
                        </div>
                    </div>
                    <div>
                        <span>Tools</span>
                        <div className='computer'>
                            <span><img src="https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/B0/64/66c4394a-9d6b-448a-a3e8-fc790d938eac.jpg" /></span>
                            <span><img src='https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/43/60/8b5c5565-a5ad-420a-affd-e106b9aa4abf.jpg' /></span>
                            <span><img src="https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/BD/56/85e4e2f0-ec06-4aff-8a8e-455f0cb96038.jpg" /></span>
                        </div>
                    </div>
                    <div>
                        <span>Phones & Telecommunication</span>
                        <div className='computer'>
                            <span><img src="https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/54/B7/71dafe61-42f4-4e42-ab54-203fc8d2d20a.jpg" /></span>
                            <span><img src='https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/EB/7D/5c8e82f4-df33-411f-a043-7df5f604509a.png' /></span>
                            <span><img src="https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/B8/AC/e3b565ab-c490-4bc9-adde-296b79d1c0cb.jpg" /></span>
                        </div>
                    </div>
                    <div>
                        <span>Sports & Outdoor</span>
                        <div className='computer'>
                            <span><img src="https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/BC/27/b8f26e8d-2ae8-4975-a6fe-eb67a93d1653.jpg" /></span>
                            <span><img src='https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/F3/EA/601b1ed0-37ec-4e4f-9356-0be00171cb35.jpg' /></span>
                            <span><img src="https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/DC/1B/8a33452f-9ba4-4979-9d18-89de6327c721.jpg" /></span>
                        </div>
                    </div>
                    <div>
                        <span>Lights & Lighting</span>
                        <div className='computer'>
                            <span><img src="https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/59/57/41382fa3-7a9b-438b-850a-a4e3bc51b161.jpg" /></span>
                            <span><img src='https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/D2/37/61f41331-d7a0-4dea-8bbe-825da51ca4d0.jpg' /></span>
                            <span><img src="https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/0D/54/cda38297-66f0-41e4-98d1-9aa698799c5d.png" /></span>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    )
}

export default HotDeals