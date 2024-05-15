/* eslint-disable react/prop-types */
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MenuDashboard from "../../components/MenuDashboard/MenuDashboard";
import ContentProfil from "./components/ContentProfil";
const Profil = ({ token, setToken }) => {
  return (
    <>
      <Header token={token} setToken={setToken} />
      <main className="container-md">
        <section className="pt-5 pb-2">
          <div className="flex flex-row justify-center gap-x-5">
            <div className="basis-[17%] h-[35rem] bg-neutral-200">
              <MenuDashboard
                status1={false}
                status2={false}
                status3={false}
                status4={true}
              />
            </div>
            <div className="basis-[54%]">
              <div>
                <ContentProfil />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Profil;
