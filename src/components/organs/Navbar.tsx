import { Link, NavLink } from "react-router-dom";
import Text from "../atoms/Text";
import { NavLinks } from "../particles/Data";
import List from "../atoms/List";
import { CgGym } from "@react-icons/all-files/cg/CgGym";
import { GiHamburgerMenu } from "@react-icons/all-files/gi/GiHamburgerMenu";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <header>
      <nav>
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
