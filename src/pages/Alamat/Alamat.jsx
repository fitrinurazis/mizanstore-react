/* eslint-disable react/prop-types */
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MenuDashboard from "../../components/MenuDashboard/MenuDashboard";
import ContentAlamat from "./components/ContentAlamat";

const Alamat = () => {
  return (
    <>
      <Header />
      <main className="container-md">
        <section className="pt-5 pb-2">
          <div className="flex flex-row justify-center gap-x-5">
            <div className="basis-[17%] h-[35rem] bg-neutral-200">
              <MenuDashboard
                status1={false}
                status2={false}
                status3={true}
                status4={false}
              />
            </div>
            <div className="basis-[54%]">
              <div>
                <ContentAlamat />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Alamat;
