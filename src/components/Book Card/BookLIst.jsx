/* eslint-disable react/prop-types */
import CategoryCard from "./CategoryCard";

const BookList = ({ data }) => (
  <div>
    {data.categories.map((category) => (
      <CategoryCard key={category.id} category={category} />
    ))}
  </div>
);

export default BookList;
