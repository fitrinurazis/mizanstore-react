/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import DropdownFilter from "../../components/DropdownFilter/DropdownFilter";
import genre from "../../JSON/genre.json";
import BookCard from "../../components/BookCard/BookCard";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
const ListProductGenre = ({ token, setToken }) => {
  const params = useParams();
  const dataGenreParams = genre.genres.filter(
    (item) => item.name == params.name
  );
  console.log(dataGenreParams);
  return (
    <>
      <Header token={token} setToken={setToken} />
      {dataGenreParams.map((item) => (
        <main className="flex justify-center" key={item.id}>
          <div className="flex items-start justify-around w-[1280px] p-[56px] bg-white list-product">
            <div className="font-sans nav">
              <h1 className="text-xl font-semibold">{item.name}</h1>
            </div>
            <div className="mt-36 md:mt-0">
              <div className="font-[18px] font-sans pb-[32px] ">
                <h1 className="text-[#ce2e2e] text-lg sm:text-xl">
                  {item.name}{" "}
                  <span className="text-black">
                    ({item.items.length ? item.items.length : 0} Judul Produk)
                  </span>
                </h1>
              </div>
              <DropdownFilter />
              <div className="grid grid-cols-2 sm:grid sm:grid-cols-3 md:grid md:grid-cols-4 lg:grid lg:grid-cols-5 gap-5 pb-[24px]">
                {item.items.map((itm, index) => (
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

export default ListProductGenre;
