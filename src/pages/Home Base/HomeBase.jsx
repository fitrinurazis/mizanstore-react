import BookList from "../../components/Book Card/BookLIst";
import data from "../../json/products.json";

const HomeBase = () => (
  <div>
    <BookList data={data} />
  </div>
);

export default HomeBase;
