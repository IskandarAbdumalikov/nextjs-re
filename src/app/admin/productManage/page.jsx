"use client";
import AdminHeader from "@/components/adminHeader/AdminHeader";
import Sidebar from "@/components/sidebar/Sidebar";
import React, { useState } from "react";
import "../admin.scss";
import ProductsItems from "@/components/products/ProductsItems";
import { useGetCategoriesQuery } from "@/lib/api/categoriesApi";

const productManage = () => {
  let { data } = useGetCategoriesQuery();
  let [category, setCategory] = useState("");

  return (
    <div className="admin">
      <Sidebar />
      <div className="flex flex-col gap-[50px] px-[40px]">
        <div>
          <select
          className="p-[10px] outline-none select"
            onChange={(e) => setCategory(e.target.value)}
            name="category"
            id=""
          >
            <option value="">All</option>
            {data?.map((el) => (
              <option value={el.slug}>{el.name}</option>
            ))}
          </select>
        </div>
        <ProductsItems category={category} isAdmin={true} />
      </div>
    </div>
  );
};

export default productManage;
