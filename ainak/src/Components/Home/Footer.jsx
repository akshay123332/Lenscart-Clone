import { Flex, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import {FaFacebookF,FaInstagram,FaTwitter} from "react-icons/fa"
import "./Footer.css"
const Footer = () => {
  return (
    <div className='Footer-cont'>
      <Flex className='list'>
          <div className='list-items'>
            <Flex>
            <ul style={{listStyle:"none",lineHeight:"30px",marginRight:"10%"}}>
            <Text fontSize={'3xl'}>Services</Text><br />
              <li>Store Locator</li>
              <li>Enter My Power</li>
              <li>Buying Guide</li>
              <li>Frame Size</li>
            </ul>
            <ul style={{listStyle:"none",lineHeight:"30px",marginRight:"10%"}}>
            <Text fontSize={'3xl'}>About Us</Text><br />
              <li>We Are Hiring</li>
              <li>Refer & Earn</li>
              <li>About Us</li>
              <li>Lenskart Coupons</li>
            </ul>
            <ul style={{listStyle:"none",lineHeight:"30px"}}>
            <Text fontSize={'3xl'}>Help</Text><br />
              <li>FAQ's</li>
              
            </ul>
            </Flex>
          </div>
          <div className='options'>
            <Flex className="images">
              <img style={{marginRight:"5px"}} src="https://static.lenskart.com/media/desktop/img/play-store.svg" alt="" />
              <img src="https://static.lenskart.com/media/desktop/img/app-store.svg" alt="" />
            </Flex>
            <Text mt={5} textAlign={'center'}>Download Lenskart App to buy</Text>
            <Text textAlign={'center'}>Eyeglasses, Sunglasses and Contact Lenses</Text>
          </div>
      </Flex>
      <div className='border'></div>
      <Flex className='social'>
          <Flex className='TnC'>
            <Text>T&C</Text>
            <Text>Privacy</Text>
            <Text>Disclaimer</Text>
          </Flex>
          <Spacer />
          <Flex className='handles'>
            <Text fontWeight={'bold'} >FOLLOW US AT</Text>
            <FaFacebookF/>
            <FaInstagram/>
            <FaTwitter/>
          </Flex>
      </Flex>
    </div>
  )
}

export default Footer
