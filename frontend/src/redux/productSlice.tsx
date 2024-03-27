import { createSlice } from "@reduxjs/toolkit";

interface ProductState{
    productList : any[]
}

const initialState:ProductState ={
    productList : []
}

export const productSlice = createSlice({
    name : "product",
    initialState,
    reducers : {
        setDataProduct : (state,action)=>{
            console.log(action)
            state.productList = [...action.payload]
        }
    }
})

export const {setDataProduct} = productSlice.actions
export default productSlice.reducer