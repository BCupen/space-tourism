import { useState } from "react";
import { Close, Logo, Menu } from "./Icons";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navLiStyle =
    "cursor-pointer uppercase font-sub text-white flex md:gap-2 lg:gap-3 py-[38.5px] md:tracking-[1px] lg:tracking-[2px] border-b-4 border-transparent hover:border-white hover:border-opacity-50 transition-all duration-700 ease-in-out";
  const navLiStyleMobile = "uppercase font-nav text-white flex gap-3";
  return (
    <header className="max-w-[1440px] relative mx-auto flex justify-between items-center px-6 pt-6 md:p-0 lg:pt-10 lg:px-0">
      <span className="w-full relative flex items-center spacing-x-5 md:pl-10">
        <Logo />
        <div className="hidden z-10 absolute lg:block right-[-5%] w-4/5 h-[1px] bg-white bg-opacity-15" />
      </span>

      {/* Desktop Tablet Nav */}
      <ul className="hidden md:flex gap-10 lg:gap-12 md:pl-16 md:pr-10 lg:pl-[159px] lg:pr-16 bg-white bg-opacity-5 backdrop-blur-md">
        <li className={navLiStyle}>
          <p className="font-bold">00</p>
          <p>Home</p>
        </li>
        <li className={navLiStyle}>
          <p className="font-bold">01</p>
          <p>Destination</p>
        </li>
        <li className={navLiStyle}>
          <p className="font-bold">02</p>
          <p>Crew</p>
        </li>
        <li className={navLiStyle}>
          <p className="font-bold">03</p>
          <p>Technology</p>
        </li>
      </ul>

      {/* Hamburger Menu */}
      <button className="block md:hidden" onClick={() => setShowMenu(true)}>
        <Menu />
      </button>

      {/* Mobile Nav */}
      {showMenu && (
        <div className="fixed top-0 right-0 w-2/3 h-screen md:hidden flex flex-col gap-12 bg-navy bg-opacity-10 backdrop-blur-md p-6">
          <button className="self-end" onClick={() => setShowMenu(false)}>
            <Close />
          </button>

          <ul className="flex flex-col gap-8 px-2">
            <li className={navLiStyleMobile}>
              <p className="font-bold">00</p>
              <p>Home</p>
            </li>
            <li className={navLiStyleMobile}>
              <p className="font-bold">01</p>
              <p>Destination</p>
            </li>
            <li className={navLiStyleMobile}>
              <p className="font-bold">02</p>
              <p>Crew</p>
            </li>
            <li className={navLiStyleMobile}>
              <p className="font-bold">03</p>
              <p>Technology</p>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default NavBar;
