"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../assets/logo.svg";
import user from "../../assets/user.svg";
import cart from "../../assets/cart.svg";
//CSR
import React, { useState } from "react";
import Image from "next/image";

function Header() {
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);
  let path = usePathname();
  if (path.includes("/laylo") || path.includes("/admin")) {
    return <></>;
  }

  function handleActive(e) {
    if (path.includes(e.target.href)) {
      setIsActive(true);
    }
  }
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 py-[25px]">
      <div className="container mx-auto max-w-[1440px] flex justify-between items-center py-4">
        <Link href={'/'} className="header__logo">
          <Image alt="image" src={logo} width={120} />
        </Link>
        <ul className="flex gap-8 items-center">
          <select
            name=""
            id=""
            className="bg-transparent border-none outline-none"
          >
            <option value="discovery">Discovery</option>
          </select>
          <Link href="/about" className="text-gray-700 hover:text-gray-900">
            About
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-gray-900">
            Contact Us
          </Link>
        </ul>
        <ul className="flex gap-8 items-center">
          <Image width={30} src={user} alt="User" />
          <Image width={30} src={cart} alt="Cart" />
        </ul>
      </div>
    </header>
  );
}

export default Header;
