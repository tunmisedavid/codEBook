import { Link } from "react-router-dom";
import { IoSettingsOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";
import { useEffect, useState } from "react";
import Search from "../Section/Search";
import { DropdownLoggedOut, DropdownLoggedIn } from "../index";
import { UseCart } from "../../context";

import Logo from "../../assets/logo.png"

const Header = () => {
  const {cartList} = UseCart()
  const [dark, setdark] = useState(
    JSON.parse(localStorage.getItem("dark")) || false
  );
  const [search, setSearch] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const token = JSON.parse(sessionStorage.getItem("token"));

  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(dark));
    dark
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [dark]);
  return (
    <header>
      <nav className="bg-white border-gray-200 dark:bg-gray-900  py-5">
        <div className="flex flex-wrap justify-between items-center mx-auto w-[90%] max-w-screen-xl">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src={Logo}
              className="h-8"
              alt="Codebook Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Codebook
            </span>
          </Link>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <span
              onClick={() => setdark(!dark)}
              className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5"
            >
              <IoSettingsOutline />
            </span>
            <span
              onClick={() => setSearch(!search)}
              className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5"
            >
              <CiSearch />
            </span>
            <Link to="/cart" className="text-gray-700 dark:text-white mr-5">
              <span className="text-2xl relative">
                <MdOutlineShoppingCart className="" />
                <span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full">
                  {cartList.length}
                </span>
              </span>
            </Link>
            <span
              onClick={() => setDropdown(!dropdown)}
              className=" cursor-pointer text-2xl text-gray-700 dark:text-white"
            >
              <FaRegCircleUser />
            </span>
            {dropdown &&
              (token ? (
                <DropdownLoggedIn setDropdown={setDropdown} />
              ) : (
                <DropdownLoggedOut setDropdown={setDropdown} />
              ))}
          </div>
        </div>
      </nav>
      {search && <Search setSearch={setSearch} />}
    </header>
  );
};

export default Header;
