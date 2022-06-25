import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import SocialLink from "./SocialLink";

const NavBar = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Blog", link: "/posts" },
    { name: "Contact", link: "/contact" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-20 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
        >
          <span className="text-3xl text-indigo-600 mr-1 pt-2">
            <ion-icon name="logo-ionic"></ion-icon>
          </span>
          Designer
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-4 cursor-pointer md:hidden"
        >
          {open ? (
            <IoMdClose className="text-blue-800" />
          ) : (
            <GiHamburgerMenu className="text-blue-800" />
          )}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-10 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in md:h-12 h-[90vh] ${
            open ? "top-16 " : "-left-full"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <Link href={link.link}>
                <a
                  className="text-gray-800 hover:text-gray-400 duration-500"
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </a>
              </Link>
            </li>
          ))}
          <div className="flex">
            <SocialLink />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
