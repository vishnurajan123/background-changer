import { createSlice } from "@reduxjs/toolkit";

const BackSlice=createSlice({
    name:"back",
    initialState:{
        count:0
    },
    reducers:{
        red:(state)=>{
            state.count=0
        },
        black:(state)=>{
            state.count=2
        },
        green:(state)=>{
            state.count=3
        },
        purple:(state)=>{
            state.count=4
        }
    
        
    }
})

export const {red,black,green,purple}=BackSlice.actions
export default BackSlice.reducer