import React from 'react';
import {Box,Text,Image, Flex} from "@chakra-ui/react"
const PurchageCardIOtems = ({image,price,qty}) => {
    image="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/100x100/9df78eab33525d08d6e5fb8d27136e95//l/i/peyush-bansal-shark-tank-amber-full-rim-hustlr-eyeglasses_g_7897_23_12_202230_dec22.jpg"
    return (
        <Box style={{border:"1px solid gray",boxSizing:"border-box",padding:"10px",display:'flex',justifyContent:"space-between",gap:"2%",alignItems:"center"}}>
            <Image src={image} w="80px" />
            <Box>
                <Text fontWeight={"600"}>Qty</Text>
                <Text border="1px solid" textAlign={"center"}>{qty}</Text>
            </Box>
            <Flex justifyContent={"space-between"} alignItems="center" gap="10px">
                <Text fontWeight={"600"}>Product Price</Text>
                <Text>₹{price}</Text>
            </Flex>
        </Box>
    );
};

export default PurchageCardIOtems;