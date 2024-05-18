import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MenuDashboard from "../../components/MenuDashboard/MenuDashboard";
import ContentTambahAlamat from "./components/ContentTambahAlamat";
const TambahAlamat = () => {
  return (
    <>
      <Header />
      <main className="container-md">
        <section className="pt-5 pb-2">
          <div className="flex flex-row justify-center gap-x-5">
            <div className="basis-[17%] h-[35rem] bg-neutral-200">
              <MenuDashboard />
            </div>
            <div className="basis-[54%]">
              <div>
                <ContentTambahAlamat />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default TambahAlamat;
