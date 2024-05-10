/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const MenuDashboard = ({ status1, status2, status3, status4 }) => {
  const [histori, setHistori] = useState(status1);
  const [wishlist, setWishlist] = useState(status2);
  const [alamat, setAlamat] = useState(status3);
  const [profil, setProfil] = useState(status4);

  console.log(histori);

  const navigate = useNavigate();
  return (
    <div className="grid grid-rows-5  text-sm font-normal">
      <div className="font-bold text-xl pl-3">Menu Account</div>
      <div
        className={
          histori == true
            ? "flex items-center h-10 pl-3 text-white bg-red-600 border-[1px] border-black hover:cursor-pointer"
            : "flex items-center h-10 pl-3 hover:cursor-pointer"
        }
        onClick={() => {
          navigate(`/pelanggan/dashboard`);
        }}
      >
        History Order
      </div>
      <div
        className={
          wishlist == true
            ? "flex items-center h-10 pl-3 text-white bg-red-600 border-[1px] border-black hover:cursor-pointer"
            : "flex items-center h-10 pl-3 hover:cursor-pointer"
        }
        onClick={() => {
          navigate("/pelanggan/dashboard/wishlist");
        }}
      >
        Wishlist
      </div>
      <div
        className={
          alamat == true
            ? "flex items-center h-10 pl-3 text-white bg-red-600 border-[1px] border-black hover:cursor-pointer"
            : "flex items-center h-10 pl-3 hover:cursor-pointer"
        }
        onClick={() => {
          navigate("/pelanggan/dashboard/alamat");
        }}
      >
        Daftar Alamat
      </div>
      <div
        className={
          profil == true
            ? "flex items-center h-10 pl-3 text-white bg-red-600 border-[1px] border-black hover:cursor-pointer"
            : "flex items-center h-10 pl-3 hover:cursor-pointer"
        }
        onClick={() => {
          navigate("/pelanggan/dashboard/profil");
        }}
      >
        Profil
      </div>
    </div>
  );
};

export default MenuDashboard;
