import { useParams } from "react-router-dom";
import SectionContent from "../../components/SectionPageDetailProduct/SectionContent";
import BookCard from "../../components/Book Card/BookCard";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const DetailProduct = () => {
  const [detail, setDetail] = useState();
  const [product, setProduct] = useState();
  const [productAll, setProductAll] = useState();
  const params = useParams();
  const fetchDataDetail = async () => {
    try {
      const response = await axios.get(
        `https://mocki.io/v1/f460ee8d-848e-46c7-9f76-aabec0617370`
      );
      setDetail(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchDataCategory = async () => {
    try {
      const response = await axios.get(
        "https://mocki.io/v1/79d0d4b9-fb89-4a3f-9fdb-c66db76df118"
      );

      setProduct(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchDataProductAll = async () => {
    try {
      const response = await axios.get(
        "https://mocki.io/v1/06fa080d-3fc1-4e61-a07d-0153cf52a292"
      );

      setProductAll(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchDataDetail();
    fetchDataCategory();
    fetchDataProductAll();
  }, []);
  const dataProductParams = detail?.detail?.filter(
    (item) => item.idProduct == params.id
  );
  const dataCategoryParams = dataProductParams?.map((item) => item.category);

  const categoryProduct = product?.categories?.filter(
    (item) => item.name == dataCategoryParams
  );

  const dataAuthorParams = dataProductParams?.map((item) => item.author);
  const getAuthorProduct = productAll?.products?.filter(
    (item) => item.author == dataAuthorParams
  );

  return (
    <>
      <Header />
      {dataProductParams?.map((item, index) => {
        return (
          <main className="mt-44 container-md md:mt-0" key={index}>
            <div className="h-full mx-0 bg-white rounded-sm md:mx-10 lg:mx-40">
              <SectionContent data={item} />
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
                <div className="flex flex-row p-5 overflow-x-scroll pt-7 gap-7 md:gap-5">
                  {getAuthorProduct?.map((item) => (
                    <BookCard
                      key={item.id}
                      id={item.id}
                      name={item.name}
                      image={item.image}
                      author={item.author}
                      price={item.price}
                      discon={item.discon}
                    />
                  ))}
                </div>
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
                  {categoryProduct?.map((item) =>
                    item.items
                      .filter((itm) => itm.id <= 5)
                      .map((i, index) => (
                        <BookCard
                          key={index}
                          id={i.id}
                          name={i.name}
                          image={i.image}
                          author={i.author}
                          price={i.price}
                          discon={i.discon}
                        />
                      ))
                  )}
                </div>
              </section>
            </div>
          </main>
        );
      })}
      \
      <Footer />
    </>
  );
};

export default DetailProduct;
