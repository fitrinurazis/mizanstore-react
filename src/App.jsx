import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import DetailProduct from "./pages/DetailProducts/DetailProduct";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import ListProductsCategory from "./pages/ListProducts/ListProductsCategory";
import ListProductPromo from "./pages/ListProducts/ListProductPromo";
import ListProductGenre from "./pages/ListProducts/ListProductGenre";
import DashboardUser from "./pages/DashboardUser/DashboardUser";
import Wishlist from "./pages/Wishlist/Wishlist";
import Alamat from "./pages/Alamat/Alamat";
import Profil from "./pages/Profil/Profil";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<SignUp />} />
      <Route path="product/:id" element={<DetailProduct />} />
      <Route path="listProduct/:category" element={<ListProductsCategory />} />
      <Route path="genre/:name" element={<ListProductGenre />} />
      <Route path="promo/:id" element={<ListProductPromo />} />
      <Route path="pelanggan/dashboard" element={<DashboardUser />} />
      <Route path="pelanggan/dashboard/wishlist" element={<Wishlist />} />
      <Route path="pelanggan/dashboard/alamat" element={<Alamat />} />
      <Route path="pelanggan/dashboard/profil" element={<Profil />} />
    </Routes>
  );
}

export default App;
