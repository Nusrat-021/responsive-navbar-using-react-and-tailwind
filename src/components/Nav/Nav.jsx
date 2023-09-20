import { useState } from "react";
import NavLink from "../NavLink/NavLink";
import { HiMenu, HiX } from "react-icons/hi";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "/blog", name: "Blog" },
  ];
  const handleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="flex justify-between items-center p-2 md:p-0">
      <div className="text-3xl font-semibold">LOGO</div>
      <div onClick={handleMenu} className="text-3xl md:hidden cursor-pointer">
        {isOpen ? <HiX></HiX> : <HiMenu></HiMenu>}
      </div>
      <ul className={`md:flex ${isOpen ? 'block'  :'hidden'} inset-x-0 top-12 p-5 absolute md:static shadow-lg md:shadow-none`}>
        {routes.map((route) => (
          <NavLink key={route.id} route={route}></NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
