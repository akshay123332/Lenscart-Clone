import React, { useState } from 'react';
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,

  FormHelperText,
} from '@chakra-ui/react';

import { useToast } from '@chakra-ui/react';
import { Navigate } from 'react-router-dom';

const Form1 = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const [firstName,setFirstName]=useState("")
  const [lasttName,setLastName]=useState("")
  const [email,setEmail]=useState("")
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="3%" backgroundColor={"teal"} color="white" boxSize="border-box" padding="10px">
        Shipping Address Details
      </Heading>
      <Flex>
        <FormControl mr="5%">
          <FormLabel htmlFor="first-name" fontWeight={'normal'}>
            First name
          </FormLabel>
          <Input id="first-name" value={firstName} placeholder="First name" onChange={(e)=>setFirstName(e.target.value)} />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="last-name" fontWeight={'normal'}>
            Last name
          </FormLabel>
          <Input id="last-name" placeholder="First name" value={lasttName} onChange={(e)=>setLastName(e.target.value)} />
        </FormControl>
      </Flex>
      <FormControl mt="2%">
        <FormLabel htmlFor="email" fontWeight={'normal'}>
          Email address
        </FormLabel>
        <Input id="email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>

    </>
  );
};

const Form2 = () => {
  const [country,setCountry]=useState("")
  const [street,setStreet]=useState("")
  const [city,setCity]=useState("")
  const [state,setState]=useState("")
  const [postal,setPostal]=useState("")
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%" backgroundColor={"teal"} color="white" boxSize="border-box" padding="10px">
      Shipping Address
      </Heading>
      <FormControl as={GridItem} colSpan={[6, 3]}>
        <FormLabel
          htmlFor="country"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}>
          Country / Region
        </FormLabel>
        <Select onChange={(e)=>setCountry(e.target.value)}
          id="country"
          value={country}
          name="country"
          autoComplete="country"
          placeholder="Select option"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md">
          <option value="india">India</option>
          <option value="us">United States</option>
          <option value="canada">Canada</option>
          <option value="mexico">Mexico</option>
        </Select>
      </FormControl>

      <FormControl as={GridItem} colSpan={6}>
        <FormLabel
          htmlFor="street_address"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          Street address
        </FormLabel>
        <Input
          type="text"
          name="street_address"
          id="street_address"
          autoComplete="street-address"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          value={street}
          rounded="md"
          onChange={(e)=>setStreet(e.target.value)}
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
        <FormLabel
          htmlFor="city"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          City
        </FormLabel>
        <Input
          type="text"
          name="city"
          id="city"
          autoComplete="city"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          value={city}
          onChange={(e)=>setCity(e.target.value)}
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
        <FormLabel
          htmlFor="state"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          State / Province
        </FormLabel>
        <Input
          type="text"
          name="state"
          id="state"
          autoComplete="state"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          value={state}
          rounded="md"
          onChange={(e)=>setState(e.target.value)}
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
        <FormLabel
          htmlFor="postal_code"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          ZIP / Postal
        </FormLabel>
        <Input
          type="text"
          name="postal_code"
          id="postal_code"
          autoComplete="postal-code"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          value={postal}
          onChange={(e)=>setPostal(e.target.value)}
        />
      </FormControl>
    </>
  );
};

const Form3 = () => {
  const [name,setName]=useState('')
  const [date,setDate]=useState('')
  const[cvv,setCvv]=useState(0)
  
  return (
    <>
      <Heading w="100%" textAlign={'center'}mb="5%" fontWeight="normal" backgroundColor={"teal.400"} color="white" boxSize="border-box" padding="10px" borderRadius="5px">
      PAYMENT OPTIONS
      </Heading>
      <SimpleGrid columns={1} spacing={6}>
        <FormControl as={GridItem} colSpan={[3, 2]}>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}>
          </FormLabel>
          <InputGroup size="sm">
            <InputLeftAddon
              bg="gray.50"
              _dark={{
                bg: 'gray.800',
              }}
              color="gray.500"
              rounded="md">
              
            </InputLeftAddon>
            <Input
              type="number"
              placeholder="Enter Card Number"
              focusBorderColor="brand.400"
              rounded="md"
              value={name}
              onChange={(e)=>setName(e.target.value)}
            />
          </InputGroup>
        </FormControl>
        <Flex gap="5%">
        <FormControl as={GridItem} colSpan={[3, 2]}>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}>
          </FormLabel>
          <InputGroup size="sm">
            <InputLeftAddon
              bg="gray.50"
              _dark={{
                bg: 'gray.800',
              }}
              color="gray.500"
              rounded="md">
              
            </InputLeftAddon>
            <Input
              type="text"
              placeholder="MM/YYYY"
              focusBorderColor="brand.400"
              rounded="md"
              padding="0px 15px"
              value={date}
              onChange={(e)=>setDate(e.target.value)}
            />
          </InputGroup>
        </FormControl>
        <FormControl as={GridItem} colSpan={[3, 2]}>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}>
          </FormLabel>
          <InputGroup size="sm">
            <InputLeftAddon
              bg="gray.50"
              _dark={{
                bg: 'gray.800',
              }}
              padding="0px 10px"
              color="gray.500"
              rounded="md">
              
            </InputLeftAddon>
            <Input
              type="pin"
              placeholder="CVV"
              focusBorderColor="brand.400"
              rounded="md"
              size="3"
              maxLength="3"
              padding="0px 15px"
              value={cvv}
              onChange={(e)=>setCvv(e.target.value)}
            />
          </InputGroup>
        </FormControl>
        </Flex>

        
      </SimpleGrid>
    </>
  );
};

export default function ShippingDetails() {
  const toast =useToast();
  const [step, setStep] = useState(1)
  const [progress, setProgress] = useState(33.33);
  return (
    <>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form">
        <Progress
          hasStripe
          value={progress}
          mb="5%"
          mx="5%"
          isAnimated></Progress>
        {step === 1 ? <Form1 /> : step === 2 ? <Form2 /> : <Form3 />}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress - 33.33);
                }}
                isDisabled={step === 1}
                colorScheme="teal"
                variant="solid"
                w="7rem"
                mr="5%">
                Back
              </Button>
              <Button
                w="7rem"
                isDisabled={step === 3}
                onClick={() => {
                  setStep(step + 1);
                  if (step === 3) {
                    setProgress(100);
                  } else {
                    setProgress(progress + 33.33);
                  }
                }}
                colorScheme="teal"
                variant="outline">
                Next
              </Button>
            </Flex>
            {step === 3 ? (
              <Button
                w="8rem"
                colorScheme="green"
                variant="solid"
                onClick={() => {
                  toast({
                    title: 'Account created.',
                    description: "Your Order is placed .",
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                  });
                  <Navigate to="/"/>
                }}>
                Place Order
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
    </>
  );
}