/* eslint-disable react/prop-types */
import product from "../../JSON/products.json";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import DropdownFilter from "../../components/DropdownFilter/DropdownFilter";
import { Link, useParams } from "react-router-dom";
import BookCard from "../../components/BookCard/BookCard";
import DropdownGenre from "../../components/DropdownGenre/DropdownGenre";
import { useState } from "react";
const ListProducts = () => {
  const [value, setValue] = useState("");
  const params = useParams();
  const dataCategoryParams = product.categories.filter(
    (item) => item.name == params.category
  );
  return (
    <>
      <Header />
      {dataCategoryParams.map((item) => (
        <main className="flex justify-center" key={item.id}>
          <div className="flex items-start justify-around w-[1280px] p-[56px] bg-white">
            <div className="hidden font-sans md:block">
              <h1 className="text-xl font-semibold">{item.name}</h1>
              <div className="mt-5">
                <ul type="none">
                  {item.genre.map((itm, index) => (
                    <Link key={index} to={`/genre/${itm}`}>
                      <li className="pb-[20px] text-[#555] hover:cursor-pointer hover:text-black">
                        {itm}
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-36 md:mt-0">
              <div className="font-[18px] font-sans pb-[32px]">
                <h1 className="text-[#ce2e2e] text-lg sm:text-xl">
                  {item.name}{" "}
                  <span className="text-lg text-black">
                    ({item.items.length} Judul Produk)
                  </span>
                </h1>
              </div>
              <div className="block md:hidden">
                <DropdownGenre data={item} />
              </div>
              <DropdownFilter value={value} setValue={setValue} />
              <div className="grid grid-cols-2 sm:grid sm:grid-cols-3 md:grid md:grid-cols-4 lg:grid lg:grid-cols-5 gap-5 pb-[24px]">
                {value == "ascending"
                  ? item.items
                      .sort((a, b) => {
                        let fa = a.name.toLowerCase();
                        let fb = b.name.toLowerCase();

                        if (fa < fb) {
                          return -1;
                        }
                        if (fa > fb) {
                          return 1;
                        }
                        return 0;
                      })
                      .map((itm, index) => (
                        <BookCard
                          key={index}
                          id={itm.id}
                          name={itm.name}
                          image={itm.image}
                          author={itm.author}
                          price={itm.price}
                          discon={itm.discon}
                        />
                      ))
                  : value == "rendah"
                  ? item.items
                      .sort((a, b) => {
                        return a.price - b.price;
                      })
                      .map((itm, index) => (
                        <BookCard
                          key={index}
                          id={itm.id}
                          name={itm.name}
                          image={itm.image}
                          author={itm.author}
                          price={itm.price}
                          discon={itm.discon}
                        />
                      ))
                  : value == "tinggi"
                  ? item.items
                      .sort((a, b) => {
                        return b.price - a.price;
                      })
                      .map((itm, index) => (
                        <BookCard
                          key={index}
                          id={itm.id}
                          name={itm.name}
                          image={itm.image}
                          author={itm.author}
                          price={itm.price}
                          discon={itm.discon}
                        />
                      ))
                  : item.items.map((itm, index) => (
                      <BookCard
                        key={index}
                        id={itm.id}
                        name={itm.name}
                        image={itm.image}
                        author={itm.author}
                        price={itm.price}
                        discon={itm.discon}
                      />
                    ))}
              </div>
            </div>
          </div>
        </main>
      ))}
      <Footer />
    </>
  );
};

export default ListProducts;
