import { useState } from "react";
import { FaBars, FaRegLightbulb, FaTimes } from "react-icons/fa";
import NavTopImage from "@/images/navtop.png";
import Link from "next/link";
import Image from "next/image";
import logo from "@/images/logo.png";
import Button from "./Button";
import ThemeToggle from "./ThemesToggle";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-[#EFF9F9] md:h-[213px] overflow-hidden">
      <div>
        <Image src={NavTopImage} alt="" width={1444} height={74} />
      </div>
      <nav className="max-w-[1280px] pt-[40px] mx-auto h-auto bg-[#EFF9F9] flex items-center justify-between p-4 text-white">
        <div className="font-bold text-xl flex items-center">
          <Link href="/">
            <Image alt="logo" src={logo} width={257} className="object-cover" />
          </Link>
          <ul className="lg:flex flex-1 lg:items-center lg:pb-0 pb-12 font-semibold lg:text-base text-sm absolute text-primary-500 lg:static lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-300 ease-in">
            <li className="lg:ml-8  lg:my-0 my-7">
              <Link href="/about">About Us</Link>
            </li>
            <li className="lg:ml-8  lg:my-0 my-7">
              <Link href="/about">Product</Link>
            </li>
            <li className="lg:ml-8  lg:my-0 my-7">
              <Link href="/about">Learn</Link>
            </li>
            <li className="lg:ml-8  lg:my-0 my-7">
              <Link href="/about">FAQs</Link>
            </li>
            <li className="lg:ml-8  lg:my-0 my-7">
              <Link href="/about">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="flex-1 justify-end hidden lg:flex">
          <div className="flex text-primary-500 items-center justify-center">
            <div className="mr-3">
              <ThemeToggle />
            </div>
            <div>
              <button className="lg:text-base text-sm font-semibold px-[18px] py-[10px]">
                Login
              </button>
            </div>
            <div className="ml-[12px]">
              <Button text="Start Trading" />
            </div>
          </div>
        </div>
        <div
          className="lg:hidden w-[43px] h-[39px] rounded-[3.54px] bg-secondary-300 flex items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <FaTimes size={21} color="#002616" />
          ) : (
            <FaBars size={21} color="#002616" />
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
