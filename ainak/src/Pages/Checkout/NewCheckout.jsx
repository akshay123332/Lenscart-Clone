import { Box, Button, Flex, Image, Input, Radio, RadioGroup, Select, Stack, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ProductCard } from "./Productcard";
import { useToast } from '@chakra-ui/react'
import { Navigate } from "react-router-dom";
import Navabr from "../../changed navbar/Navbar/Navabr";
import axios from "axios";


// const t=JSON.parse(localStorage.getItem("total"))||0
// const l=JSON.parse(localStorage.getItem("length"))||0


 const Checkout = () => {
    const [value, setValue] = React.useState('')
    const [fname, setfname] = useState("")
    const [Lname, setLname] = useState("")
    const [email, setEmail] = useState("")
    const [address1, setAddress1] = useState("")
    const [address2, setAddress2] = useState("")
    const [state, setState] = useState("")
    const [country, setfCountry] = useState("")
    const [mobile, setMobile] = useState('')
    const [district, setDistrict] = useState('')
    const [zip, setZip] = useState('')
    const toast=useToast()
    const Navigate=useNavigate()
    let total=0
    let length=0
    const [data,setdata]=useState([])

    const handleSubmit=()=>{
        if(value!==""&&fname!==""&&Lname!==""&&email!==""&&address1!==""&&state!==""&&country!==""&&mobile!==""&&district!==""&&zip!==""){
          let m=mobile.split("").map(Number)   
           let z=zip.split("").map(Number)
           let i=email.indexOf("@")
           let em=email.slice(i,email.length)
    
          if(mobile.length==10 && zip.length==6){
           if(m.includes(NaN)){
            
            toast({
              position: 'top',
              title: 'Status',
              description: "Mobile number should be number and 10 digit.",
              status: 'error',
              duration: 9000,
              isClosable: true,
            })
           }
           else if(i==-1 || em!=="@gmail.com"){
            toast({
              position: 'top',
              title: 'Status',
              description: "Email is not correct.",
              status: 'error',
              duration: 9000,
              isClosable: true,
            })
            
           }
          else if(z.includes(NaN)){
            toast({
              position: 'top',
              title: 'Status',
              description: "Zip/Postal Code should be number and 6 digit.",
              status: 'error',
              duration: 9000,
              isClosable: true,
            })
           }
           else{
            Navigate('/payment')
           }
          }
        }
        else{
          toast({
            position: 'top',
            title: 'Status',
            description: "Please fill all mendatory fields.",
            status: 'error',
            duration: 9000,
            isClosable: true,
          })
        }
    }
    const getdata=()=>{
      axios.get(`https://zara-mock-cw.onrender.com/cart`).then((res)=>{
          setdata(res.data)
          console.log(data)
      })
      .catch((err)=>{
          console.log(err)
      })
  }
    
useEffect(()=>{
  getdata()
},[])

for(let el of data){
  total+=el.price;
  length++

}

    return (
        <div>
          <Navabr/>
        <Stack
            direction={["column", "row"]}
            w={["90%", "80%"]}
            m="auto"
            spacing={4}
            pb='3%'
            // p='2% .5%'
            // border='1px solid gray'
            // borderRadius={'10px'}
            justify='space-around'
            align={'top'}
        >
          
            <Stack className="form" w={['90%',"100%"]} justify='center' align={'center'} 
            p='4% 2%'
            border='1px solid gray'
            spacing={8}
            borderRadius='10px'
            boxSizing="border-box"
           
          
            
            >
                <Stack direction={["column", "row"]} w="100%"  spacing={4} justify='center'>
                    <Input type={"text"} placeholder="First Name *" 
                      onChange={(e)=>{
                        setfname(e.target.value)
                      }}
                    />
                    <Input type={"text"} placeholder="Last Name *"
                       onChange={(e)=>{
                        setLname(e.target.value)
                      }}
                    />
                </Stack>
                <Stack direction={["column", "row"]} w="100%"  spacing={8}>

                    <RadioGroup onChange={setValue} value={value}>
                        <Stack direction={['column', 'row']} fontWeight='500' color={"gray.400"} fontSize={["12px",'14px']} >
                            <Text mr={['0','1%']} textAlign={"start"}  > Gender</Text>
                            <Radio value='male' fontSize={["10px",'12px']}>Male</Radio>
                            <Radio value='female' fontSize={["10px",'12px']}>Female</Radio>

                        </Stack>
                    </RadioGroup>
                </Stack>
                <Stack direction={["column", "row"]} w="100%" mb="5%" spacing={4}>
                    <Input type={"tel"} placeholder="Mobile *" maxLength={10}
                       onChange={(e)=>{
                        setMobile(e.target.value)
                      }}
                    />
                    <Input type={'email'} required placeholder="Email *" 
                        onChange={(e)=>{
                            setEmail(e.target.value)
                          }}
                    />
                </Stack>
                <Stack direction={["column", "row"]} w="100%" mb="5%" spacing={4}>
                    <Input type={"text"} placeholder="Address Line 1 *"
                     onChange={(e)=>{
                        setAddress1(e.target.value)
                      }}
                    />
                    <Input type={"text"} placeholder="Address Line 2"
                      onChange={(e)=>{
                        setAddress2(e.target.value)
                      }}
                    />
                </Stack>
                <Stack direction={["column", "row"]} w="100%" mb="5%" spacing={4}>
                    <Input type={"pin"} placeholder="Zip/Postal Code *" maxLength={6} 
                       onChange={(e)=>{
                        setZip(e.target.value)
                      }}
                    />
                    <Input type={"text"} placeholder="City/District *" 
                        onChange={(e)=>{
                            setDistrict(e.target.value)
                          }}
                    />
                </Stack>
                <Stack direction={["column", "row"]} w="100%" mb="5%" spacing={4} fontWeight='600' color={"gray.400"}>
                    <Select placeholder="Country *"
                        onChange={(e)=>{
                        setfCountry(e.target.value)
                      }}
                    >
                        <option value="india">India</option>
                        {/* <option value="usa">USA</option>
                        <option value="japan">Japan</option>
                        <option value="france">France</option>
                        <option value="china">China</option>
                        <option value="dubai">Dubai</option> */}
                    </Select>
                    <Select placeholder="State *"
                       onChange={(e)=>{
                        setState(e.target.value)
                      }}
                     
                    >

                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                        <option value="Assam">Assam</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Chhattisgarh">Chhattisgarh</option>
                        <option value="Goa">Goa</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="Haryana">Haryana</option>
                        <option value="Himachal Pradesh">Himachal Pradesh	</option>
                        <option value="Jharkhand">Himachal Pradesh	</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Kerala">Kerala</option>
                        <option value="Madhya Pradesh">Madhya Pradesh	</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Manipur">Manipur</option>
                        <option value="Meghalaya">Meghalaya</option>
                        <option value="Mizoram">Mizoram</option>
                        <option value="Nagaland">Nagaland</option>
                        <option value="Odisha">Odisha</option>
                        <option value="Punjab">Punjab</option>
                        <option value="Rajasthan">Rajasthan</option>
                        <option value="Sikkim">Sikkim</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Telangana">Telangana</option>
                        <option value="Tripura">Tripura</option>
                        <option value="Uttar Pradesh">Uttar Pradesh	</option>
                        <option value="Uttarakhand">Uttarakhand	</option>
                        <option value="West Bengal">West Bengal	</option>
                    </Select>
                </Stack>
                <Stack w="100%" pt='2%'>
                    <Button colorScheme='teal' size='lg' p='2px 0'
                      onClick={()=>{
                        handleSubmit()
                        console.log({
                        address1,address2,mobile,zip,country,state,value,district
                        })
                      }}
                    >
                        Continue
                    </Button>
                </Stack>

            </Stack>
            <Box className="products" border={'1px solid gray'} h='auto' borderRadius={'10px'}>
              <Flex  justify={'space-between'} align='center' borderRadius={'10px'} borderBottomRadius="none" px='5px' fontWeight={'700'} bg='gray.800' color='#fff' py='5px' fontSize={['12px','16px']}>
                <Text>SHOPPING CART</Text>
                <Text>ITEM {length}</Text>
              </Flex>
             <Box><ProductCard></ProductCard></Box>
             <Link to='/'>
             <Box className="img" mt='3%'>
             <Image src="https://static1.lenskart.com/media/desktop/img/Feb23/holi/cart-banner/CART%20BANNER%20107.jpg"></Image>
             </Box>
             </Link>
             <Stack
             hidden={total===0}
             direction={"row"} justify="space-between" align={"center"} py='10px'px='15px' fontWeight='900' mt='5%'bg="gray.200" >
              <Text>ORDER TOTAL</Text>
              <Text color='teal.600' >₹{total}</Text>

             </Stack>
            </Box>
        </Stack>
        </div>
    );
};

export default Checkout