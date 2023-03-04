import { Box, Heading, Text } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

export default function Result() {
  return (
    <Box textAlign="center" py={10} px={6} mt='10%'>
      <CheckCircleIcon boxSize={'50px'} color={'green.500'} />
      <Heading as="h2" size="xl" mt={6} mb={2}>
        Order Status
      </Heading>
      <Text color={'gray.500'}>
        Your oder has been placed successfully.
      </Text>
    </Box>
  );
}