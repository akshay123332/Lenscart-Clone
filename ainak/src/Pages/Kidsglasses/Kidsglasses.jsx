import React, { useEffect, useState } from 'react'
import axios from "axios"
import {SimpleGrid } from '@chakra-ui/react'
import ProductCard from './ProductCard'
import styles from "./kidsglass.module.css"
import Sidebar from '../../Components/Sidebar/Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useSearchParams } from 'react-router-dom'
import { getData } from '../../redux/menspage/action'
import Navbar from '../../Components/Home/Navbar'
import Footer from '../../Components/Home/Footer'
import Loader from '../../Components/Loader'
import Navabr from '../../changed navbar/Navbar/Navabr'
import LargeWithLogoLeft from '../../changed navbar/Footer/Footer'

const Kidsglasses = () => {

let kids_url="https://rich-gray-scarab-fez.cyclic.app/eyeglasses"

const dispatch=useDispatch()
const data=useSelector((store)=>store.data);
const loader=useSelector((store)=>store.isLoading)
const location=useLocation();
const [searchparams]=useSearchParams()
console.log(data)

useEffect(()=>{
  let order=searchparams.get(`order`)
    let paramObj={
        params:{
            compatible:searchparams.getAll(`compatible`),
            frameshape:searchparams.getAll(`frameshape`),
            _sort: order &&"price",
            _order: order && order
        },
    }
    dispatch(getData(kids_url,paramObj))
},[location.search])


  return (
    <div>
      <Navabr/>
         <div className={styles.main}>
         <div className={styles.sidebar}><Sidebar/></div>
          <div columns={[1,2,3,3,3]} spacing={25} padding="2%" className={`${styles.product}`}>
          
          {data?.map((el,index)=>{
               return <div style={{border:"thick double #32a1ce",padding:"2%" , borderRadius:"7px" , backgroundColor:"azure", boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px"}} key={el.id} >
               <ProductCard id={el.id} image={el.image} desc={el.desc} price={el.price} rating={el.rating} frameshape={el.frameshape} compatible={el.compatible} />
               </div>
            })}
          </div>
            
        </div>
        <LargeWithLogoLeft/>
    </div>
  )
}

export default Kidsglasses