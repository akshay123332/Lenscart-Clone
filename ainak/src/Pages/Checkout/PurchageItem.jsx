import React from 'react';
import {Link} from "react-router-dom"
import {Box,Text,Image, Flex} from "@chakra-ui/react"
import PurchageCardIOtems from './PurchageCardIOtems';
const PurchageItem = () => {
    let arr=[1,2,3,4,5,6,756]
    return (
        <Box  w="30%">
            <Flex backgroundColor={"#333333"} color="#ffff" justifyContent="space-between"  boxSize="border-box"padding="10px">
                <Text>SHOPPING CART</Text>
                <Text>ITEM  {arr.length}</Text>
            </Flex>
            <Box>
            {arr.map((el)=>{
                return(
                    <PurchageCardIOtems price={el} qty={1} />
                )
            })}
            </Box>
            <Link to="/"> <Image src="https://static1.lenskart.com/media/desktop/img/Jan23/jan16/cart-banner/PLP%20Campaign%20-%20App%20(2).jpg" border="1px solid gray"/></Link>
            <Flex justifyContent="space-between" fontWeight={"800"} backgroundColor="gray.100" boxSize="border-box" padding="15px" border="1px solid gray">
                <Text >TOTAL ORDER</Text>
                <Text color={"teal"}>{"totsl"}</Text>
            </Flex>
        </Box>
    );
};

export default PurchageItem;