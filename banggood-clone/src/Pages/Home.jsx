import React from 'react'
import AllProduct from '../Components/AllProduct'
import FlashDeals from '../Components/FlashDeals'
import HotDeals from '../Components/HotDeals'
import Slider from '../Components/Slider'
import '../Styles/home.css'
// import { useDispatch,useSelector } from 'react-redux/es/exports'
// import { getProducts } from '../Redux/Action'


const Home = () => {
  // const data = useSelector(state=>state.products)
  // const dispatch = useDispatch();

  // React.useEffect(()=>{
  //     dispatch(getProducts())
  // },[])
  return (
    <div className='home-main-div'>
        <Slider/>
        <FlashDeals/>
        <HotDeals/>
        <AllProduct/>
    </div>
  )
}

export default Home