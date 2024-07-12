"use client";
import React, { memo } from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { IoCreateOutline } from "react-icons/io5";
import { AiOutlineProduct } from "react-icons/ai";

import "./sidebar.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  console.log(pathname);

  const isActive = (path) => pathname == path;

  return (
    <div className="sidebar">
      <h2 className="sidebar__logo">
        <Link href={"/"}>
          <FaArrowAltCircleLeft />
        </Link>
        <span>Dashboard</span>
      </h2>
      <ul className="sidebar__collection">
        <li className="sidebar__item">
          <Link
            className={`sidebar__link ${
              isActive("/admin/productCreate") ? "active" : ""
            }`}
            href={"/admin/productCreate"}
          >
            <IoCreateOutline />
            <span>Create Product</span>
          </Link>
        </li>
        <li className="sidebar__item">
          <Link
            className={`sidebar__link ${
              isActive("/admin/productManage") ? "active" : ""
            }`}
            href={"/admin/productManage"}
          >
            <AiOutlineProduct />
            <span>Manage Product</span>
          </Link>
        </li>
        <li className="sidebar__item">
          <Link
            className={`sidebar__link ${
              isActive("/admin/categoryCreate") ? "active" : ""
            }`}
            href={"/admin/categoryCreate"}
          >
            <IoCreateOutline />
            <span>Create category</span>
          </Link>
        </li>
        <li className="sidebar__item">
          <Link
            className={`sidebar__link ${
              isActive("/admin/categoryManage") ? "active" : ""
            }`}
            href={"/admin/categoryManage"}
          >
            <AiOutlineProduct />
            <span>Manage category</span>
          </Link>
        </li>
      </ul>
      <Link
        className={`sidebar__home text-nowrap   ${
          isActive("/") ? "active" : ""
        }`}
        href={"/"}
      >
        <FaArrowAltCircleLeft />
        Home
      </Link>
    </div>
  );
};

export default memo(Sidebar);
