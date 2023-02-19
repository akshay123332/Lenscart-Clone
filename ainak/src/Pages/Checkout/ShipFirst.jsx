import { Input } from '@chakra-ui/react';
import React, { useState } from 'react';
import styles from "./Shipfirst.module.css"
import ShippingDetails from './ShippingDetails';
const ShipFirst = () => {
    let [state,setState]=useState(false)
    const [mob,setMob]=useState("")
    const handleClick=()=>{
        if(mob.length<10){
            alert("please enter correct number")
        }
        else{
            setState(true)
        }
    }

    return (
       state?<div style={{width:"60%"}}><ShippingDetails/></div>: <div style={{width:"60%"}}>
            <div className="inputform">
                <div className={`${styles.GautMob}`}>
                    <p style={{textAlign:"start"}} >Mobile</p>
                    <div style={{border:"1px solid",width:"45%",display:"flex",padding:"0px 10px",marginTop:"10px",height:"35px"}}>
                        <button>+91</button>
                        <input type="pin" size="10" value={mob} placeholder='Please enter mobile number' maxLength="10"
                        onChange={(e)=>{
                            setMob(e.target.value)
                        }} />
                    </div>
                </div>
                <div className={`${styles.radiogaut}`}>
                    <input type="radio" checked />
                    <label >Checkout as Guest</label>
                </div>
                <div className={`${styles.account}`}>
                    <input type="radio" />
                    <label>I Have an account (Login to checkout faster)</label>
                </div>
                
                <button className={`${styles.prog}`} onClick={handleClick}>PROCEED</button>
                
            </div>
            <div className={`${styles.textbelow}`}>
                <div className={`${styles.flextwo}`}>
                    <div className={`${styles.firstone}`}>
                        <p className="p" style={{color:"#009998"}}>When can I specify my lens power?</p>
                        <p>After you complete the checkout process you'll be able to choose your lens power online. We don't charge for adding power to lens!</p>
                    </div>
                    <div className={`${styles.secondonr}`}>
                        <p style={{color:"#009998"}}>I have a discount coupon/reward points</p>
                        <p>Great! You can apply a discount coupon/reward points during step 3 of the checkout process.</p>
                    </div>
                </div>
                <div className={`${styles.gridthree}`}>
                    <div className={`${styles.gls}`}>
                        <div className={`${styles.ico}`}>
                            <img src="https://static.lenskart.com/media/desktop/img/ckhkout-img4.png" alt="error" />
                            <p style={{color:"#009998"}}>Perfect Fit Promise</p>
                        </div>
                        <p className="tex">
                        We know you want to be sure your new glasses fit perfectly. That's why youll have 14 days to trythem, if they aren't right for you simply return them for adjustment, replacement, or a complete refund.
                        </p>
                    </div>
                    <div className={`${styles.gls}`}>
                        <div className={`${styles.ico}`}>
                            <img src="https://static.lenskart.com/media/desktop/img/ckhkout-img1.png" alt="" />
                            <p style={{color:"#009998"}}>Dr. Ujjwal Sonika, / AIIMS</p>
                        </div>
                        <p className="ujjtext">
                        I had seen these stylish products off and on, and finally bought a pair of rimless glasses from their store. I love the quality of the frames and the precision with which my lenses have been made and fitted. They are very professional with what they do. Good work!
                        </p>
                    </div>
                    <div className={`${styles.gls}`}>
                        <div className={`${styles.ico}`}>
                            <img src="https://static.lenskart.com/media/desktop/img/ckhkout-img5.png" alt="error" />
                            <p style={{color:"#009998"}}>Best Price Guaranteed</p>
                        </div>
                        <p >
                        If you find your chosen products cheaper at any other Indian online retailer, we'll refund the difference. This is why our customers know they always get the best prices in the country.
                        </p>
                    </div>
                </div>
            </div>
            <div className="Doubts">
                <p className={`${styles.alldg}`}>ALL YOUR DOUBTS RESOLVED</p>
                <p className={`${styles.qusegauti}`}>Ques 1. What is Gold Membership?</p>
                <p className={`${styles.qusegauti}`}>Ques 2. I’m not sure about the size and fit of the frames.</p>
                <p className={`${styles.qusegauti}`}>Ques 3. What if I buy glasses & they don’t fit me? What if the lenses aren’t right ?</p>
                <p className={`${styles.qusegauti}`}>Ques 4. Will the glasses have my prescription?</p>
                <p className={`${styles.qusegauti}`}>Ques 5. I have a complex power, can it be made?</p>
                <p className={`${styles.qusegauti}`}>Ques 6. Where do I submit my eye power details?</p>
                <p className={`${styles.qusegauti}`}>Ques 7. I don’t have my prescription handy. Is it important to give it right away?</p>
                <p className={`${styles.qusegauti}`}>Ques 8. I don’t know what my prescription is.</p>
                <p className={`${styles.qusegauti}`}>Ques 9. I really, really want to try the frames on before making a purchase!</p>
                <p className={`${styles.qusegauti}`}>Ques 10. How can I be sure of the quality of the frames?</p>
                <p className={`${styles.qusegauti}`}>Ques 11. What lenses will you use? I use thin, anti-glare lenses?</p>
                <p className={`${styles.qusegauti}`}>Ques 12. I haven’t heard of some of the brands available. How does one determine which brands to stock?</p>
                <p className={`${styles.qusegauti}`}>Ques 13. How many days will they take to make my eyeglasses?</p>
                <p className={`${styles.qusegauti}`}>Ques 14. I don’t like what I have purchased! What is your return policy?</p>
            </div>
            

        </div>
    );
};

export default ShipFirst;