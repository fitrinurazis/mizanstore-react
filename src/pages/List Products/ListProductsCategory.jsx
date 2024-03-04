import "./style.css";
import star from "../../assets/img/images-removebg-preview.png";
import image1 from "../../assets/img/card_game_dilan_tanya_kartu_dilan_thumb.jpg";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import DropdownFilter from "./components/DropdownFilter";
const ListProducts = () => {
  return (
    <>
      <Header />
      <main className="flex justify-center">
        <div className="flex items-start justify-around w-[1280px] p-[56px] bg-white list-product">
          <div className="font-sans nav">
            <h1 className="text-lg">Book`s Merchandise</h1>
            <div>
              <ul type="none">
                <li className="pb-[20px] text-[#555]">T-Shirt</li>
                <li className="pb-[20px] text-[#555]">Aksesoris</li>
                <li className="pb-[20px] text-[#555]">CD Pembelajaran</li>
                <li className="pb-[20px] text-[#555]">Merchandise</li>
                <li className="pb-[20px] text-[#555]">Mainan Edukatif</li>
                <li className="pb-[20px] text-[#555]">Umum</li>
              </ul>
            </div>
          </div>
          <div>
            <div className="font-[18px] font-sans pb-[32px] ">
              <h1 className="text-[#ce2e2e] text-xl">
                Book`s Merchandise{" "}
                <span className="text-black">(8 Judul Produk)</span>
              </h1>
            </div>
            <DropdownFilter />
            <div className="flex pb-[24px]">
              <section className="pr-[24px]">
                <div>
                  <img className="h-[200px]" src={image1} alt="Image1" />
                </div>
                <div>
                  <p className="text-[14px] font-bold font-sans text-[rgba(49, 53, 59, 0.96)] opacity-[0.96] w-[200px] h-[32px] whitespace-pre-wrap">
                    CARD GAME DILAN TANYA (Kartu Dilan)
                  </p>
                  <p className="text-[#555] mt-5">Pidi Baiq</p>
                  <div className="text-[12px]">
                    <p className="line-through text-[#555] font-[600] h-[12px]">
                      Rp 65.000
                      <span className="bg-[#ce2e2e] w-[30px] h-[12px] text-center text-white border-[15%]">
                        46.15%
                      </span>
                    </p>
                    <p className="text-[#ce2e2e] font-[600] text-[14px] h-[24px]">
                      Rp 35.000
                    </p>
                  </div>
                </div>
                <div className="flex flex-row ">
                  <img className="h-[10px]" src={star} alt="rate" />
                  <img className="h-[10px]" src={star} alt="rate" />
                  <img className="h-[10px]" src={star} alt="rate" />
                  <img className="h-[10px]" src={star} alt="rate" />
                  <img className="h-[10px]" src={star} alt="rate" />
                  <span className="font-sans text-[12px] text-[#555]">
                    {" "}
                    (1)
                  </span>
                </div>
              </section>
              <section className="pr-[24px]">
                <div>
                  <img className="h-[200px]" src={image1} alt="Image1" />
                </div>
                <div>
                  <p className="text-[14px] font-bold font-sans text-[rgba(49, 53, 59, 0.96)] opacity-[0.96] w-[200px] h-[32px] whitespace-pre-wrap">
                    CARD GAME DILAN TANYA (Kartu Dilan)
                  </p>
                  <p className="text-[#555] mt-5">Pidi Baiq</p>
                  <div className="text-[12px]">
                    <p className="line-through text-[#555] font-[600] h-[12px]">
                      Rp 65.000
                      <span className="bg-[#ce2e2e] w-[30px] h-[12px] text-center text-white border-[15%]">
                        46.15%
                      </span>
                    </p>
                    <p className="text-[#ce2e2e] font-[600] text-[14px] h-[24px]">
                      Rp 35.000
                    </p>
                  </div>
                </div>
                <div className="flex flex-row ">
                  <img className="h-[10px]" src={star} alt="rate" />
                  <img className="h-[10px]" src={star} alt="rate" />
                  <img className="h-[10px]" src={star} alt="rate" />
                  <img className="h-[10px]" src={star} alt="rate" />
                  <img className="h-[10px]" src={star} alt="rate" />
                  <span className="font-sans text-[12px] text-[#555]">
                    {" "}
                    (1)
                  </span>
                </div>
              </section>
              <section className="pr-[24px]">
                <div>
                  <img className="h-[200px]" src={image1} alt="Image1" />
                </div>
                <div>
                  <p className="text-[14px] font-bold font-sans text-[rgba(49, 53, 59, 0.96)] opacity-[0.96] w-[200px] h-[32px] whitespace-pre-wrap">
                    CARD GAME DILAN TANYA (Kartu Dilan)
                  </p>
                  <p className="text-[#555] mt-5">Pidi Baiq</p>
                  <div className="text-[12px]">
                    <p className="line-through text-[#555] font-[600] h-[12px]">
                      Rp 65.000
                      <span className="bg-[#ce2e2e] w-[30px] h-[12px] text-center text-white border-[15%]">
                        46.15%
                      </span>
                    </p>
                    <p className="text-[#ce2e2e] font-[600] text-[14px] h-[24px]">
                      Rp 35.000
                    </p>
                  </div>
                </div>
                <div className="flex flex-row ">
                  <img className="h-[10px]" src={star} alt="rate" />
                  <img className="h-[10px]" src={star} alt="rate" />
                  <img className="h-[10px]" src={star} alt="rate" />
                  <img className="h-[10px]" src={star} alt="rate" />
                  <img className="h-[10px]" src={star} alt="rate" />
                  <span className="font-sans text-[12px] text-[#555]">
                    {" "}
                    (1)
                  </span>
                </div>
              </section>
              <section className="pr-[24px]">
                <div>
                  <img className="h-[200px]" src={image1} alt="Image1" />
                </div>
                <div>
                  <p className="text-[14px] font-bold font-sans text-[rgba(49, 53, 59, 0.96)] opacity-[0.96] w-[200px] h-[32px] whitespace-pre-wrap">
                    CARD GAME DILAN TANYA (Kartu Dilan)
                  </p>
                  <p className="text-[#555] mt-5">Pidi Baiq</p>
                  <div className="text-[12px]">
                    <p className="line-through text-[#555] font-[600] h-[12px]">
                      Rp 65.000
                      <span className="bg-[#ce2e2e] w-[30px] h-[12px] text-center text-white border-[15%]">
                        46.15%
                      </span>
                    </p>
                    <p className="text-[#ce2e2e] font-[600] text-[14px] h-[24px]">
                      Rp 35.000
                    </p>
                  </div>
                </div>
                <div className="flex flex-row ">
                  <img className="h-[10px]" src={star} alt="rate" />
                  <img className="h-[10px]" src={star} alt="rate" />
                  <img className="h-[10px]" src={star} alt="rate" />
                  <img className="h-[10px]" src={star} alt="rate" />
                  <img className="h-[10px]" src={star} alt="rate" />
                  <span className="font-sans text-[12px] text-[#555]">
                    {" "}
                    (1)
                  </span>
                </div>
              </section>
            </div>
            <div className="flex pb-[24px]">
              <section className="pr-[24px]">
                <div>
                  <img className="h-[200px]" src={image1} alt="Image1" />
                </div>
                <div>
                  <p className="text-[14px] font-bold font-sans text-[rgba(49, 53, 59, 0.96)] opacity-[0.96] w-[200px] h-[32px] whitespace-pre-wrap">
                    CARD GAME DILAN TANYA (Kartu Dilan)
                  </p>
                  <span className="text-[#555]">Pidi Baiq</span>
                  <span className="text-[12px]">
                    <p className="line-through text-[#555] font-[600] h-[12px]">
                      Rp 65.000
                      <span className="bg-[#ce2e2e] w-[30px] h-[12px] text-center text-white border-[15%]">
                        46.15%
                      </span>
                    </p>
                    <p className="text-[#ce2e2e] font-[600] text-[14px] h-[24px]">
                      Rp 35.000
                    </p>
                  </span>
                </div>
                <div className="flex flex-row ">
                  <img className="h-[10px]" src={star} alt="rate" />
                  <img className="h-[10px]" src={star} alt="rate" />
                  <img className="h-[10px]" src={star} alt="rate" />
                  <img className="h-[10px]" src={star} alt="rate" />
                  <img className="h-[10px]" src={star} alt="rate" />
                  <span className="font-sans text-[12px] text-[#555]">
                    {" "}
                    (1)
                  </span>
                </div>
              </section>
              <section className="pr-[24px]">
                <div>
                  <img className="h-[200px]" src={image1} alt="Image1" />
                </div>
                <div>
                  <p className="text-[14px] font-bold font-sans text-[rgba(49, 53, 59, 0.96)] opacity-[0.96] w-[200px] h-[32px] whitespace-pre-wrap">
                    CARD GAME DILAN TANYA (Kartu Dilan)
                  </p>
                  <span className="text-[#555]">Pidi Baiq</span>
                  <span className="text-[12px]">
                    <p className="line-through text-[#555] font-[600] h-[12px]">
                      Rp 65.000
                      <span className="bg-[#ce2e2e] w-[30px] h-[12px] text-center text-white border-[15%]">
                        46.15%
                      </span>
                    </p>
                    <p className="text-[#ce2e2e] font-[600] text-[14px] h-[24px]">
                      Rp 35.000
                    </p>
                  </span>
                </div>
                <div className="flex flex-row ">
                  <img className="h-[10px]" src={star} alt="rate" />
                  <img className="h-[10px]" src={star} alt="rate" />
                  <img className="h-[10px]" src={star} alt="rate" />
                  <img className="h-[10px]" src={star} alt="rate" />
                  <img className="h-[10px]" src={star} alt="rate" />
                  <span className="font-sans text-[12px] text-[#555]">
                    {" "}
                    (1)
                  </span>
                </div>
              </section>
              <section className="pr-[24px]">
                <div>
                  <img className="h-[200px]" src={image1} alt="Image1" />
                </div>
                <div>
                  <p className="text-[14px] font-bold font-sans text-[rgba(49, 53, 59, 0.96)] opacity-[0.96] w-[200px] h-[32px] whitespace-pre-wrap">
                    CARD GAME DILAN TANYA (Kartu Dilan)
                  </p>
                  <span className="text-[#555]">Pidi Baiq</span>
                  <span className="text-[12px]">
                    <p className="line-through text-[#555] font-[600] h-[12px]">
                      Rp 65.000
                      <span className="bg-[#ce2e2e] w-[30px] h-[12px] text-center text-white border-[15%]">
                        46.15%
                      </span>
                    </p>
                    <p className="text-[#ce2e2e] font-[600] text-[14px] h-[24px]">
                      Rp 35.000
                    </p>
                  </span>
                </div>
                <div className="flex flex-row ">
                  <img className="h-[10px]" src={star} alt="rate" />
                  <img className="h-[10px]" src={star} alt="rate" />
                  <img className="h-[10px]" src={star} alt="rate" />
                  <img className="h-[10px]" src={star} alt="rate" />
                  <img className="h-[10px]" src={star} alt="rate" />
                  <span className="font-sans text-[12px] text-[#555]">
                    {" "}
                    (1)
                  </span>
                </div>
              </section>
              <section className="pr-[24px]">
                <div>
                  <img className="h-[200px]" src={image1} alt="Image1" />
                </div>
                <div>
                  <p className="text-[14px] font-bold font-sans text-[rgba(49, 53, 59, 0.96)] opacity-[0.96] w-[200px] h-[32px] whitespace-pre-wrap">
                    CARD GAME DILAN TANYA (Kartu Dilan)
                  </p>
                  <span className="text-[#555]">Pidi Baiq</span>
                  <span className="text-[12px]">
                    <p className="line-through text-[#555] font-[600] h-[12px]">
                      Rp 65.000
                      <span className="bg-[#ce2e2e] w-[30px] h-[12px] text-center text-white border-[15%]">
                        46.15%
                      </span>
                    </p>
                    <p className="text-[#ce2e2e] font-[600] text-[14px] h-[24px]">
                      Rp 35.000
                    </p>
                  </span>
                </div>
                <div className="flex flex-row ">
                  <img className="h-[10px]" src={star} alt="rate" />
                  <img className="h-[10px]" src={star} alt="rate" />
                  <img className="h-[10px]" src={star} alt="rate" />
                  <img className="h-[10px]" src={star} alt="rate" />
                  <img className="h-[10px]" src={star} alt="rate" />
                  <span className="font-sans text-[12px] text-[#555]">
                    {" "}
                    (1)
                  </span>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ListProducts;
