import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import  axios  from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


// ************************************ Local Storage ******************************

// let priceData=localStorage.getItem("price")||{}

const CartCard = ({id,image,price,desc,setData}) => {
  // let c=1
  // let [count,setCount]=useState(1)
  // let [fprice,setFprice]=useState(price*count)
  // priceData[price]?priceData[price]=c+=1:priceData[price]=c
  // console.log(priceData,"sadfgh")
  // const handleRemove=()=>{
  //   deleteProduct(id).then((res)=>console.log("deltwr"))
  //   //HandleChange()
  //   getData()
  // }
  // const HandleRepeat=()=>{
  //   setCount((prve)=>prve+1)
  //   setFprice(count*price)
  //   HandleChange()
  //   priceData[price]?priceData[price]=count++:priceData[price]=1
  //   localStorage.setItem("price",JSON.stringify(priceData))
  //   console.log(priceData,priceData[price])
  // }

  const getData=()=>{
    axios.get("https://zara-mock-cw.onrender.com/cart").then(res=>setData(res.data))
    .catch(err=>console.log(err))
}

const handleDelte=(id)=>{
  alert("Remove from cart")
axios.delete(`https://zara-mock-cw.onrender.com/cart/${id}`).then(res=>console.log(res.data))
.catch(err=>console.log(err))

getData()
}
  

    return (
        <Box key={id}>
            <Box className="App" display="flex" maxWidth="100%" margin={"auto"} flexDirection="row" alignItems="center" gap="20px" boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"} boxSize="border-box" padding={"20px 40px"} borderRadius="12px" ml={"-2.5"} mb="20px">
          <Box boxSize='30%'>
            <Image src={image} alt='Dan Abramov' />
          </Box>
          <Box mt="10px" mb="10px" >
            <Link to="/" mb="30px">
              <Flex justifyContent={"space-between"}>
                <Text maxWidth="80%" textAlign="left">
                  {/* Black Green Full Rim Aviator Vincent Chase Polarized Vintage Vc S14076-C3 Sunglasses */}
                   {desc}
                </Text>
                <Text>{price}</Text>
              </Flex>
            </Link>
            <hr style={{borderBottom:"1px dashed gray"}} />
            <Box mt={"10px"} mb="10px">
              <Flex alignItems='center' justifyContent={"space-between"} fontWeight={"600"}>
                <Text >Final Price</Text>
                <Text>{price}</Text>
              </Flex>
            </Box>
            <hr style={{borderBottom:"1px dashed gray"}} />
            <Box display="flex" justifyContent="flex-start" gap="15%" mt={"10px"}>
              <Button onClick={()=>handleDelte(id)} >Remove</Button>
            </Box>
          </Box>
        </Box>
        </Box>
    );
};

export default CartCard;