import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const DropdownGenre = (props) => {
  const data = props.data;
  return (
    <details className="dropdown">
      <summary className="m-1 btn">Category </summary>
      <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
        {data.genre.map((itm, index) => (
          <li key={index}>
            <Link to={`/genre/${itm}`}>
              <p>{itm}</p>
            </Link>
          </li>
        ))}
      </ul>
    </details>
  );
};

export default DropdownGenre;
