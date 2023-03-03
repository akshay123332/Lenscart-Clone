import React, { useEffect, useState } from 'react'
import Styles from "./Carosual.module.css" 

const Images=[
    "https://static1.lenskart.com/media/desktop/img/Nov22/LK-Airflex-desktop-banner.gif","https://static1.lenskart.com/media/desktop/img/Dec22/5-Jan/1920x530(play-now)%20(1).gif","https://static1.lenskart.com/media/desktop/img/Dec22/1-Dec/Homepage-Banner-web.gif","https://static1.lenskart.com/media/desktop/img/Dec22/blend-edit/web.jpg","https://static1.lenskart.com/media/desktop/img/Nov22/tinted/launch-desk.gif","https://static1.lenskart.com/media/desktop/img/Oct22/kiara/Refresh-Banner-Web.gif"
]



const Carousal = () => {
 let index=0;
// let[index,setIndex]=useState(0)
const[src,setSrc]=useState(Images[index])

const changeindes=()=>{
    console.log(index)
    if(index===Images.length-1){
      index=0;
        setSrc(Images[index]) 
    }
    else{
    index++;
     setSrc(Images[index]) 
    }
    return index
}
// console.log({src})
useEffect(()=>{
    setInterval(changeindes,3000)
},[])



  return (
    <div>
        < img src={src} alt="carousal"  className={Styles.target}/>
    </div>
  )
}

export default Carousal