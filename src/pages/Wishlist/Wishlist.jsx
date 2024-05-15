/* eslint-disable react/prop-types */
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

import MenuDashboard from "../../components/MenuDashboard/MenuDashboard";
import ContentWishlist from "./components/ContentWishlist";
const Wishlist = ({ token, setToken }) => {
  return (
    <>
      <Header token={token} setToken={setToken} />
      <main className="container-md">
        <section className="pt-5 pb-2">
          <div className="flex flex-row justify-center gap-x-5">
            <div className="basis-[17%] h-[35rem] bg-neutral-200">
              <MenuDashboard
                status1={false}
                status2={true}
                status3={false}
                status4={false}
              />
            </div>
            <div className="basis-[54%]">
              <div>
                <ContentWishlist />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Wishlist;
