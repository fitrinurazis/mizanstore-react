/* eslint-disable react/prop-types */
import CategoryCard from "./CategoryCard";
import { useEffect, useState } from "react";
import axios from "axios";

const BookList = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:8080/kategori/")
      .then((response) => {
        if (response.data && response.data.length > 0) {
          setCategories(response.data);
          setIsLoading(false);
        } else {
          console.error("Tidak ada data yang diterima");
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.error("Kesalahan saat mengambil kategori:", error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Memuat...</div>;
  }

  return (
    <div>
      {categories.map((category, index) => (
        <CategoryCard key={index} category={category} />
      ))}
    </div>
  );
};

export default BookList;
