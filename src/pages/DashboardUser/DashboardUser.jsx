/* eslint-disable react/prop-types */
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import HistoriOrder from "../HistoriOrder/HistoriOrder";
import MenuDashboard from "../../components/MenuDashboard/MenuDashboard";

const DashboardUser = () => {
  return (
    <>
      <Header />
      <main className="container-md">
        <section className="pt-5 pb-2">
          <div className="flex flex-row justify-center gap-x-5">
            <div className="basis-[17%] h-[35rem] bg-neutral-200">
              <MenuDashboard
                status1={true}
                status2={false}
                status3={false}
                status4={false}
              />
            </div>
            <div className="basis-[54%]">
              <div>
                <HistoriOrder />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default DashboardUser;
