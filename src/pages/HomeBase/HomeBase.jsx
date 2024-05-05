import { useEffect } from "react";
import BookList from "../../components/BookCard/BookLIst";
import Carousel from "../../components/Carousel/Carousel";
import { useDispatch, useSelector } from "react-redux";
import { getDataCategoryCall } from "../../store/action/productAction";

const HomeBase = () => {
  const { category } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataCategoryCall());
  }, [dispatch]);

  return (
    <>
      <Carousel />
      {category ? <BookList data={category} /> : <p>Loading...</p>}
    </>
  );
};

export default HomeBase;
