import { Box, Button, Heading,  Text } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

export default function Result() {
  const Navigate=useNavigate()
  return (
    <Box textAlign="center" py={10} px={6} mt='10%'>
      <CheckCircleIcon boxSize={'50px'} color={'green.500'} />
      <Heading as="h2" size="xl" mt={6} mb={2}>
        Order Status
      </Heading>
      <Text color={'gray.500'}>
        Your oder has been placed successfully.
      </Text>
      
      <Button 
      mt='2%'
      bg='teal'
      color='#fff'
      p='5px'
      px='3%'

      _hover={{color:"green",bg:"pink"}}
      onClick={()=>{
        Navigate('/')
      }}
      >Continue Shopping</Button>
     
    </Box>
  );
}