"use client"; // useState는 클라이언트에서만 사용할 수 있기에.

import Link from "next/link";
import React, { useState } from "react";
import NavItem from "./NavItem";

const Navbar = () => {
  const [menu, setMenu] = useState(false); // 메뉴 버튼 상태

  const handleMenu = () => {
    setMenu(!menu); // 원래 상태에서 토글하기
  };

  return (
    <nav className="relative z-10 w-full bg-orange-400 text-white">
      <div className="flex items-center justify-between mx-5 sm:mx-10 lg:mx-20">
        <div className="flex items-center text-2xl h-14">
          <Link href="/">Logo</Link>
        </div>
        <div className="text-2xl sm:hidden">
          {menu === false ? (
            <button onClick={handleMenu}> + </button>
          ) : (
            <button onClick={handleMenu}> - </button>
          )}
        </div>
        <div className="hidden sm:block">
          <NavItem />
        </div>
      </div>
      <div className="block sm:hidden">
        {menu === false ? null : <NavItem moblie />}
      </div>
    </nav>
  );
};

export default Navbar;
