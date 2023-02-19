import {GET_DATA_LOADING,GET_DATA_SUCCESS,GET_DATA_FAILURE} from "./actionTypes";


const initialState={
    isLoading:false,
    data:[],
    isError:false,
    isAuth:false
}

export const reducer=(state=initialState,{type,payload})=>{
    switch(type){
       case GET_DATA_LOADING : 
       return {
           ...state,
           isLoading:true
       }
       case GET_DATA_SUCCESS : 
       return {
           ...state,
           isLoading:false,
           data:payload,
           isAuth:true
       }
       case GET_DATA_FAILURE : 
       return {
           ...state,
           isLoading:false,
           isAuth:false,
           isError:true
       }
      default :
      return state
    }
   }

