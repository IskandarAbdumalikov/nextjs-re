"use client";
import React, { useState } from "react";
import ProductsItems from "./ProductsItems";
import { useGetCategoriesQuery } from "@/lib/api/categoriesApi";

const Products = ({ title, limit }) => {
  const { data } = useGetCategoriesQuery();
  const [category, setCategory] = useState("");
  console.log("data", data);

  return (
    <div className="container mx-auto max-w-[1440px] flex flex-col gap-[60px] text-center py-[40px]">
      <h2 className="text-4xl pt-[40px]">{title}</h2>
      <h3>Order it for you or for your beloved ones</h3>
      <ul className="flex items-center gap-[10px]">
        <li
          className="px-[10px] cursor-pointer py-[5px] text-white rounded-[5px] bg-blue-400 text-nowrap"
          onClick={() => setCategory("")}
        >
          all
        </li>
        {data?.map((el) => (
          <li
            className="px-[10px] cursor-pointer py-[5px] text-white rounded-[5px] bg-blue-400 text-nowrap"
            onClick={() => setCategory(el.name)}
            key={el.id}
          >
            {el.name}
          </li>
        ))}
      </ul>
      <ProductsItems limit={limit} isAdmin={false} category={category} />
    </div>
  );
};

export default Products;
