import { createSlice } from "@reduxjs/toolkit";
 
const SearchSlice =createSlice({
    name:"SearchSlice",
    initialState:[],
    reducers:{
        SearchItem:(state, action) => {
          return  state=action.payload
          },
    }
})

export const {SearchItem}=SearchSlice.actions;
export default SearchSlice.reducer;