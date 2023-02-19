import React from 'react'
import styles from "../Menproductcard/menproductcard.module.css";
import { AiFillStar } from "react-icons/ai";

const Menproductcard = ({ compatible,desc,frameshape,image,price,rating}) => {
  return (
    <div className={styles.container} >
      <img src={image} width="100%"  />
      <h2>{desc}</h2>
      <h3>₹{price}</h3>
      <div style={{display:"flex",justifyContent:"space-between"}} >
      <p>Frame : {frameshape}</p>
      <div style={{display:"flex"}} >
      <AiFillStar color="yellow" />
      <AiFillStar color="yellow" />
      <AiFillStar color="yellow" />
      
      </div>
      </div>
      <p>Compatible:{compatible}</p>
      <div className={styles.buycontainer} >
        <p>BUY 1 GET 1 FREE</p>
      </div>
    </div>
  )
}

export default Menproductcard




