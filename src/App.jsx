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
import { useState } from "react";

function App() {
  const tokenLocalStorage = localStorage.getItem("token");
  const [token, setToken] = useState(tokenLocalStorage);
  return (
    <Routes>
      <Route path="/" element={<Layout token={token} setToken={setToken} />} />
      <Route
        path="login"
        element={<Login token={token} setToken={setToken} />}
      />
      <Route path="register" element={<SignUp />} />
      <Route
        path="product/:id"
        element={<DetailProduct token={token} setToken={setToken} />}
      />
      <Route
        path="listProduct/:category"
        element={<ListProductsCategory token={token} />}
      />
      <Route
        path="genre/:name"
        element={<ListProductGenre token={token} setToken={setToken} />}
      />
      <Route
        path="promo/:id"
        element={<ListProductPromo token={token} setToken={setToken} />}
      />
      <Route
        path="pelanggan/dashboard"
        element={<DashboardUser token={token} setToken={setToken} />}
      />
      <Route
        path="pelanggan/dashboard/wishlist"
        element={<Wishlist token={token} setToken={setToken} />}
      />
      <Route
        path="pelanggan/dashboard/alamat"
        element={<Alamat token={token} setToken={setToken} />}
      />
      <Route
        path="pelanggan/dashboard/profil"
        element={<Profil token={token} setToken={setToken} />}
      />
    </Routes>
  );
}

export default App;
