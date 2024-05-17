import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducer/productReducer";
import authReducer from "./reducer/authReducer";

export const store = configureStore({
  reducer: {
    products: productReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
