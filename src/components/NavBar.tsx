import { Logo, Menu } from "./Icons"

const NavBar = () => {
  const navLiStyle = 'uppercase font-nav text-white flex md:gap-2 lg:gap-3 py-[38.5px] md:tracking-[1px] lg:tracking-[2px]'
  return (
    <header className="max-w-[1440px] mx-auto flex justify-between items-center px-6 pt-6 md:p-0 lg:pt-10 lg:px-0">
      <span className="w-full relative flex items-center spacing-x-5 md:pl-10">
        <Logo />
        <div className="hidden z-10 absolute lg:block right-[-5%] w-4/5 h-[1px] bg-white bg-opacity-15"/>
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
      <button className="block md:hidden">
        <Menu />
      </button>
    </header>
  )
}

export default NavBar