import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import ShipFirst from './ShipFirst';
import PurchageItem from './PurchageItem';

const Checkout = () => {
    return (
        <Box w="80%" m="auto" mb="2%">
            <Flex justifyContent="flex-start" gap="3%" >
           <ShipFirst/>
           <PurchageItem/>
        </Flex>
        </Box>
    );
};

export default Checkout;