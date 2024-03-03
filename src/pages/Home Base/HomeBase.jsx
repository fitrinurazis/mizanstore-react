import { useState, useEffect } from "react";
import BookList from "../../components/Book Card/BookLIst";
import Carousel from "../../components/Carousel/Carousel";

const HomeBase = () => {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://mocki.io/v1/79d0d4b9-fb89-4a3f-9fdb-c66db76df118"
        );
        const data = await response.json();
        setApiData(data);
      } catch (error) {
        console.error("Error fetching data from API:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Carousel />
      {apiData ? <BookList data={apiData} /> : <p>Loading...</p>}
    </>
  );
};

export default HomeBase;
