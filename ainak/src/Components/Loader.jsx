import React from 'react'
import { Spinner } from '@chakra-ui/react'

const Loader = () => {
  return (
    <div style={{marginLeft:"60%",marginTop:"50%"}}>
        <Spinner
  thickness='75px'
  speed='0.5s'
  emptyColor='gray.200'
  color='blue.500'
  size='50px'
/>
    </div>
  )
}

export default Loader