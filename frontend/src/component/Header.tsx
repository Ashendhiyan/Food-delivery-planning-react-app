import React from "react";
import logo from "../assets/FoodZoneLogo.png";
import { Link } from "react-router-dom";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { FaCartArrowDown } from "react-icons/fa6";
import { useSelector } from "react-redux";

interface RootState {
  user: {
    image: string;
  };
}

export const Header = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const userData = useSelector((state: RootState) => state.user); // Explicitly type the state parameter

  const handleShowMenu = () => {
    setShowMenu((prev) => !prev);
  };

  function handleLogut(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div>
      <header className="flex shadow-md w-full h-16 px-2 md:px-3 z-50">
        <div className="flex items-center w-full h-full justify-between mx-5">
          <Link to={""}>
            <div className="h-13">
              <img src={logo} className="h-full" alt="logo" />
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
              <div className="absolute -top-2 -right-1 text-white bg-red-500 h-4 w-4 rounded-full m-0 p-0 text-sm text-center">
                0
              </div>
            </div>
            <div className="text-slate-600" onClick={handleShowMenu}>
              <div className="text-3xl cursor-pointer w-10 h-10 rounded-full overflow-hidden drop-shadow-md">
                {userData.image ? (
                  <img src={userData.image} alt="user" className="h-full w-full" />
                ) : (
                  <HiOutlineUserCircle />
                )}
              </div>
              {showMenu && (
                <div className="absolute right-2 bg-white py-2 px-2 shadow drop-shadow-md flex flex-col">
                  <Link to={"newproduct"} className="whitespace-nowrap cursor-pointer">
                    New product
                  </Link>
                  {
                    userData.image?  <p className="cursor-pointer text-black bg-blue-400" onClick={handleLogut}>Logout</p> : <Link to={"login"} className="whitespace-nowrap cursor-pointer">
                    Login
                  </Link>
                  }
                 
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
