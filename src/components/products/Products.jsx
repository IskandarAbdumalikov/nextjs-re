import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getData } from "@/hooks/fetchUser";

const Products = async ({ title,limit }) => {
  let PRODUCTS__DATA = await getData(`products?limit=${limit}`);
  return (
    <div className="container mx-auto max-w-[1440px] flex flex-col gap-[60px] text-center py-[40px]">
      <h2 className="text-4xl pt-[40px]">{title}</h2>
      <h3>Order it for you or for your beloved ones</h3>
      <div className="products__cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {PRODUCTS__DATA?.products?.map((el) => (
          <div
            className="products__cards__card rounded-[10px] shadow-md flex flex-col max-h-[400px] min-h-[250px] gap-4"
            key={el.id}
          >
            <Link
              href={`/product/${el.id}`}
              className="products__cards__card__image flex-1 h-1/2 w-full bg-[#f8f7fe]"
            >
              <Image
                src={el.images[0]}
                width={500}
                height={500}
                className="w-full h-full object-contain"
                alt={el.name}
              />
            </Link>
            <div className="products__cards__card__info flex-1 flex flex-col items-center justify-center gap-[30px]">
              <Link
                className="cursor-pointer text-blue-500"
                href={`/product/${el.id}`}
              >
                {el.title}
              </Link>
              <h2 className="text-green-500">${el.price}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
