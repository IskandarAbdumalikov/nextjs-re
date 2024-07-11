"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { IoCartOutline, IoCartSharp } from "react-icons/io5";
import { toggleHeart } from "@/lib/features/wishlist/wishlistSlice";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { add } from "@/lib/features/cart/cartSlice";
import SingleModule from "./SingleModule";
import "./singleModule.css";

const ProductsItems = ({ data }) => {
  let wishlistData = useSelector((state) => state.wishlist.value);
  let cartData = useSelector((state) => state.cart.value);
  let dispatch = useDispatch();
  const [showModule, setShowModule] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleViewMore = (product) => {
    setSelectedProduct(product);
    setShowModule(true);
  };
  return (
    <div className="products__cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {data?.products?.map((el) => (
        <div
          className="products__cards__card rounded-[10px] relative shadow-md flex flex-col max-h-[400px] min-h-[250px] gap-4"
          key={el.id}
        >
          <div
            onClick={() => handleViewMore(el)}
            className="products__cards__card__image flex-1 h-1/2 w-full bg-[#f8f7fe]"
          >
            <Image
              src={el.images[0]}
              width={500}
              height={500}
              className="w-full h-full object-contain"
              alt={el.name}
            />
          </div>
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
              {wishlistData.some((product) => product.id === el.id) ? (
                <FaHeart className="text-green-500 w-5 h-5" />
              ) : (
                <FaRegHeart className="w-5 h-5 text-green-500" />
              )}
            </button>
            <button
              onClick={() => dispatch(add(el))}
              className="absolute top-[10px] right-[10px]"
            >
              {cartData.some((product) => product.id === el.id) ? (
                <IoCartSharp className="text-green-500 w-5 h-5" />
              ) : (
                <IoCartOutline className="w-5 h-5 text-green-500" />
              )}
            </button>
          </div>
          {showModule ? (
            <SingleModule
              product={selectedProduct}
              setShowModule={setShowModule}
            />
          ) : (
            <></>
          )}
          {showModule ? (
            <div onClick={() => setShowModule(false)} className="overlay"></div>
          ) : (
            <></>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductsItems;
