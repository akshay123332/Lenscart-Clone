import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { ArrowForwardIcon, InfoOutlineIcon } from "@chakra-ui/icons"
import { Navigate } from "react-router-dom"
import {Link as RouterLink} from "react-router-dom"


const Billdetails = ({data}) => {
    let dddd = {
        maxW: "90%",
        m: "auto",
        lineHeight:"40px",
        justifyContent: "space-between",
        alignItems: "center",
    }

    let total=0
    for(let el of data){
        total+=el.price
    }

    return (
        <Box>
            <Text fontSize='2xl' mb={"8%"}>Bill Details</Text>
            <Box width={"100%"} m={"auto"} boxSize="border-box" boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"} padding="20px" borderRadius={"12px"}>
                <Flex style={dddd} borderTop="0px solid">
                    <Text >Total Price</Text>
                    <Text>₹{total+99}</Text>
                </Flex>
                
                <Flex style={dddd} borderTop="1px dashed gray">
                    <Text color>Total Offer Discount</Text>
                    <Text>₹ 99</Text>
                </Flex>
               
                <Flex style={dddd} borderTop="1px dashed gray" >
                    <Text>Final Price</Text>
                    <Text>₹{total}</Text>
                </Flex>
                
                <Flex style={dddd} borderTop="1px dashed gray">
                    <Text>Tax</Text>
                    <Text>₹139</Text>
                </Flex>

                <Flex style={dddd}borderTop="1px dashed gray" >
                    <Text>Convenience Fees</Text>
                    <Text>₹139</Text>
                </Flex>
                
                <Flex style={dddd} borderTop="1px dashed gray">
                    <Text fontWeight={"700"}>Total payable</Text>
                    <Text fontWeight={"600"}>₹{total+278}</Text>
                </Flex>
            </Box>
            <Box className='SilverMemberShipGaut' boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px" cursor="pointer" padding="20px" mt="30px" borderRadius="12px" border="1px solid gold" background="#f7f1de" onClick={() => {
                Navigate("/")
            }}>
                <Box borderBottom="1px dashed gray">
                    <Flex justifyContent="space-between" alignItems="center">
                        <Text>Silver Membership added</Text>
                        <InfoOutlineIcon></InfoOutlineIcon>
                    </Flex>
                    <Text m="10px 0px 20px 0px" textAlign="start">You are eligible for a Free Pair</Text>
                </Box>
                {/* <hr/> */}
                <Flex justifyContent="space-between" alignItems="center" mt="20px">
                    <Text>Choose second pair </Text>
                    <ArrowForwardIcon border="1px solid " w="30px" h="20px" borderRadius="50%"></ArrowForwardIcon>
                </Flex>
            </Box>
            <Box className='couponGauti' mt="5%" boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"} boxSizing="border-box" padding="10px 20px 30px 30px" borderRadius={"12px"}>
            <Flex justifyContent="space-between" alignItems="center" mt="20px">
                    <Box>
                        <Text fontWeight={"600"}>Apply Coupon</Text>
                        <Text color="gray">Check available offers</Text>
                    </Box>
                    <ArrowForwardIcon border="1px solid " w="30px" h="20px" borderRadius="50%"></ArrowForwardIcon>
                </Flex>
            </Box>
            <Box mt="15%">
       <RouterLink to="/checkout">
       <Button background="#11DAAC" w="100%" fontSize="18px"padding="16px 24px" h="56px" borderRadius="100px" color="#000042" _hover={{color:"#11DAAc",color:"#FFFF"}}>
                    Proceed To Checkout
                </Button>
        </RouterLink>       
            </Box>
        </Box>
    );
};

export default Billdetails;