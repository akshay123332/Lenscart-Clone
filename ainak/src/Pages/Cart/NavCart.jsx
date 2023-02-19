import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';


const NavCart = () => {
    return (
        <Box background="#fff" mb={"20px"}>
            <Flex w="80%" m={"auto"}  justifyContent={"space-around"}  gap="30%" align={"center"}>
            <Link to="/">
            <Image ml={"30%"} src="https://static.lenskart.com/media/desktop/img/site-images/main_logo.svg" alt='error'/>
            </Link>
            <Box display={"flex"} alignItems="center" justifyContent="flex-start"gap={"10px"}>
                <Image src='https://static1.lenskart.com/media/desktop/img/DesignStudioIcons/Shield.svg'/>
                <Text style={{fontSize:"18px"}}>100% safe and secure</Text>
            </Box>
        </Flex>
        </Box>
    );
};

export default NavCart;