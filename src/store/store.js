import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../features/Products/productsSlice";

export const store = configureStore({
    reducer: {
        product: productsSlice,
    },
});
