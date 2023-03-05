import {
    Box,
    Button,
    Checkbox,
    Flex,
    Image,
    Input,
   
    ListItem,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Stack,
    Text,
    UnorderedList,
    useDisclosure,
  } from "@chakra-ui/react";
  import { useToast } from '@chakra-ui/react'
  import React from "react";
  import { useState } from "react";
  import image from "./payment.png";
  import img from "./option.png";
  import nav from "../Checkout/Nav.png"
  import Result from "./Result";
  import { Link } from "react-router-dom";
  export const Payment = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [cardNumber, setCardNUmber] = React.useState("");
    const [name, setname] = useState("");
    const [cvv, setLcvv] = useState("");
    const [date, setDate] = useState("");
    const [checked, setCheck] = useState(false);
    const toast = useToast()
    const [success,setsuccess]=useState(false)
  
    const handleSubmit = () => {
      if (cardNumber !== "" && date !== "" && name !== "" && cvv !== "") {
        if(cardNumber.length===16 && cvv.length==3){
          toast({
            position: 'top',
            title: 'Status',
            description: "Payment Successfull.",
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
          setsuccess(true)
        }
        else if(cardNumber.length!==16){
          toast({
          
            position: 'top',
            title: 'Error',
            description: "Card Number Should be 16 digits .",
            status: 'error',
            duration: 9000,
            isClosable: true,
          })
        }
        else{
          toast({
           
            position: 'top',
            title: 'Error',
            description: "CVV Number Should be 3 digits .",
            status: 'error',
            duration: 9000,
            isClosable: true,
          })
        }
      } else {
        toast({
          position: 'top',
          title: 'Error',
          description: "Please fill all mendatory fields.",
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
      }
    };
  
    return (
      <>
      
      <Box className="nav" h={['30px','45px']} w='100%' position="fixed" top="0" zIndex={'3'}>
          <Link to='/'>
          <Image src={nav} h='100%'  w='100%'></Image>
          </Link>
        </Box>
        {success?<Result/>:
        
          <Box w={["90%", "60%"]} m='auto' pb='5%' mt='5%'>
        
        <Text
          borderRadius={'5px'}
          bg="teal"
          mt='2%'
          p="8px 0px"
          textAlign={"center"}
          align={"center"}
          justify="center"
          color="#fff"
          borderBottomRadius="0px"
        >
          PAYMENT OPTIONS
        </Text>
  
        <Stack 
          direction={["column", "row"]}
          m="auto"
          spacing={8}
          // p='2% .5%'
          border='1px solid gray'
          borderTop={"none"}
          borderRadius={'10px'}
          borderTopRadius="0px"
          justify="center"
          align={"center"}
        >
          {/* <Image src={"./Screenshot 2023-03-04 094413.png"}></Image> */}
          <Image src={img} borderRadius='10px' m='auto' />
  
          <Stack
            className="form"
            justify="center"
            align={"center"}
            p="4% 2%"
            // border='1px solid gray'
            spacing={8}
            borderRadius="10px"
            boxSizing="border-box"
          >
            <Image src={image} />
            <Stack
              direction={["column", "row"]}
              w="100%"
              spacing={4}
              justify="center"
            >
              <Input
              maxLength='16'
                type={'tel'}
                placeholder="Enter Card Number *"
                
                onChange={(e) => {
                  setCardNUmber(e.target.value);
                }}
              />
            </Stack>
            <Stack direction={["column", "row"]} w="100%" mb="5%" spacing={4}>
              <Input
                type={"text"}
                placeholder="MM/YYYY *"
                onFocus={(e) => {
                  e.target.type = "month";
                }}
                onBlur={(e) => {
                  e.target.type = "text";
                }}
                onChange={(e) => {
                  setDate(e.target.value);
                }}
              />
  
              <Input
                placeholder="CVV *"
                type="pin"
                id="pin"
                name="pin"
                maxLength="3"
                onChange={(e) => {
                  setLcvv(e.target.value);
                }}
              />
  
              {/* <input type="text" id="pin" name="pin" maxlength="4" size="4"/> */}
            </Stack>
  
            <Stack direction={["column", "row"]} w="100%" mb="5%" spacing={4}>
              <Input
                type={"text"}
                placeholder="Card Holder Name *"
                onChange={(e) => {
                  setname(e.target.value);
                }}
              />
            </Stack>
            <Stack
              direction={["column", "row"]}
              w="100%"
              mb="5%"
              spacing={4}
              fontSize="12px"
              fontWeight={"600"}
              color="gray"
            >
              <Checkbox
                value={"checked"}
                isChecked={checked}
                onChange={(e) => {
                  setCheck(e.target.checked);
                }}
              ></Checkbox>
              <Text>
                Secure this card as per RBI guidelines{" "}
                <span
                  onClick={onOpen}
                  style={{ color: "aqua", cursor: "pointer" }}
                >
                  learn more
                </span>
                <Modal isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent P="10%">
                    <Image
                      maxW="40%"
                      m="auto"
                      mt="5%"
                      src="https://static.lenskart.com/media/desktop/prod-assets/in/secure_card/secure_card-e6e0f63aaa661b2160181080c4dcf49e.svg"
                    ></Image>
                    <ModalHeader>
                      Secure your card with RBI guidelines
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      <Text>
                        As per RBI guidelines we need to add an additional layer
                        to secure your card. Agreeing to this means:
                      </Text>
                      <UnorderedList>
                        <ListItem>
                          Securing this card and avoiding unauthorised use.
                        </ListItem>
                        <ListItem>
                          Avoiding entering card details everytime you transact on
                          Lenskart using this card
                        </ListItem>
                      </UnorderedList>
                    </ModalBody>
  
                    <ModalFooter>
                      <Button colorScheme="blue" mr={3} onClick={onClose}>
                        OKAY GOT IT!
                      </Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              </Text>
            </Stack>
  
            <Stack w="100%" pt="2%">
              <Button
                colorScheme="teal"
                size="lg"
                p="2px 0"
                isDisabled={checked ? false : true}
                onClick={() => {
                  handleSubmit();
                }}
              >
                PLACE ORDER
              </Button>
            </Stack>
          </Stack>
          <Box className="products"></Box>
        </Stack>
  
        <Box className="foot" m="auto" mt="5%" borderTop={"1px solid gray"} pt='5px'>
          <Stack direction={"row"} justify="space-between" mb='2%'>
            <Text>Lenskart Assurance</Text>
            {/* <a href="">Cancellation Policy </a> */}
          </Stack>
          <Box className="image" >
            <Image src="https://static1.lenskart.com/media/desktop/img/all-assurance-offering.png"></Image>
          </Box>
        </Box>
      </Box>
  }
    </>
    );
  };
  
  