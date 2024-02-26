import BookList from "../../components/Book Card/BookLIst";
import Carousel from "../../components/Carousel/Carousel";
import data from "../../JSON/products.json";

const HomeBase = () => {
  return (
    <>
      <Carousel />
      <BookList data={data} />
    </>
  );
};

export default HomeBase;
