import { BiSearch, BiUser } from "react-icons/bi";
import { BsCart3 } from "react-icons/bs";
// import Button from "../Button/Button";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import React, { useEffect, useState } from "react";
// import SideNav from "./SideNav";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Link from "next/link";
import Image from "next/image";

const navigations = [
  {
    title: "Solutions",
    link: "#",
  },
  {
    title: "Insights",
    link: "#",
  },
  {
    title: "About",
    link: "#",
  },
];

const Header = () => {
  // const cartQty = useSelector((state) => state.qty);
  const [sideMenu, setSideMenu] = React.useState(false);

  const [scroll, setScroll] = useState(false);

  const getScroll = () => {
    const check = window.scrollY;
    if (check >= 100) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  const displaySideMenu = () => {
    setSideMenu(!sideMenu);
  };

  useEffect(() => {
    window.addEventListener("scroll", getScroll);
  });

  return (
    <header
      className={`${
        scroll ? "bg-white shadow-md" : "bg-transparent text-white"
      } fixed top-0 w-full h-[60px] flex items-center justify-center py-5 px-[12px]  z-50 md:py-0 md:px-10 `}
    >
      <div className="w-full flex items-center justify-between">
        <HiOutlineMenuAlt3
          fontSize={30}
          onClick={displaySideMenu}
          className={`${
            scroll ? "bg-white" : "bg-transparent"
          } mx-[10px] cursor-pointer block md:hidden`}
        />

        {/* {sideMenu ? <SideNav func={displaySideMenu} /> : null} */}
        {scroll ? (
          <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Image src="/logo.svg" alt="zoneX" width={70} height={70} />
          </Link>
        ) : (
          <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Image src="/logo.svg" alt="zoneX" width={70} height={70} />
          </Link>
        )}

        <div
          className={`${
            scroll ? "to-blue-950" : "white"
          } hidden md:flex items-center`}
        >
          {navigations?.map((n) => (
            <Link
              href={n?.link}
              key={n?.title}
              className="mx-[20px] pb-[2px] text-sm cursor-pointer capitalize  border-b-transparent border-b-[2px] hover:border-b-[#fb8500] transition-all duration-400 ease-in"
            >
              {n?.title}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
