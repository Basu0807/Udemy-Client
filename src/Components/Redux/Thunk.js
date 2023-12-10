import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk action to fetch data
export const fetchData = createAsyncThunk('data/fetchData', async () => {
  const response = await axios.get('https://udemy-server-h44n.onrender.com/store/allproducts');
  return response.data;
});

// Initial state
const initialState = {
  data: [],
  status: 'idle', // Possible values: 'idle', 'loading', 'succeeded', 'failed'
  error: null,
};

// Slice using createSlice's builder callback
const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default dataSlice.reducer;