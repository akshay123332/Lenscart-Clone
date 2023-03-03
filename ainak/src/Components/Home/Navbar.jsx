import { Box, Flex, Input } from '@chakra-ui/react'
import {BsFillTelephoneFill} from "react-icons/bs"
import React, { useEffect, useState } from 'react'
import Signup from "./Signup"
import "./Navbar.css"
import MainNavbar from './MainNavbar'
import Login from './Login'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    const storedUsername = JSON.parse(localStorage.getItem('userDetails'));
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);
  const handleClick = ()=>{
    navigate("/signup")
  }
  return (
    <div>
    <div className='nav1'>
      <p className='text'>Do More, Be More |
Try in 3D |
Store Locator |
Quality |
USA |
Singapore |
UAE |
John Jacobs |
Aqualens |
Cobrowsing |
Engineering Blog |
Lenskart Franchise</p>

<p className='text'>Contact us</p>


    </div>
    <div className='N2'>
    <div>
        <img onClick={()=>navigate("/")} style={{marginTop:"8px"}} src="https://static.lenskart.com/media/desktop/img/site-images/main_logo.svg" alt="" />
    </div>
    <div>
        <div className='numinp'>
            
            <Flex fontSize={'2xl'} p={5}>
                <Box m={2} >
                <BsFillTelephoneFill /> 
                </Box>
                <p pb={2} fontSize={'1xl'} fontWeight='bold'> 
                1800-111-111
                </p>
               
                </Flex>
               <Input placeholder='what are you looking for' borderRadius={5} border={'1px solid gray'} w={'38rem'} h={10} mt={5}></Input>
        </div>
    </div>
    <Flex cursor={'pointer'}>
        <p className='text1'>Track Order</p>
        {username?
        <p className='text1' >{username.email}</p>:
        <p className='text1'onClick={handleClick}>Signup</p>
      }
        {/* <Login/> */}

        <p className='text1'>Wishlist</p>
        <p onClick={()=>navigate("/cartA")} className='text1'>Cart</p>
    </Flex>
    </div>
    <MainNavbar/>
    
    </div>
    
  )
}

export default Navbar
