/* eslint-disable react/prop-types */
import BookCard from "./BookCard";

const CategoryCard = ({ category }) => {
  return (
    <section className="grid mx-auto mt-4 bg-white md:mt-0 px-5 pt-5 pb-5">
      <h1 className="text-2xl font-bold uppercase text-center">
        {category.name}
      </h1>
      <div className="md:grid md:mx-auto ">
        <div className="lg:ml-5 lg:mb-5 pb-3">
          <div className="w-16 border-t-[3px] border-red-600 mt-5"></div>
        </div>
        <div className="overflow-x-scroll snap-x lg:overflow-x-hidden ">
          <ul className="flex lg:flex-wrap gap-3 lg:gap-7 w-0 md:w-[830px] lg:w-[1024px] mb-5">
            {category.items.map((item) => (
              <BookCard
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.image}
                author={item.author}
                price={item.price}
                discon={item.discon}
              />
            ))}
          </ul>
        </div>
        <div className="flex justify-end">
          <a
            href="#"
            className="px-8 py-2 text-xs font-bold text-red-600 border border-red-600 rounded-full hover:text-white hover:bg-red-600"
          >
            SELENGKAPNYA
          </a>
        </div>
      </div>
    </section>
  );
};

export default CategoryCard;
