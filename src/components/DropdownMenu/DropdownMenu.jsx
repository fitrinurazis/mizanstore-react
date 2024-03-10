// DropdownMenu.js
import { useState } from "react";
import { Link } from "react-router-dom";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative block">
      <button
        className="cursor-pointer hover:text-[#ce2e2e]"
        onClick={toggleDropdown}
      >
        {isOpen ? "KATEGORI ʌ" : "KATEGORI v"}
      </button>
      {isOpen && (
        <div className="relative grid text-sm lg:-left-[650px] lg:flex  lg:pt-20 lg:absolute lg:text-lg font-normal text-start pl-8 lg:pb-10 lg:bg-white">
          <ul className="flex-col gap-2 px-5 pt-3 lg:pt-0 lg:w-60 lg:flex lg:bg-white">
            <li className="hover:text-white hover:bg-[#ce2e2e] pl-2 py-1 lg:hover:text-[#ce2e2e] lg:hover:bg-white lg:pl-0 lg:py-0">
              <Link to="/">Agama & Spritualitas</Link>
            </li>
            <li className="hover:text-white hover:bg-[#ce2e2e] pl-2 py-1 lg:hover:text-[#ce2e2e] lg:hover:bg-white lg:pl-0 lg:py-0">
              <Link to="/">Bahasa, Pendidikan & Penunjang Pelajaran</Link>
            </li>
            <li className="hover:text-white hover:bg-[#ce2e2e] pl-2 py-1 lg:hover:text-[#ce2e2e] lg:hover:bg-white lg:pl-0 lg:py-0">
              <Link to="/">Biografi & Memoar</Link>
            </li>
            <li className="hover:text-white hover:bg-[#ce2e2e] pl-2 py-1 lg:hover:text-[#ce2e2e] lg:hover:bg-white lg:pl-0 lg:py-0">
              <Link to="/">Buku Anak</Link>
            </li>
            <li className="hover:text-white hover:bg-[#ce2e2e] pl-2 py-1 lg:hover:text-[#ce2e2e] lg:hover:bg-white lg:pl-0 lg:py-0">
              <Link to="/">Buku Impor</Link>
            </li>
          </ul>
          <ul className="flex flex-col gap-2 px-5 lg:w-60 bg-slate-100 ">
            <li className="hover:text-white hover:bg-[#ce2e2e] pl-2 py-1 lg:hover:text-[#ce2e2e] lg:hover:bg-white lg:pl-0 lg:py-0">
              <Link to="/">Ekonomi, Bisnis & Keuangan</Link>
            </li>
            <li className="hover:text-white hover:bg-[#ce2e2e] pl-2 py-1 lg:hover:text-[#ce2e2e] lg:hover:bg-white lg:pl-0 lg:py-0">
              <Link to="/">Fiksi</Link>
            </li>
            <li className="hover:text-white hover:bg-[#ce2e2e] pl-2 py-1 lg:hover:text-[#ce2e2e] lg:hover:bg-white lg:pl-0 lg:py-0">
              <Link to="/">Hiburan Seni & Budaya</Link>
            </li>
            <li className="hover:text-white hover:bg-[#ce2e2e] pl-2 py-1 lg:hover:text-[#ce2e2e] lg:hover:bg-white lg:pl-0 lg:py-0">
              <Link to="/">Kesehatan & Kecantikan</Link>
            </li>
          </ul>
          <ul className="flex flex-col gap-2 px-5 lg:w-60 bg-slate-100">
            <li className="hover:text-white hover:bg-[#ce2e2e] pl-2 py-1 lg:hover:text-[#ce2e2e] lg:hover:bg-white lg:pl-0 lg:py-0">
              <Link to="/">Komputer & Internet</Link>
            </li>
            <li className="hover:text-white hover:bg-[#ce2e2e] pl-2 py-1 lg:hover:text-[#ce2e2e] lg:hover:bg-white lg:pl-0 lg:py-0">
              <Link to="/">Non Fiksi</Link>
            </li>
          </ul>
          <ul className="flex flex-col gap-2 px-5 lg:w-60 bg-slate-100">
            <li className="hover:text-white hover:bg-[#ce2e2e] pl-2 py-1 lg:hover:text-[#ce2e2e] lg:hover:bg-white lg:pl-0 lg:py-0">
              <Link to="/">Perjalanan</Link>
            </li>
            <li className="hover:text-white hover:bg-[#ce2e2e] pl-2 py-1 lg:hover:text-[#ce2e2e] lg:hover:bg-white lg:pl-0 lg:py-0">
              <Link to="/">Sains & Teknologi</Link>
            </li>
            <li className="hover:text-white hover:bg-[#ce2e2e] pl-2 py-1 lg:hover:text-[#ce2e2e] lg:hover:bg-white lg:pl-0 lg:py-0">
              <Link c to="/">
                Sastra & Fisafat
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col gap-2 px-5 pb-3 lg:w-60 bg-slate-100">
            <li className="hover:text-white hover:bg-[#ce2e2e] pl-2 py-1 lg:hover:text-[#ce2e2e] lg:hover:bg-white lg:pl-0 lg:py-0">
              <Link to="/">Sosial & Politik</Link>
            </li>
            <li className="hover:text-white hover:bg-[#ce2e2e] pl-2 py-1 lg:hover:text-[#ce2e2e] lg:hover:bg-white lg:pl-0 lg:py-0">
              <Link to="/">Books Merchandise</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
