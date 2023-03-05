import axios from 'axios'
import React, { useEffect, useState } from 'react'
import LargeWithLogoLeft from '../../changed navbar/Footer/Footer'
import Navabr from '../../changed navbar/Navbar/Navabr'
import Styles from "./cart.module.css"
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Navigate, useNavigate } from 'react-router-dom'

const Cartnew = () => {
    const[cartitem,setCartitem]=useState([])
    const [total,setTotal]=useState(0)
    const navigate = useNavigate()
    const getData=()=>{
        axios.get("https://zara-mock-cw.onrender.com/cart").then(res=>setCartitem(res.data))
        .catch(err=>console.log(err))
        let sum=0;
  for(let i=0;i<cartitem.length;i++){
    sum+=cartitem[i].price
  }
    
    setTotal(sum)
    }

const handleDelte=(id)=>{
    axios.delete(`https://zara-mock-cw.onrender.com/cart/${id}`).then(res=>console.log(res.data))
    .catch(err=>console.log(err))

    alert("Successfully Deleted the Product")


    axios.get("https://zara-mock-cw.onrender.com/cart").then(res=>setCartitem(res.data))
    .catch(err=>console.log(err))
}

    const handleClick = ()=>{
        navigate("/checkout")
    }
    useEffect(()=>{
        getData()
    },[cartitem])
//https://rich-gray-scarab-fez.cyclic.app/cart



  return (
    <div>
        <Navabr/>
       <div className={Styles.parent}> 

       <div className={Styles.sidebar} >
        <Button isDisabled={total===0} onClick={handleClick}>PROCEED TO CHECKOUT </Button>
           {/* {total>0? <button className={Styles.btn} >PROCEED TO CHECKOUT</button> : <button className={Styles.btn} disabled >PROCEED TO CHECKOUT</button>} */}
            <h1  className={Styles.text}>Bill details:- </h1>
            <h1 className={Styles.text}>Number of Items: {cartitem.length}</h1>    
             <h1 className={Styles.text}>Total Price : {total}</h1>
            </div>
            <div className={Styles.main}>
           {cartitem?.map((el,index)=>{
                return (
                   <div key={el.id} style={{border:"2px solid grey", display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"1.5%",backgroundColor:"white"}}>
                     {/* <h3>{el.id}</h3> */}
                     <img className={Styles.img} src={el.image} alt={el.desc} />
                     <h2 className={Styles.text}>{el.desc}---{el.compatible}---{el.frameshape}</h2>
                     <h2 className={Styles.text}>Rs. {el.price}</h2>
                     <h4 className={Styles.text}>Rating : {el.rating}</h4>   
                    <button className={Styles.btn} onClick={()=>handleDelte(el.id)}>DELETE</button>
                   </div>
                )
            })}
            </div>
       </div>
       <LargeWithLogoLeft/>
    </div>
  )
}

export default Cartnew