import React from 'react'
import { specs_grid } from './specs-grid'
import "./Main.css"
import { Box, Flex } from '@chakra-ui/react'
import Tc from './Tc'
const Main = () => {
    
  return (
    <div>
        
      <div className='gif1'>
        <img src="https://static1.lenskart.com/media/desktop/img/Jan23/images/Frame-632504_01.jpg" alt="" />
         <img src="https://static1.lenskart.com/media/desktop/img/Jan23/images/Frame-632504_02.jpg" alt="" />       
         <img src="https://static1.lenskart.com/media/desktop/img/Jan23/images/Frame-632504_03.jpg" alt="" />
    </div>
    <div className='specs-grid'>
        {
            specs_grid.map((item,index)=>{
                return (
                    <img src={item.img} alt="" />
                )
            })
        }
    </div>
    <img src="https://static1.lenskart.com/media/desktop/img/Jan23/images/Frame-632504_13.jpg" alt="" />
    <div className="frames">
            {
                frames.map((item,index)=>{
                    return (
                        <img src={item.img} alt="" />
                    )
                })
            }
    </div>
    <img src="https://static1.lenskart.com/media/desktop/img/Jan23/images/Frame-632504_22.jpg" alt="" />
    <div className="celebs">
                {
                    celebs.map((item,index)=>{
                        return (
                            <img src={item.img} alt="" />
                        )
                    })
                }
    </div>
    <img src='https://static1.lenskart.com/media/desktop/img/Jan23/images/Frame-632504_27.jpg' alt="" />
   <div className="offer1">

   
   <Flex  w={'54rem'}>
    <img src="https://static1.lenskart.com/media/desktop/img/Jan23/images/Frame-632504_28.jpg" alt="" />
   <img src="https://static1.lenskart.com/media/desktop/img/Jan23/images/Frame-632504_29.jpg" alt="" />
   </Flex>
   </div>
    <img id='slone' src="https://static1.lenskart.com/media/desktop/img/Jan23/images/Frame-632504_30.jpg" alt="" />
    
    <img src="https://static1.lenskart.com/media/desktop/img/Jan23/images/Frame-632504_35.jpg" alt="" />
    <Flex w={'54rem'}>
    <img  src="https://static1.lenskart.com/media/desktop/img/Jan23/images/Frame-632504_36.jpg" alt="" />
   <img src="https://static1.lenskart.com/media/desktop/img/Jan23/images/Frame-632504_37.jpg" alt="" />
   </Flex>
   <img src="https://static1.lenskart.com/media/desktop/img/Jan23/images/Frame-632504_38.jpg" alt="" />
   <Box>
    <img style={{width:"87.8rem"}} src="https://static1.lenskart.com/media/desktop/img/Jan23/images/Frame-632504_39.jpg" alt="" />
    <Flex w={'42.8rem'} >
        <img src="https://static1.lenskart.com/media/desktop/img/Jan23/images/Frame-632504_40.jpg" alt="" />
        <img src="https://static1.lenskart.com/media/desktop/img/Jan23/images/Frame-632504_41.jpg" alt="" />
    </Flex>
   </Box>
   <img src="https://static1.lenskart.com/media/desktop/img/Jan23/images/Frame-632504_42.jpg" alt="" />
    <Tc/>
    </div>
  )
}

export default Main

const frames = [
    {
        img:"https://static1.lenskart.com/media/desktop/img/Jan23/images/Frame-632504_14.jpg"
    },
    {
        img:"https://static1.lenskart.com/media/desktop/img/Jan23/images/Frame-632504_15.jpg"
    },
    {
        img:"https://static1.lenskart.com/media/desktop/img/Jan23/images/Frame-632504_16.jpg"
    },
    {
        img:"https://static1.lenskart.com/media/desktop/img/Jan23/images/Frame-632504_17.jpg"
    },
    {
        img:"https://static1.lenskart.com/media/desktop/img/Jan23/images/Frame-632504_18.jpg"
    },
    {
        img:"https://static1.lenskart.com/media/desktop/img/Jan23/images/Frame-632504_19.jpg"
    },
    {
        img:"https://static1.lenskart.com/media/desktop/img/Jan23/images/Frame-632504_20.jpg"
    },
    {
        img:"https://static1.lenskart.com/media/desktop/img/Jan23/images/Frame-632504_21.jpg"
    }
]
const celebs = [
    {
        img:"https://static1.lenskart.com/media/desktop/img/Jan23/images/Frame-632504_23.jpg",
    },
    {
        img:"https://static1.lenskart.com/media/desktop/img/Jan23/images/Frame-632504_24.jpg",
    },
    {
        img:"https://static1.lenskart.com/media/desktop/img/Jan23/images/Frame-632504_25.jpg",
    },
    {
        img:"https://static1.lenskart.com/media/desktop/img/Jan23/images/Frame-632504_26.jpg",
    },
]