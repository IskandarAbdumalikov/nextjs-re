import React from "react";

import { getData } from "@/hooks/fetchUser";
import ProductsItems from "./ProductsItems";

const Products = async ({ title,limit }) => {
  let PRODUCTS__DATA = await getData(`products?limit=${limit}`);


  return (
    <div className="container mx-auto max-w-[1440px] flex flex-col gap-[60px] text-center py-[40px]">
      <h2 className="text-4xl pt-[40px]">{title}</h2>
      <h3>Order it for you or for your beloved ones</h3>
      <ProductsItems data={PRODUCTS__DATA}/>
    </div>
  );
};

export default Products;
