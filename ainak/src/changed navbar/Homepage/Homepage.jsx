import React from 'react'
import Carousal from '../Carousal/Carousal'
import LargeWithLogoLeft from '../Footer/Footer'
import Styles from "./Homepage.module.css"

import Navabr from '../Navbar/Navabr'


const Homepage = () => {
  return (
    <div>
        <Navabr/>
        <div className={Styles.divs}>
            <Carousal/>
        </div>
        <div className={Styles.divs}> 
            <img src="https://static1.lenskart.com/media/desktop/img/Feb23/23feb/PREMIUM%20BRANDS%20WEB.jpg" alt="Banner 1" />
        </div>
    <div className={Styles.divs}>
        <img src="https://static1.lenskart.com/media/desktop/img/Apr22/Bannerforexport.jpg" alt="banner2" />
    </div>
    <div className={Styles.divs}>
        <img src="https://static1.lenskart.com/media/desktop/img/Dec22/1-Dec/Homepage-Banner-web.gif" alt="giphy 1" />
    </div>
    <div className={Styles.divs}>
        <img src="https://static1.lenskart.com/media/desktop/img/Dec22/Web_banner.gif" alt="giphy2" />
    </div>
    <div className={Styles.divs}>
        <img src="https://static1.lenskart.com/media/desktop/img/Jan23/sunglasses/Sun-Banner-web.gif" alt="giphy 2" />
    </div>
    <div className={Styles.divs}>
        <h1 className={Styles.font}>INTRODUCING : OJOS SUBSCRIBE AND SHARE</h1>
        <img src="https://static1.lenskart.com/media/desktop/img/May22/ojos-web.jpg" alt="second last banner" />
    </div>
    <div className={Styles.divs}>
        <h1 className={Styles.font}>OUR BRANDS</h1>
        <img src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/VC-Banner.jpg" alt="last image" />
    </div>
    <div className={Styles.divs}>
        <h1 className={Styles.font}>SHOP WITH US</h1>
        <img src="https://static1.lenskart.com/media/desktop/img/Aug21/25-Aug/LK-AIR-Banner.jpg" alt="last image" />
    </div>
    <div style={{backgroundColor:"blue"}}>
       <LargeWithLogoLeft/>
    </div>
    </div>
  )
}

export default Homepage