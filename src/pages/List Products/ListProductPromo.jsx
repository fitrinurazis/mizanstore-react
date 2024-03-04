import { useEffect, useState } from "react";
import BookCard from "../../components/Book Card/BookCard";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import DropdownFilter from "./components/DropdownFilter";
import axios from "axios";
import { useParams } from "react-router";

const ListProductPromo = () => {
  const [data, setData] = useState([]);
  const params = useParams();
  const fetchDataCategory = async () => {
    try {
      const response = await axios.get(
        "https://mocki.io/v1/79d0d4b9-fb89-4a3f-9fdb-c66db76df118"
      );

      setData(response.data);
    } catch (error) {
      console.error("Error fetching data from API:", error);
    }
  };
  const fetchDataParams = data?.categories?.filter(
    (item) => item.id == params.id
  );
  useEffect(() => {
    fetchDataCategory();
  }, []);
  return (
    <>
      <Header />
      <main className="mx-20 md:mx-32">
        <div className="flex justify-center py-5">
          <h1 className="text-2xl font-bold font-sans">
            {fetchDataParams?.map((item) => item.name)}
          </h1>
        </div>
        <hr className="border-black pb-5" />
        <DropdownFilter />
        <div className="grid grid-cols-3 md:grid md:grid-cols-5 sm:grid sm:grid-cols-4 gap-5">
          {fetchDataParams?.map((item) =>
            item.items?.map((itm) => (
              <BookCard
                key={itm.id}
                id={itm.id}
                name={itm.name}
                image={itm.image}
                author={itm.author}
                price={itm.price}
                discon={itm.discon}
              />
            ))
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ListProductPromo;
