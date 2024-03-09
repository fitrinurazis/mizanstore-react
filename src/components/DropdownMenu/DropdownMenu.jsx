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
      <button className="cursor-pointer" onClick={toggleDropdown}>
        KATEGORI {isOpen ? "ʌ" : "v"}
      </button>
      {isOpen && (
        <div className="absolute left-0 z-10 flex justify-start pt-20 m-0 start-px">
          <ul className="flex flex-col w-48 gap-2 px-5 pb-5 bg-slate-100">
            <li className="">
              <Link to="/page1">Agama & Spritualitas</Link>
            </li>
            <li>
              <Link to="/page2">Bahasa, Pendidikan & Penunjang Pelajaran</Link>
            </li>
            <li>
              <Link to="/page2">Biografi & Memoar</Link>
            </li>
            <li>
              <Link to="/page2">Buku Anak</Link>
            </li>
            <li>
              <Link to="/page2">Buku Impor</Link>
            </li>
          </ul>
          <ul className="flex flex-col w-48 gap-2 px-5 pb-5 bg-slate-100 ">
            <li className="">
              <Link to="/page1">Ekonomi, Bisnis & Keuangan</Link>
            </li>
            <li>
              <Link to="/page2">Fiksi</Link>
            </li>
            <li>
              <Link to="/page2">Hiburan Seni & Budaya</Link>
            </li>
            <li>
              <Link to="/page2">Kesehatan & Kecantikan</Link>
            </li>
          </ul>
          <ul className="flex flex-col w-48 gap-2 px-5 pb-5 bg-slate-100">
            <li className="">
              <Link to="/page1">Komputer & Internet</Link>
            </li>
            <li>
              <Link to="/page2">Non Fiksi</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
