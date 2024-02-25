import IncrementDecrementButton from "../../components/IncrementDecrementButton/IncrementDecrementButton";
import detail from "../../JSON/details.json";
import iconFacebook from "../../assets/icon/facebook.png";
import iconWhatsapp from "../../assets/icon/whatsapp.png";
import iconTwitter from "../../assets/icon/twitter.png";
import iconLine from "../../assets/icon/logoLine.png";
import iconLinkedin from "../../assets/icon/linkedin.png";
import { useParams } from "react-router-dom";
import { useState } from "react";

const DetailProduct = () => {
  const params = useParams();
  const [clickDesk, setClickDesk] = useState(true);
  const [clickSpek, setClickSpek] = useState(false);
  const [clickUlas, setClickUlas] = useState(false);
  const dataProductParams = detail.detail.filter(
    (item) => item.idProduct == params.id
  );

  const getDiskon = dataProductParams.map((item) => item.discon);
  const getHarga = dataProductParams.map((item) => item.price);
  const diskon = () => {
    let diskon = (getDiskon / 100) * getHarga;
    const hargaDiskon = getHarga - diskon;
    return hargaDiskon;
  };

  return (
    <main className="mt-44 container-md md:mt-0">
      {dataProductParams.map((item) => {
        return (
          <>
            <div
              className="h-full mx-0 bg-white rounded-sm md:mx-10 lg:mx-40"
              key={item}
            >
              <section className="pb-1">
                <div className="flex flex-row gap-2 pt-2 pl-6 text-blue-500">
                  <p className="text-xs font-bold md:text-base lg:text-lg hover:cursor-pointer hover:text-blue-800">
                    Home
                  </p>
                  <span className="text-xs text-gray-600 md:text-base lg:text-lg">
                    •
                  </span>
                  <p
                    className="text-xs font-bold md:text-base lg:text-lg hover:cursor-pointer hover:text-blue-800"
                    key={item}
                  >
                    {item.category}
                  </p>
                  <span className="text-xs text-gray-600 md:text-base lg:text-lg">
                    •
                  </span>
                  <p className="text-xs font-bold md:text-base lg:text-lg hover:cursor-pointer hover:text-blue-800">
                    {item.genres.map((item) => item.genreOne)}
                  </p>
                  <span className="text-xs text-gray-600 md:text-base lg:text-lg">
                    •
                  </span>
                  <p className="text-xs font-bold md:text-base lg:text-lg hover:cursor-pointer hover:text-blue-800">
                    {item.genres.map((item) => item.genreTwo)}
                  </p>
                </div>
                <div className="flex flex-col justify-center lg:flex-row gap-y-3 lg:gap-x-6">
                  <div className="w-full lg:basis-[34%] lg:ml-3 flex flex-col items-center lg:block mt-5 lg:mt-0">
                    <div className="flex justify-center items-center border-2 border-solid border-gray-200 lg:h-[31rem] w-80 lg:w-auto">
                      <img
                        src={item.image}
                        alt="fotoBuku"
                        width={200}
                        className="absolute"
                      />
                    </div>
                    <div className="flex flex-row items-center justify-center">
                      <div className="grid w-32 border-2 border-gray-200 border-solid place-content-center h-28 hover:cursor-pointer">
                        <img src={item.image} alt="fotoBuku2" width={70} />
                      </div>
                      <div className="grid w-32 border-2 border-gray-200 border-solid place-content-center h-28 hover:cursor-pointer">
                        <img src={item.image} alt="fotoBuku3" width={70} />
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:basis-[66%] pl-3 lg:my-3 lg:mr-3 flex flex-col">
                    <div className="">
                      <div className="flex justify-start">
                        <p className="text-xs text-gray-500 font-base md:text-base">
                          Ketersediaan:
                          <span className="pl-2 text-xs font-bold text-red-500 md:text-base">
                            {item.status == true
                              ? "tersedia"
                              : item.status == false
                              ? "tidak tersedia"
                              : "Error"}
                          </span>
                        </p>
                      </div>
                      <div className="flex justify-start pt-4">
                        <h1 className="text-2xl font-normal sm:text-3xl">
                          {item.name}
                        </h1>
                      </div>
                      <div className="flex justify-start">
                        <h3 className="text-xs font-bold text-orange-400 font-base uppercase md:text-base">
                          {item.author} - {item.publisher}
                        </h3>
                      </div>
                      <div className="flex flex-row items-center gap-3 section-bagikan pt-7">
                        <p className="text-sm lg:text-base">Bagikan :</p>
                        <img
                          src={iconFacebook}
                          alt="logoFacebook"
                          className="w-5 h-5 md:w-[1.45rem] md:h-[1.45rem]"
                        />
                        <img
                          src={iconWhatsapp}
                          alt="logoWhatsapp"
                          className="w-5 h-5 md:w-6 md:h-6"
                        />
                        <img
                          src={iconTwitter}
                          alt="logoTwitter"
                          className="w-5 h-5 md:w-6 md:h-6"
                        />
                        <img
                          src={iconLine}
                          alt="logoLine"
                          className="w-5 h-5 md:w-6 md:h-6"
                        />
                        <img
                          src={iconLinkedin}
                          alt="logoLinkedin"
                          className="w-5 h-5 md:w-6 md:h-6"
                        />
                      </div>
                      <article className="pt-12 text-sm font-base">
                        <h2 className="text-xl font-bold lg:text-2xl">
                          Deskripsi Singkat
                        </h2>
                        <p className="pt-5 text-sm leading-5 text-gray-600 lg:text-base max-w-auto">
                          {item.overview}
                        </p>
                        <a
                          href="#Deskripsi"
                          className="text-xs text-blue-700 hover:underline md:text-sm lg:text-base"
                          onClick={() => {
                            setClickDesk(true);
                            setClickSpek(false);
                            setClickUlas(false);
                          }}
                        >
                          Baca Selengkapnya...
                        </a>
                      </article>
                      <div className="font-bold pt-7">
                        <p className="text-xs line-through">Rp {item.price}</p>
                        <p className="text-sm text-orange-600">
                          Rp {diskon()}.000
                        </p>
                      </div>
                      <div className="flex flex-row gap-5 pt-3">
                        <p className="text-sm sm:text-base">Qty :</p>
                        <IncrementDecrementButton
                          minValues={item.qty}
                          maxValues={100}
                        />
                      </div>
                      <div className="flex flex-row gap-2 pt-3">
                        <button
                          type="submit"
                          className="w-16 h-10 text-white bg-red-600 rounded-lg hover:bg-red-800 hover:transition hover:duration-700"
                        >
                          Beli
                        </button>
                        <button
                          type="submit"
                          className="w-24 h-10 text-white bg-red-600 rounded-lg hover:bg-red-800 hover:transition hover:duration-700"
                        >
                          Wishlist
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="pt-5">
                <div className="flex flex-col justify-center lg:flex-row gap-y-3">
                  <div className="lg:basis-[25%] px-5 lg:px-3 max-w-auto">
                    <div className="grid grid-rows-3 gap-2">
                      <div
                        className={
                          clickDesk == true
                            ? "flex items-center h-10 pl-3 font-bold text-white bg-orange-500 hover:cursor-pointer"
                            : "flex items-center h-10 pl-3 font-bold  bg-gray-100 hover:cursor-pointer"
                        }
                        onClick={() => {
                          setClickDesk(true);
                          setClickSpek(false);
                          setClickUlas(false);
                        }}
                      >
                        <p>Deskripsi</p>
                      </div>
                      <div
                        className={
                          clickSpek == true
                            ? "flex items-center h-10 pl-3 font-bold text-white bg-orange-500 hover:cursor-pointer"
                            : "flex items-center h-10 pl-3 font-bold  bg-gray-100 hover:cursor-pointer"
                        }
                        onClick={() => {
                          setClickDesk(false);
                          setClickSpek(true);
                          setClickUlas(false);
                        }}
                      >
                        <p>Spesifikasi Produk</p>
                      </div>
                      <div
                        className={
                          clickUlas == true
                            ? "flex items-center h-10 pl-3 font-bold text-white bg-orange-500 hover:cursor-pointer"
                            : "flex items-center h-10 pl-3 font-bold  bg-gray-100 hover:cursor-pointer"
                        }
                        onClick={() => {
                          setClickDesk(false);
                          setClickSpek(false);
                          setClickUlas(true);
                        }}
                      >
                        <p>Ulasan</p>
                      </div>
                    </div>
                  </div>
                  <div className="lg:basis-[75%]">
                    {clickDesk == true &&
                    clickSpek == false &&
                    clickUlas == false ? (
                      <div className="">
                        <div className="px-3 max-w-auto">
                          <p
                            id="Deskripsi"
                            className="text-sm text-justify text-gray-700"
                          >
                            {item.description}
                          </p>
                        </div>
                        {item.primacy != null && item.about == null ? (
                          <article className="pt-7 pl-3 lg:pl-5 pb-4 max-w-[23.4rem] sm:max-w-[26rem] lg:max-w-[40rem]">
                            <h5 className="text-lg font-base">
                              Keunggulan Buku
                            </h5>
                            <p className="pt-4 pl-2 text-sm text-gray-700 lg:pl-5">
                              {item.primacy}
                            </p>
                            <p className="pt-4 text-lg font-base">Resensi</p>
                          </article>
                        ) : item.primacy == null && item.about != null ? (
                          <article className="pt-7 pl-3 lg:pl-5 pb-4 max-w-[23.4rem] sm:max-w-[26rem] lg:max-w-[40rem]">
                            <h5 className="text-lg font-base">
                              Tentang {item.author}
                            </h5>
                            <p className="pt-4 pl-2 text-sm text-gray-700 lg:pl-5">
                              {item.about}
                            </p>
                          </article>
                        ) : item.primacy != null && item.about != null ? (
                          <>
                            <article className="pt-7 pl-3 lg:pl-5 pb-4 max-w-[23.4rem] sm:max-w-[26rem] lg:max-w-[40rem]">
                              <h5 className="text-lg font-base">
                                Tentang {item.author}
                              </h5>
                              <p className="pt-4 pl-2 text-sm text-gray-700 lg:pl-5">
                                {item.about}
                              </p>
                            </article>
                            <article className="pt-7 pl-3 lg:pl-5 pb-4 max-w-[23.4rem] sm:max-w-[26rem] lg:max-w-[40rem]">
                              <h5 className="text-lg font-base">
                                Keunggulan Buku
                              </h5>
                              <p className="pt-4 pl-2 text-sm text-gray-700 lg:pl-5">
                                {item.primacy}
                              </p>
                              <p className="pt-4 text-lg font-base">Resensi</p>
                            </article>
                          </>
                        ) : (
                          ""
                        )}
                      </div>
                    ) : clickDesk == false &&
                      clickSpek == true &&
                      clickUlas == false ? (
                      <div>
                        <div className="px-3 relative overflow-x-auto">
                          {item.specification.map((itm) => {
                            return (
                              <table
                                className="w-full text-sm text-left"
                                key={itm}
                              >
                                <thead>
                                  <tr>
                                    <th
                                      scope="col"
                                      className="px-6 py-3 font-medium text-base"
                                    >
                                      Spesifikasi Product
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="bg-gray-100 border-b border-t border-gray-600">
                                    <th
                                      scope="row"
                                      className="px-3 py-2 font-normal"
                                    >
                                      SKU
                                    </th>
                                    <td className="px-3 py-2">{itm.sku}</td>
                                  </tr>
                                  <tr className="bg-white border-b border-gray-600">
                                    <th
                                      scope="row"
                                      className="px-3 py-2 font-normal"
                                    >
                                      ISBN
                                    </th>
                                    <td className="px-3 py-2">{itm.isbn}</td>
                                  </tr>
                                  <tr className="bg-gray-100 border-b border-gray-600">
                                    <th
                                      scope="row"
                                      className="px-3 py-2 font-normal"
                                    >
                                      Berat
                                    </th>
                                    <td className="px-3 py-2">
                                      {itm.weight} Gram
                                    </td>
                                  </tr>
                                  {itm.dimensi.map((i) => {
                                    return (
                                      <tr
                                        className="bg-white border-b border-gray-600"
                                        key={i}
                                      >
                                        <th
                                          scope="row"
                                          className="px-3 py-2 font-normal"
                                        >
                                          Dimensi (P/L/T)
                                        </th>
                                        <td className="px-3 py-2">
                                          {i.panjang} Cm/ {i.lebar} Cm/{" "}
                                          {i.tinggi} Cm
                                        </td>
                                      </tr>
                                    );
                                  })}
                                  <tr className="bg-gray-100 border-b border-gray-600">
                                    <th
                                      scope="row"
                                      className="px-3 py-2 font-normal"
                                    >
                                      Halaman
                                    </th>
                                    <td className="px-3 py-2">{itm.halaman}</td>
                                  </tr>
                                  <tr className="bg-white">
                                    <th
                                      scope="row"
                                      className="px-3 py-2 font-normal"
                                    >
                                      Jenis Cover
                                    </th>
                                    <td className="px-3 py-2">
                                      {itm.jenis_cover}
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            );
                          })}
                        </div>
                      </div>
                    ) : clickDesk == false &&
                      clickSpek == false &&
                      clickUlas == true ? (
                      <div>
                        {item.ulasan == null ? (
                          <div className="px-3 max-w-auto">
                            <p className="text-sm font-bold">
                              Belum Ada Review
                            </p>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </section>
            </div>
            <div className="h-full mx-0 mt-3 bg-white rounded-sm md:mx-10 lg:mx-40">
              <section>
                <div className="flex flex-row justify-between p-7">
                  <h2 className="text-lg font-semibold">
                    Produk {item.author}
                  </h2>
                  <button className="w-24 text-xs text-red-700 bg-white border border-red-700 rounded-full h-7 hover:text-white hover:bg-red-700">
                    Selengkapnya
                  </button>
                </div>
                <hr className="mx-5" />
                <div
                  id="product"
                  className="flex flex-row p-5 overflow-x-scroll pt-7 gap-7 md:gap-5"
                />
              </section>
            </div>
            <div className="h-full mx-0 mt-3 mb-3 bg-white rounded-sm md:mx-10 lg:mx-40">
              <section>
                <div className="flex flex-row justify-between p-7">
                  <h2 className="text-lg font-semibold">Produk Rekomendasi</h2>
                  <button className="w-24 text-xs text-red-700 bg-white border border-red-700 rounded-full h-7 hover:text-white hover:bg-red-700">
                    Selengkapnya
                  </button>
                </div>
                <hr className="mx-5" />
                <div className="flex flex-row p-5 overflow-x-scroll pt-7 gap-7 md:gap-5">
                  <div className="max-w-xs hover:cursor-pointer">
                    <a href="#">
                      <img
                        src="/detailProduct/logoProductPidiBaik1.jpg"
                        alt="sampul Produk Pidi Baiq"
                        className="w-24 h-32 hover:opacity-50"
                      />
                    </a>
                    <div className="pt-3">
                      <h5 className="text-sm">Asbunayah</h5>
                      <p className="text-xs text-gray-600 pt-7">Pidi Baiq</p>
                      <p className="text-xs text-gray-700 line-through">
                        Rp 79.000
                      </p>
                      <p className="pl-2 text-sm text-orange-600">Rp 67.000</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </>
        );
      })}
    </main>
  );
};

export default DetailProduct;
