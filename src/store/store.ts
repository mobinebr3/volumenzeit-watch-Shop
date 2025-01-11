import ProductsSlice from "./redux/Formaddproducts";
import getProductsSlice from "./redux/products";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    form: ProductsSlice,
    prod: getProductsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
