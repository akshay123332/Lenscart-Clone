import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Cartnew = () => {
    const[cartitem,setCartitem]=useState([])

    const getData=()=>{
        axios.get("https://zara-mock-cw.onrender.com/cart").then(res=>setCartitem(res.data))
        .catch(err=>console.log(err))
    }

const handleDelte=(id)=>{
    axios.delete(`https://zara-mock-cw.onrender.com/cart/${id}`).then(res=>console.log(res.data))
    .catch(err=>console.log(err))

    axios.get("https://zara-mock-cw.onrender.com/cart").then(res=>setCartitem(res.data))
    .catch(err=>console.log(err))
}

    useEffect(()=>{
        getData()
    },[cartitem])
//https://rich-gray-scarab-fez.cyclic.app/cart



  return (
    <div>
        {cartitem?.map((el,index)=>{
            return (
               <div>
                 <h3>{el.id}</h3>
                 <img src={el.image} alt={el.desc} />
                 <h2>{el.desc}---{el.compatible}---{el.frameshape}</h2>
                 <h2>Rs. {el.price}</h2>
                 <h4>Rating : {el.rating}</h4>
                 
                <button onClick={()=>handleDelte(el.id)}>DELETE</button>
               </div>
            )
        })}
    </div>
  )
}

export default Cartnew