import { useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const DashboardUser = () => {
  const [histori, setHistori] = useState(true);
  const [wishlist, setWishlist] = useState(false);
  const [alamat, setAlamat] = useState(false);
  const [profil, setProfil] = useState(false);

  return (
    <>
      <Header />
      <main className="container-md">
        <section className="pt-5 pb-2">
          <div className="flex flex-row justify-center gap-x-5">
            <div className="basis-[17%] h-[35rem] bg-neutral-200">
              <div className="grid grid-rows-5  text-sm font-normal">
                <div className="font-bold text-xl pl-3">Menu Account</div>
                <div
                  className={
                    histori == true
                      ? "flex items-center h-10 pl-3 text-white bg-red-600 border-[1px] border-black hover:cursor-pointer"
                      : "flex items-center h-10 pl-3 hover:cursor-pointer"
                  }
                  onClick={() => {
                    setHistori(true);
                    setWishlist(false);
                    setAlamat(false);
                    setProfil(false);
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
                    setHistori(false);
                    setWishlist(true);
                    setAlamat(false);
                    setProfil(false);
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
                    setHistori(false);
                    setWishlist(false);
                    setAlamat(true);
                    setProfil(false);
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
                    setHistori(false);
                    setWishlist(false);
                    setAlamat(false);
                    setProfil(true);
                  }}
                >
                  Profil
                </div>
              </div>
            </div>
            <div className="basis-[54%]">
              <div>Content</div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default DashboardUser;
