import { configureStore } from "@reduxjs/toolkit";
import BackSlice from "./BackSlice";


export const store=configureStore({
    reducer:{
        // reducer should key value pair 
        backk:BackSlice
    }
})