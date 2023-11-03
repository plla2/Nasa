import { Link, NavLink } from "react-router-dom";
import Text from "../atoms/Text";
import { NavLinks } from "../particles/Data";
import List from "../atoms/List";
import { GiHamburgerMenu } from "@react-icons/all-files/gi/GiHamburgerMenu";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [navbarBg, setNavbarBg] = useState(false);

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setNavbarBg(true) : setNavbarBg(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <header className="w-full h-auto bg-transparent fixed overflow-x-hidden z-50 top-0 left-0">
      <nav
        className={`${
          navbarBg ? "bg-zinc-900" : "bg-transparent"
        } w-full h-28 flex justify-between items-center px-8 `}
      >
        <Link
          to={"/"}
          className="font-extrabold flex items-center relative text-lg"
        >
          <Text as="span" className="text-white">
            Plla2
          </Text>
          <Text
            as="span"
            className="bg-gradient-to-r from-amber-500 to-red-500 bg-clip-text text-transparent"
          >
            Gym
          </Text>
        </Link>
        <div className="lg:flex hidden items-center h-full gap-20">
          <ul className="flex items-center justify-center h-full gap-4 relative before:w-full before:h-0.5 before:absolute before:bottom-0 before:left-0 before:bg-zinc-400">
            {NavLinks.map((nav, idx) => (
              <List key={idx} className="w-full text-base">
                <NavLink
                  to={nav.url}
                  className={`relative inline-block px-2 whitespace-nowrap text-white uppercase text-xs font-bold transition-all duration-200 hover:text-amber-500 before:w-0 before:h-0.5 before:bg-gradient-to-r from-red-500 to-amber-500 before:absolute before:-bottom-[2.93rem] before:left-0 before:transition-all before:duration-200 before:ease-in hover:before:left-0.5`}
                >
                  {nav.name}
                </NavLink>
              </List>
            ))}
          </ul>
        </div>
        <div
          className="lg:hidden flex text-white cursor-pointer"
          onClick={handleOpen}
        >
          <GiHamburgerMenu />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
