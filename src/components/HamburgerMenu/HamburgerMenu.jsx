/* eslint-disable react/prop-types */
import iconX from "../../assets/img/icon-x.png";
import iconMenu from "../../assets/img//icon-menu.png";

const HamburgerMenu = ({ isOpen, toggleMenu }) => {
  return (
    <button className=" md:hidden focus:outline-none" onClick={toggleMenu}>
      {isOpen ? (
        <img className="absolute top-0 right-0 z-20" src={iconX} />
      ) : (
        <img src={iconMenu} />
      )}
    </button>
  );
};

export default HamburgerMenu;
