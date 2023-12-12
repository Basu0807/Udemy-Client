import { createSlice } from "@reduxjs/toolkit";
 
const SearchSlice =createSlice({
    name:"SearchSlice",
    initialState:{
        SearchData:[],
        keyword:''
    },
    reducers:{
        SearchItem:(state, action) => {
              state.SearchData=action.payload[0]
              state.keyword=action.payload[1]

          },
    }
})

export const {SearchItem}=SearchSlice.actions;
export default SearchSlice.reducer;