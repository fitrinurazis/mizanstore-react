/* eslint-disable react/prop-types */
import { useState } from "react";

const IncrementDecrementButton = ({ minValues, maxValues }) => {
  const [count, setCount] = useState(minValues);

  const handleIncrement = () => {
    if (count < maxValues) {
      setCount((prevState) => prevState + 1);
    }
  };

  const handleDecrement = () => {
    if (count > minValues) {
      setCount((prevState) => prevState - 1);
    }
  };
  return (
    <div>
      <div className="relative flex items-start max-w-[8rem]">
        <button
          type="button"
          className="p-3 bg-white border border-gray-100 hover:bg-gray-100 rounded-s-lg h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none"
          onClick={() => handleDecrement()}
        >
          <svg
            className="w-2 h-2 text-gray-900 hover:text-orange-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 2"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h16"
            />
          </svg>
        </button>
        <p className="bg-white border border-gray-100 h-11 w-11 text-center text-black text-sm focus:ring-blue-500 focus:border-blue-500 block w-11 py-2.5 placeholder-black">
          {count}
        </p>
        <button
          type="button"
          className="p-3 bg-white border border-gray-100 hover:bg-gray-100 rounded-e-lg h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none"
          onClick={() => handleIncrement()}
        >
          <svg
            className="w-2 h-2 text-gray-900 hover:text-orange-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 1v16M1 9h16"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default IncrementDecrementButton;
