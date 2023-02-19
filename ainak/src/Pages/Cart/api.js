
import  axios  from 'axios';



export const deleteProduct=async(id)=>{
    await axios.delete(`https://rich-gray-scarab-fez.cyclic.app/cart/${id}`)
  }