import axios from 'axios'
import React, { useEffect, useState } from 'react'

import styles from "./sidebar.module.css"
import { ImMan,ImWoman } from "react-icons/im";
import { IoWoman } from "react-icons/io";

import { TbMoodBoy } from "react-icons/tb";
import { GiSunglasses } from "react-icons/gi";
import { BsGraphDown,BsGraphUp } from "react-icons/bs";


import { IoIosGlasses,IoMdGlasses,IoGlasses } from "react-icons/io";
import { useSearchParams } from 'react-router-dom';


const Sidebar = () => {
  const [searchparams,setsearchparams]=useSearchParams();

  const initialCategory=searchparams.getAll(`compatible`)
 const[compatible,setcompatible]=useState(initialCategory ||[]);

 const initialFrame=searchparams.getAll(`frameshape`)
 const [frameshape,setframeshape]=useState(initialFrame ||[]);

 const initialOrder=searchparams.getAll(`order`)
 const [order,setorder]=useState(initialOrder || "")

  const HandleChange=(e)=>{
    const categoryArr=[...compatible];
    if(categoryArr.includes(e.target.value)){
      categoryArr.splice(categoryArr.indexOf(e.target.value),1)
    }else{
      categoryArr.push(e.target.value)
    }
    setcompatible(categoryArr)
  }

  const HandleFrame=(e)=>{
    const frameshapeyArr=[...frameshape];
    if(frameshapeyArr.includes(e.target.value)){
      frameshapeyArr.splice(frameshapeyArr.indexOf(e.target.value),1)
    }else{
      frameshapeyArr.push(e.target.value)
    }
    setframeshape(frameshapeyArr)
  }
  console.log(order)
  useEffect(()=>{
    let params={
      compatible,
      frameshape,

    }
    order && (params.order=order)
    setsearchparams(params)
  },[compatible,frameshape,order])
  
 
  return (
    <div>
  <div >
    <h1 className={styles.heading} >CATEGORY</h1>
      <div style={{display:"flex",flexDirection:"row",justifyContent:"space-around"}}  >
       <div>
       <label style={{display:"flex",flexDirection:"column"}} >
         <input type="checkbox" className={styles.checkbox} value="Man" onChange={HandleChange} checked={compatible.includes("Man")}  />
          <span className={styles.label}>
            <ImMan  size="30px"  />
            </span>
           Men</label>
       </div>

       <div>
       <label style={{display:"flex",flexDirection:"column"}} >
         <input type="checkbox" className={styles.checkbox} value="Woman" onChange={HandleChange} checked={compatible.includes("Woman")} />
          <span className={styles.label}>
            <ImWoman  size="30px"  />
            </span>
           Women</label>
       </div>

       <div>
       <label style={{display:"flex",flexDirection:"column",justifyContent:"center"}} >
         <input type="checkbox" className={styles.checkbox} value="Kids" onChange={HandleChange} checked={compatible.includes("Kids")} />
          <span className={styles.label}>
            <TbMoodBoy  size="30px"  />
            </span>
           Kids</label>
       </div>

    </div>
  </div>

  <div>
    <h1 className={styles.heading} >FRAME TYPE</h1>
      <div style={{display:"flex",flexDirection:"row",justifyContent:"space-around",marginBottom:"10px",alignItems:"center"}}  >

       <div>
       <label style={{display:"flex",flexDirection:"column"}} >
         <input type="checkbox" className={styles.checkbox} value="Round" onChange={HandleFrame} checked={frameshape.includes("Round")}  />
          <span className={styles.label}>
            <IoIosGlasses  size="40px"  />
            </span>
           Round</label>
       </div>

       <div>
       <label style={{display:"flex",flexDirection:"column",}} >
         <input type="checkbox" className={styles.checkbox} value="Oval" onChange={HandleFrame} checked={frameshape.includes("Oval")} />
          <span className={styles.label}>
            <IoMdGlasses  size="40px"  />
            </span>
           Oval</label>
       </div>

       
       
    </div>

    <div style={{display:"flex",flexDirection:"row",justifyContent:"space-around",alignItems:"center"}}  >

<div>
<label style={{display:"flex",flexDirection:"column"}} >
  <input type="checkbox" className={styles.checkbox} value="Square" onChange={HandleFrame} checked={frameshape.includes("Square")}  />
   <span className={styles.label}>
     <IoMdGlasses size="40px"  />
     </span>
     Square</label>
</div>

<div>
<label style={{display:"flex",flexDirection:"column"}} >
  <input type="checkbox" className={styles.checkbox} value="Rectangle" onChange={HandleFrame} checked={frameshape.includes("Rectangle")} />
   <span className={styles.label}>
    <GiSunglasses size="33px"/>
     </span>
     Rectangle</label>
</div>



</div>
    
  </div>

  <div>
  <h1 className={styles.heading} >SORT BY PRICE</h1>
  <div style={{display:"flex",flexDirection:"row",justifyContent:"space-around",marginBottom:"10px",alignItems:"center"}}  >

<div>
<label style={{display:"flex",flexDirection:"column"}} >
  <input type="checkbox" className={styles.checkbox} value="desc" onChange={(e)=>setorder(e.target.value)} checked={order=="desc"}  />
   <span className={styles.label}>
     <BsGraphDown  size="40px"  />
     </span>
     High to Low</label>
</div>

<div>
<label style={{display:"flex",flexDirection:"column",}} >
  <input type="checkbox" className={styles.checkbox} value="asc" onChange={(e)=>setorder(e.target.value)} checked={order=="asc"} />
   <span className={styles.label}>
     <BsGraphUp  size="40px"  />
     </span>
     Low to High</label>
   </div>
 </div>
</div>
  </div>
  )
}

export default Sidebar