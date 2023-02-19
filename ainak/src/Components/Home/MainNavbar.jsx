import { Text } from '@chakra-ui/react'
import { NavbarData } from './NavbarData'
import React from 'react'
import "./MainNavbar.css"
import { useNavigate } from 'react-router-dom'
const MainNavbar = () => {
  const navigate = useNavigate()

  const handleClick = (item) => {
   navigate(`${item}`);
  };
    console.log(NavbarData)
  return (
    <div>
      <div className='nav'>
            {
                NavbarData.map((item,index)=>{
                    return (
                       <button onClick={()=>handleClick(item.link)} style={{marginTop:"15px"}} key={index}>{item.name}</button>
                    )
                })
            }
      </div>
    </div>
  )
}

export default MainNavbar

