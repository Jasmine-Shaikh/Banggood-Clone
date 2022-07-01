import React, { useState } from 'react'
import styled from "styled-components"
import "../Styles/Product.css"
import { AiFillStar } from "react-icons/ai"

const Wrapper = styled.div`
box-sizing: border-box;
width: 95%;
  display: grid;
  margin: auto;
  grid-template-columns: repeat(6,1fr);
  background: #fff;
   background: rgba(0, 0, 0, 0.01);
  border-radius: 4px;
  

`
const Img = styled.img`
border-radius: 4px;
margin: auto;
width: 100%;
height: 190px;
`
const Title = styled.p`
  height: 20px;
    padding-left: 3px;
    display: block;
    font-size: 13px;
    font-weight: 400;
    line-height: 18px;
    color: rgb(51, 51, 51);
    overflow: hidden;
    white-space: wrap;
    background-color: #fff;
`

const MainTitle = styled.div`
height: 54px;
    font-size: 22px;
    font-weight: 700;
    color: rgb(51, 51, 51);
    background: rgba(0, 0, 0, 0.01);
    margin-left:30px;
    margin-bottom: 20px;
    
`
const PriceWrap=styled.p`
background-color: #fff;
line-height: 10px;
    height: 18px;
    display: flex;
    font-size: 13px;
  `


const Product = () => {
  const [productData, setProductData] = React.useState([]);
  const [page,setPage] = useState(1)
  const [limit,setLimit] = useState(24)
  const handlePage=()=>{
      setPage(page+1)
      setLimit(limit+24)
  }

  const handleClick=(id)=>{
      console.log(id)
  }

  React.useEffect(() => {
    fetch(`https://fake-server-app-by-atul.herokuapp.com/products?_page=${page}&_limit=${limit}`)
      .then((res) => res.json())
      .then((data) => setProductData(data))
  }, [page])



  return (
    <div className='container'>
      <MainTitle><p style={{ cursor: "pointer", }}>Picks For You</p></MainTitle>
      <Wrapper>
        {
          productData.map((data, idx) => {
            return (
              <div onClick={()=>handleClick(data.id)} className='innerDiv' key={idx}>
                <Img src={data.image} />
                <div style={{padding:"0 3px"}}>
                  <Title>{data.name}</Title>
                  <span className='newPrice'> &#8377;{data.price}</span>
                  <PriceWrap>
                    <span className='oldprice'>{Math.floor(10000*Math.random(6))}</span>
                    <span>{data.off}</span>
                  </PriceWrap>
                  <div className='ratingDiv'>
                    <span className='sold'>{Math.floor(1000 * Math.random())}{" sold"}</span>
                    <span className='rating'><AiFillStar style={{color: "rgb(255, 110, 38)"} }  ></AiFillStar>{data.ratings}</span>
                  </div>
                 
                </div>
                
              </div>
            )
          })

        }
      </Wrapper>
      <button onClick={handlePage} className='moreItem'>Show More</button>
    </div>

  )
}

export default Product