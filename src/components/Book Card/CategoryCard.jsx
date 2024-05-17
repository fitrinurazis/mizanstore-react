/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import BookCard from "./BookCard";

const CategoryCard = ({ category }) => {
  return (
    <section className="grid px-5 pt-5 pb-5 mx-auto mt-4 bg-white md:mt-0">
      <h1 className="text-2xl font-bold text-center uppercase">
        {category.name}
      </h1>
      <div className="md:grid md:mx-auto">
        <div className="pb-3 lg:ml-5 lg:mb-5 ">
          <div className="w-16 border-t-[3px] border-red-600 mt-5"></div>
        </div>
        <div className="overflow-x-scroll snap-x lg:overflow-x-hidden ">
          <ul className="flex lg:flex-wrap gap-3 lg:gap-7 w-0 md:w-[830px] lg:w-[1024px] mb-5">
            {category.barang.map((item) => (
              <Link key={item.id} to={`product/${item.id}`}>
                <BookCard
                  key={item.id}
                  id={item.id}
                  name={item.namaBarang}
                  image={item.gambar}
                  author={item.author.name}
                  price={item.harga}
                  discon={item.diskon}
                />
              </Link>
            ))}
          </ul>
        </div>
        <div className="flex justify-end">
          <Link to={`promo/${category.id}`}>
            <p className="px-8 py-2 text-xs font-bold text-red-600 border border-red-600 rounded-full hover:text-white hover:bg-red-600">
              SELENGKAPNYA
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategoryCard;
