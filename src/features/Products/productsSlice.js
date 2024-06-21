import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchAllProducts, fetchProductsByFilter } from './productsAPI';

const initialState = {
  products: [],
  status: 'idle',
};

// export const fetchAllProductsAsync = createAsyncThunk(
//   'products/fetchAllProducts',
//   async () => {
//     const response = await fetchAllProducts();
//     // The value we return becomes the `fulfilled` action payload
//     return response.data;
//   }
// );
export const fetchAllProductsAsyncByFilter = createAsyncThunk(
  'products/fetchAllProductsAsyncByFilter',
  async ({filter,sort,pagination}) => {
    const response = await fetchProductsByFilter(filter,sort,pagination);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      // .addCase(fetchAllProductsAsync.pending, (state) => {
      //   state.status = 'loading';
      // })
      // .addCase(fetchAllProductsAsync.fulfilled, (state, action) => {
      //   state.status = 'idle';
      //   state.products = action.payload;
      // })
      .addCase(fetchAllProductsAsyncByFilter.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllProductsAsyncByFilter.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload;
      });
  },
});

export const { increment } = productsSlice.actions;

export const selectAllProducts = (state) => state.product.products;

export default productsSlice.reducer;
