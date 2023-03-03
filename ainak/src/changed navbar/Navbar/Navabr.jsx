import React from 'react'
import NavbarRes from './NavbarRes';
import Styles from "./Navbar.module.css"
import {Link} from "react-router-dom"



const Navabr = () => {
//   const val=React.useContext(AuthContext)
//   const logout=(()=>{
//       val.handleAuth();
//   })
return (
  <div >
      <div className={Styles.adnavbar} > 
      <div className={Styles.logo}>
     <Link to="/"><img  src="https://static.lenskart.com/media/desktop/img/site-images/main_logo.svg" alt="logo" /></Link> 
      </div>
        
          {/* <button className={Styles.buttons}>All Products</button> */}
       <Link to="/sunglasses"><button className={Styles.buttons}>SUNGLASSES</button> </Link>  
     <Link to="/eyeglasses"><button className={Styles.buttons}>EYEGLASSES</button> </Link>    
       <Link to="/travelglasses"><button className={Styles.buttons}>TRAVELGLASSES</button></Link>   
         <Link to="/computerglasses"><button className={Styles.buttons}>COMPUTERGLASSES</button></Link> 
        <Link to="/kidsglasses"><button className={Styles.buttons}>KIDSGLASSES</button></Link>  
      <Link to="/signup"><button className={Styles.buttons}>SIGNUP</button></Link>    
          <div className={Styles.navres}>< NavbarRes/></div>
      </div>

  </div>
)
}

export default Navabr