import { Link } from "react-router-dom";
import { useState } from "react";
import DropdownMenu from "../../components/DropdownMenu/DropdownMenu";
import HamburgerMenu from "../../components/HamburgerMenu/HamburgerMenu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <header>
      <div className="flex justify-end lg:justify-around items-center p-2.5 lg:p-5 bg-[#ce2e2e] ">
        <ul className="hidden gap-5 text-sm text-white list-none lg:flex decoration-transparent">
          <li>
            <Link className="" to={"/"}>
              KONFIRMASI INFORMASI
            </Link>
          </li>
          <li>
            <Link className="" to={"/"}>
              TRACKING ORDER
            </Link>
          </li>
        </ul>
        <ul className="flex gap-5 text-sm text-white list-none decoration-transparent">
          <li>
            <Link className="flex items-end gap-2 " to={"/"}>
              <svg
                className="fill-white"
                xmlns="http://www.w3.org/2000/svg"
                width={14}
                height={19}
                viewBox="0 0 24 24"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span>WHATSAPP</span>
            </Link>
          </li>
          <li>
            <Link className="flex">
              <svg
                className="fill-white"
                width={24}
                height={24}
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path d="M13.5 21c-.276 0-.5-.224-.5-.5s.224-.5.5-.5.5.224.5.5-.224.5-.5.5m0-2c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5m-6 2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5.5.224.5.5-.224.5-.5.5m0-2c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5m16.5-16h-2.964l-3.642 15h-13.321l-4.073-13.003h19.522l.728-2.997h3.75v1zm-22.581 2.997l3.393 11.003h11.794l2.674-11.003h-17.861z" />
              </svg>
              <span className="bg-white absolute text-[#ce2e2e] text-xs px-1 rounded-full ">
                0
              </span>
            </Link>
          </li>
          <li>
            <Link to={"/login"} className="flex items-end gap-2">
              <svg
                className="fill-white"
                width={20}
                height={18}
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path d="M12 0c-5.083 0-8.465 4.949-3.733 13.678 1.596 2.945-1.725 3.641-5.09 4.418-3.073.709-3.187 2.235-3.177 4.904l.004 1h23.99l.004-.969c.012-2.688-.093-4.223-3.177-4.935-3.438-.794-6.639-1.49-5.09-4.418 4.719-8.912 1.251-13.678-3.731-13.678m0 1c1.89 0 3.39.764 4.225 2.15 1.354 2.251.866 5.824-1.377 10.06-.577 1.092-.673 2.078-.283 2.932.937 2.049 4.758 2.632 6.032 2.928 2.303.534 2.412 1.313 2.401 3.93h-21.998c-.01-2.615.09-3.396 2.401-3.93 1.157-.266 5.138-.919 6.049-2.94.387-.858.284-1.843-.304-2.929-2.231-4.115-2.744-7.764-1.405-10.012.84-1.412 2.353-2.189 4.259-2.189" />
              </svg>
              <span>LOGIN / DAFTAR</span>
            </Link>
          </li>
        </ul>
      </div>
      <nav className="flex flex-col bg-white lg:justify-around">
        <div className="flex justify-between px-5 lg:justify-around">
          <div className="w-30">
            <Link to={"/"}>
              <img src="https://mizanstore.com/admin718/assets/img/logo/logo-mizanstore-atas.png" />
            </Link>
          </div>
          <div className="flex flex-col ">
            <div className="justify-between py-2 font-bold md:flex">
              <HamburgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
              <ul
                className={`absolute w-full text-center bg-white top-0 left-0 z-10 md:justify-between  lg:gap-5 md:flex py-10 lg:relative lg:py-0  ${
                  isMenuOpen ? "block" : "hidden"
                }`}
              >
                <li className="gap-5 lg:flex">
                  <DropdownMenu
                    isOpen={isOpen}
                    toggleDropdown={toggleDropdown}
                  />
                  <span className="hidden lg:block">/</span>
                </li>
                <li className="gap-5 lg:flex">
                  <Link className="hover:text-[#ce2e2e]" to={"/"}>
                    POD
                  </Link>
                  <span className="hidden lg:block">/</span>
                </li>
                <li className="gap-5 lg:flex">
                  <Link className="hover:text-[#ce2e2e]" to={"/"}>
                    SELF PUB
                  </Link>
                  <span className="hidden lg:block">/</span>
                </li>
                <li className="gap-5 lg:flex">
                  <Link className="hover:text-[#ce2e2e]" to={"/"}>
                    EBOOK
                  </Link>
                  <span className="hidden lg:block">/</span>
                </li>
                <li>
                  <Link className="hover:text-[#ce2e2e]" to={"/"}>
                    BLOG
                  </Link>
                </li>
              </ul>
            </div>
            <div className="z-20 justify-between hidden h-8 text-sm md:flex md:text-md">
              <input
                type="search"
                placeholder="Cari Judul"
                className="flex flex-1 px-2 border border-gray-400 rounded-md"
              />
              <button className="bg-[#ce2e2e] px-3 py-2 rounded-md">
                <svg
                  className="fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 25 24"
                >
                  <path d="M21.172 24l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="flex h-8 mx-5 text-sm md:hidden">
          <input
            type="search"
            placeholder="Cari Judul"
            className="flex flex-1 px-2 border border-gray-400 rounded-md"
          />
          <button className="bg-[#ce2e2e] px-3 py-2 rounded-md">
            <svg
              className="fill-white"
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              viewBox="0 0 25 24"
            >
              <path d="M21.172 24l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
