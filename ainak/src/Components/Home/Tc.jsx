import { Text } from '@chakra-ui/react'
import React from 'react'
import "./Tc.css"
import {AiOutlineCheck} from "react-icons/ai"
const Tc = () => {
  return (
    <div>
      <Text textDecoration="underline" mt={20} textAlign={'center'} fontSize={'2xl'}>Terms And Condition - The Eye-Conic Sale</Text>
      <div className="tc">
        <Text>Shop exclusive deals on eyeglasses, sunglasses, contact lenses, computer glasses and contact lens solution. Get attractive discounts on top brands like Vincent Chase, John Jacobs, Lenskart Air, Hooper, Lenskart BLU, Aquacolor, Aqualens, FOSSIL and New Balance.</Text>
        <br />
        <Text>The offer period is from 15 December, 2022 - 31 December, 2022</Text>
        <br />
        <Text className='gold' fontWeight={'bold'} color='#DD6B20'>GET EXTRA UPTO 60% OFF. Voucher: EYECON</Text>
        <br />
        <Text> ✓ Extra 60% is valid on shopping of Vincent Chase Online, Lenskart Air Online, Lenskart BLU, Kids Glasses & Hooper Sunglasses.</Text><br />
        <Text> ✓ Extra 40% is valid on shopping of John Jacobs.
</Text><br />
        <Text> ✓ The discount will not be automatically applied. Can only be availed at checkout via the voucher code.
</Text><br />
        <Text> ✓ If 1 product is from sale range & the 2nd item is from the Buy 1 Get 1 range, Buy 1 Get 1 Free with Gold Membership will be applicable.
</Text><br />
        <Text> ✓ The discount on 2 sale items can be availed via use of voucher only. Discount will not be automatically applied.
</Text><br />
        <Text> ✓ Only one offer can be applied on a single purchase.
</Text><br />
<Text className='gold' fontWeight={'bold'} color='#DD6B20'>BUY 1 GET 1 FREE WITH LENSKART GOLD MEMBERSHIP
</Text><br />
<Text>✓ Offer is valid on top brands on Lenskart - Vincent Chase, Lenskart Air, Vincent Chase Kids, Lenskart Junior, Hooper, John Jacobs, New Balance and FOSSIL.
</Text><br/>
<Text>✓ On adding any 2 products in the cart, the cheaper product will be free.
</Text><br/>
<Text>✓ The Buy 1 Get 1 Free offer can be availed on 2 orders per month & 12 orders per year for every individual mobile number.
</Text><br/>
<Text>✓ To avail Buy 1 Get 1 Free, both products need to be added to cart.
</Text><br/>
<Text>✓ Offer is only valid when 2 products are purchased in the same order. Member cannot buy 1 product and claim a free product later.
</Text><br/>
<Text>✓ Lenskart Gold Membership cannot be returned or refunded.
</Text><br/>

      </div>
      <div className="tc2">
        <Text ml={10} fontSize={'4xl'}>Lenskart Offers - Upto 60% off Eyewear, Sunglasses , Contact lenses, Kids</Text>
        <br />
        <Text ml={5} fontWeight={'thin'} fontSize={21}>Offers: 1) Vincent Chase, Lenskart Air - Upto 60% Off 2) Computer Glasses - Upto 50% Off 3) Contact Lenses - Free Solution 4) Eyeglasses & Sunglasses - Buy 1 Get 1 Free 5) John Jacobs - Upto 50% Off</Text>
      </div>
    </div>
  )
}

export default Tc
