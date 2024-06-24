import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchAllcategories, fetchProductsByFilter,fetchAllBrands } from './productsAPI';

const initialState = {
  products: [],
  categories: [],
  brands: [],
  status: 'idle',
};

export const fetchAllCategoriesAsync = createAsyncThunk(
  'products/fetchAllcategories',
  async () => {
    const response = await fetchAllcategories();
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
export const fetchAllBrandsAsync = createAsyncThunk(
  'products/fetchAllBrands',
  async () => {
    const response = await fetchAllBrands();
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
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
      .addCase(fetchAllCategoriesAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllCategoriesAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.categories = action.payload;
      })
      .addCase(fetchAllBrandsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllBrandsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.brands = action.payload;
      })
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
export const selectAllcategories = (state) => state.product.categories;
export const selectAllbrands = (state) => state.product.brands;

export default productsSlice.reducer;
