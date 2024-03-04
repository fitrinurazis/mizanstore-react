import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import DetailProduct from "./pages/Detail Products/DetailProduct";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Sign Up/SignUp";
import ListProductsCategory from "./pages/List Products/ListProductsCategory";
import ListProductPromo from "./pages/List Products/ListProductPromo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<SignUp />} />
      <Route path="product/:id" element={<DetailProduct />} />
      <Route path="listProduct/:id" element={<ListProductsCategory />} />
      <Route path="promo/:id" element={<ListProductPromo />} />
    </Routes>
  );
}

export default App;
