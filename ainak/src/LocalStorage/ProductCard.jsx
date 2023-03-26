
import React, { useState } from 'react'
import { Image, Stack } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect } from 'react';
import { Text } from '@chakra-ui/react';


export const ProductCard = () => {
    let total=0
    const [data,setdata]=useState([])
    const getdata=()=>{
        axios.get(`https://rich-gray-scarab-fez.cyclic.app/cart`).then((res)=>{
            setdata(res.data)
            console.log(data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    
    
    useEffect(()=>{
        getdata()
    },[])
 for(let el of data){
    total+=el.price
     
 }
 localStorage.setItem("total",JSON.stringify(total))
 localStorage.setItem("length",JSON.stringify(data.length))

  return (
   <Stack>
    {
        data?.map((el,i)=>{
            return (
                <Stack id={i}
               
                direction='row' justify={'space-around'} align='center' fontSize={["12px",'16px']} px='5px'>
                    <Image w="20%"  src={el.image}></Image>
                    <Text  fontWeight={'500'}>₹{el.price}</Text>
                </Stack>
            )
        })
    }
   </Stack>
  )
}

