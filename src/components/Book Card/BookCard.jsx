/* eslint-disable react/prop-types */
const BookCard = ({ name, image, author, price, discon }) => {
  const shortName = name.length > 20 ? name.substring(0, 20) + "..." : name;

  return (
    <li className="snap-start group">
      <a href="">
        <div className="border border-gray-600  border-opacity-0 rounded-lg hover:border-opacity-50">
          <div className="relative py-8 overflow-hidden flex justify-center">
            <img
              className="h-40 w-32 lg:w-36 rounded-tl-lg rounded-tr-lg "
              src={image}
              alt={name}
            />
            <div className="absolute flex items-center justify-center w-full  h-full transition-all duration-300 opacity-0 bg-white/50 bottom-10 group-hover:bottom-0 group-hover:opacity-90">
              <p className="p-1 text-sm text-white bg-gray-800 rounded-sm">
                {name}
              </p>
            </div>
          </div>
          <div className="px-1 w-32 lg:w-36 ">
            <h3 className="text-xs font-extrabold uppercase whitespace-pre-line">
              {shortName}{" "}
            </h3>
            <p className="text-[11px] font-normal py-1">{author}</p>
            <div className="pt-2">
              <span className="text-xs font-semibold line-through">
                Rp {price}{" "}
              </span>
              <span className="p-1 text-xs font-normal text-white bg-red-600 rounded-md">
                {discon}%
              </span>
            </div>
            <p className="py-1 text-sm font-bold text-red-600">Rp 68.000</p>
            <p className="w-5 h-5"></p>
          </div>
        </div>
      </a>
    </li>
  );
};

export default BookCard;
