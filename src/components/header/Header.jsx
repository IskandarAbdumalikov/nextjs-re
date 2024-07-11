"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../assets/logo.svg";
import user from "../../assets/user.svg";
import cart from "../../assets/cart.svg";
import heart from "../../assets/heart.svg";
//CSR
import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";

function Header() {
  let wishlistData = useSelector((state) => state.wishlist.value);
  let cartData = useSelector((state) => state.cart.value);
  console.log(cartData);
  let path = usePathname();
  if (path.includes("/laylo") || path.includes("/admin")) {
    return <></>;
  }

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 py-[25px]">
      <div className="container mx-auto max-w-[1440px] flex justify-between items-center py-4">
        <Link href={"/"} className="header__logo">
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
          <Link href={"/admin"}>
            <Image width={30} src={user} alt="User" />
          </Link>
          <Link className="relative" href={"/cart"}>
            <Image width={30} src={cart} alt="Cart" />
            <sup className="absolute top-[-10px] right-[-10px] text-white py-[10px] px-[5px] bg-green-500 rounded-full ">
              {cartData ? cartData.length : 0}
            </sup>
          </Link>

          <Link className="relative" href={"/wishlist"}>
            <Image width={30} src={heart} alt="Heart" />
            <sup className="absolute top-[-10px] right-[-10px] text-white py-[10px] px-[5px] bg-green-500 rounded-full ">
              {wishlistData ? wishlistData.length : 0}
            </sup>
          </Link>
        </ul>
      </div>
    </header>
  );
}

export default Header;
