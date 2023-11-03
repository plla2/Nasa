import { Link, NavLink } from "react-router-dom";
import Text from "../atoms/Text";
import { NavLinks } from "../particles/Data";
import List from "../atoms/List";
import { CgGym } from "@react-icons/all-files/cg/CgGym";
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
    <header className="w-full h-auto bg-transparent overflow-x-hidden fixed top-0 left-0">
      <nav className={``}>
        <Link to={"/"}>
          <Text as="span" className="">
            <CgGym />
          </Text>
          <Text as="span" className="">
            Plla2
          </Text>
          <Text as="span" className="">
            Gym
          </Text>
        </Link>
        <div>
          <ul>
            {NavLinks.map((nav, idx) => (
              <List key={idx}>
                <NavLink to={nav.url}>{nav.name}</NavLink>
              </List>
            ))}
          </ul>
        </div>
        <div onClick={handleOpen}>
          <GiHamburgerMenu />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
