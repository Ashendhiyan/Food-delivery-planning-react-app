import React, { useState } from "react";
import logo from "../assets/FoodZoneLogo.png";
import { Link } from "react-router-dom";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { FaCartArrowDown } from "react-icons/fa6";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => {
    setShowMenu((preve) => !preve);
  };
  return (
    <div>
      <header className="flex shadow-md w-full h-16 px-2 md:px-3 z-50">
        {/* desktop */}

        <div className="flex items-center w-full h-full justify-between mx-5">
          <Link to={""}>
            <div className="h-13">
              <img src={logo} className="h-full" />
            </div>
          </Link>

          <div className="flex items-center gap-4 md:gap-7">
            <nav className="flex gap-4 md:gap-6 text-base md:text-lg">
              <Link to={""}>Home</Link>
              <Link to={"menu"}>Menu</Link>
              <Link to={"about"}>About us</Link>
              <Link to={"contact"}>Contact us</Link>
            </nav>
            <div className="text-2xl text-slate-600 relative">
              <FaCartArrowDown />
              <div className="absolute -top-2 -right-1 text-white bg-red-500 h-4 w-4 rounded-full m-0 p-0 text-sm text-center ">
                0
              </div>
            </div>
            <div className="text-slate-600" onClick={handleShowMenu}>
              <div className="text-3xl cursor-pointer" >
                <HiOutlineUserCircle />
              </div>
              {showMenu && (
                <div className="absolute right-2 bg-white py-2 px-2 shadow drop-shadow-md flex flex-col">
                  <Link to={'newproduct'}className="whitespace-nowrap cursor-pointer">
                    New product
                  </Link>
                  <Link to={'login'} className="whitespace-nowrap cursor-pointer">Login</Link>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* mobile */}
      </header>
    </div>
  );
};
