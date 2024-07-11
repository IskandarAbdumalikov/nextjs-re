"use client";

import { toggleHeart } from "@/lib/features/wishlist/wishlistSlice";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import cart from "../../assets/cart.svg";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import Empty from "@/components/empty/Empty";

const Wishlist = () => {
  let data = useSelector((state) => state.wishlist.value);
  let dispatch = useDispatch();
  console.log(data);

  return (
    <>
      {data?.length > 0 ? (
        <div className="container">
          <h2>Your wishlist</h2>
          <div className="products__cards  pt-[150px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {data?.map((el) => (
              <div
                className="products__cards__card rounded-[10px] relative shadow-md flex flex-col max-h-[400px] min-h-[250px] gap-4"
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
                  <button
                    onClick={() => dispatch(toggleHeart(el))}
                    className="absolute top-[10px] left-[10px]"
                  >
                    {data.some((product) => product.id === el.id) ? (
                      <FaHeart className="text-crimson w-5 h-5" />
                    ) : (
                      <FaRegHeart className="w-5 h-5" />
                    )}
                  </button>
                  <button className="absolute top-[10px] right-[10px]">
                    <Image width={25} height={25} src={cart} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <Empty
          url={
            "https://i.pinimg.com/originals/f6/e4/64/f6e464230662e7fa4c6a4afb92631aed.png"
          }
        />
      )}
    </>
  );
};

export default Wishlist;
