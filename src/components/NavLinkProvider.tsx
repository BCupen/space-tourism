import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface NavLinkType {
    activeLink: string;
    setActiveLink: (v: string) => void;
}

const NavLinkContext = createContext<NavLinkType>({ activeLink: "", setActiveLink: (v: string) => console.log(v)});

export const NavLinkProvider = (props: any) => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");

  useEffect(()=>{
    if (location.pathname.includes('crew'))
      setActiveLink('Crew');
    else if (location.pathname.includes('destination'))
      setActiveLink('Destination')
    else if (location.pathname.includes('technology'))
      setActiveLink('Technology')
    else setActiveLink('Home')
  },[location]);

  return (
    <NavLinkContext.Provider value={{ activeLink, setActiveLink }}>
      {props.children}
    </NavLinkContext.Provider>
  );
};

export const useNavLink = () => {
  return useContext(NavLinkContext);
};
