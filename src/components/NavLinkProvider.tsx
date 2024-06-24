import { createContext, useContext, useState } from "react";

interface NavLinkType {
    activeLink: string;
    setActiveLink: (v: string) => void;
}

const NavLinkContext = createContext<NavLinkType>({ activeLink: "", setActiveLink: (v: string) => console.log(v)});

export const NavLinkProvider = (props: any) => {
  const [activeLink, setActiveLink] = useState("Home");

  return (
    <NavLinkContext.Provider value={{ activeLink, setActiveLink }}>
      {props.children}
    </NavLinkContext.Provider>
  );
};

export const useNavLink = () => {
  return useContext(NavLinkContext);
};
