import { useState } from "react";
import Link from "../Link/Link";
import { HiMenu, HiX } from "react-icons/hi";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "/blog", name: "Blog" },
  ];
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <nav className="w-full p-6 md:p-0 flex justify-between items-center">
      <div className="font-bold text-3xl md:text-5xl">LOGO</div>
      <div>
        <div onClick={handleOpen} className="text-2xl md:hidden">
          {open ? <HiX></HiX> : <HiMenu></HiMenu>}
        </div>
        <ul className={`md:flex 
        ${open ? 'block' : 'hidden'} absolute md:static inset-x-0 bg-red-200 duration-500`}>
          {routes.map((route) => (
            <Link key={route.id} route={route}></Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
