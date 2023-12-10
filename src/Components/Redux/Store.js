import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import SearchSlice from "./SearchSlice";
import dataReducer from '../Redux/Thunk'

 export const Store =configureStore({
    reducer:{
        InDe:CartSlice,
        Search:SearchSlice,
        data: dataReducer,
    }
 })