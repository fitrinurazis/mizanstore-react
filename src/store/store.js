import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducer/productReducer";
import authReducer from "./reducer/authReducer";
import pelangganReducer from "./reducer/pelangganReducer";

export const store = configureStore({
  reducer: {
    products: productReducer,
    auth: authReducer,
    pelanggan: pelangganReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
