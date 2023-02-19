import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useSearchParams } from 'react-router-dom'

import { getData } from '../../redux/menspage/action'
import Menproductcard from '../Menproductcard/Menproductcard'
import styles from "../Menproductlist/Menproductlist.module.css";


const Menproductlist = () => {
    const dispatch=useDispatch()
    const data=useSelector((store)=>store.data);
    const location=useLocation();
    const [searchparams]=useSearchParams()
    console.log(data)
  
    useEffect(()=>{
        let paramObj={
            params:{
                compatible:searchparams.getAll(`compatible`),
                frameshape:searchparams.getAll(`frameshape`)
            },
        }
        dispatch(getData(paramObj))
    },[location.search])



  return (
    <div className={styles.container} >
    {
        data.length>0 && data.map((ele)=>{
        return <Menproductcard key={ele.id} 
        compatible={ele.compatible} desc={ele.desc}  frameshape={ele.frameshape} 
         image={ele.image}  price={ele.price}  rating={ele.rating} />
        })
    }
    </div>
  )
}

export default Menproductlist