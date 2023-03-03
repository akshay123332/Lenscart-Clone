import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import Homepage from '../Pages/Homepage'
import Eyeglasses from "../Pages/Eyeglasses/Eyeglasses"
import Kidsglasses from '../Pages/Kidsglasses/Kidsglasses'
import Travelglassess from '../Pages/Travelglasses/Travelglassess'
import Sunglasses from '../Pages/Sunglasses/Sunglasses'
import Homepage from "../changed navbar/Homepage/Homepage"
import Computerglasses from '../Pages/ComputerGlasses/Computerglasses'

import CartA from '../Pages/Cart/CartA'
import Checkout from '../Pages/Checkout/Checkout'
import Signup from '../Components/Home/Signup'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/eyeglasses' element={<Eyeglasses/>}/>
        <Route path='/computerglasses' element={<Computerglasses/>}/>
        <Route path='/kidsglasses' element={<Kidsglasses/>} />
        <Route path='/sunglasses' element={<Sunglasses/>} />
        <Route path='/travelglasses' element={<Travelglassess/>} />
        <Route path='/cartA' element={<CartA/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path="*" element={<Homepage/>} />
      </Routes>
    </div>
  )
}

export default AllRoutes
