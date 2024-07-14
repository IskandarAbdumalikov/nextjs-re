"use client";
import React from "react";
import star from "../../assets/star.svg";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import {
  add,
  decreaseAmount,
  increaseAmount,
  remove,
} from "@/lib/features/cart/cartSlice";
import { useGetProductByIdQuery } from "@/lib/api/productApi";

const Single = ({ id }) => {
  console.log(id);
  let data = useGetProductByIdQuery(id);
  let singleData = data?.data;
  let cartData = useSelector((state) => state.cart.value);
  let selectedData = cartData.find((product) => product.id === singleData.id);

  let dispatch = useDispatch();
  return (
    <div
      style={{ marginTop: 100 }}
      className="single__page container mx-auto max-w-[1440px] flex flex-col md:flex-row items-start gap-10 px-4 py-8"
    >
      <div className="single__left flex flex-col gap-6 w-full md:w-1/2">
        <Image
          className="w-full object-contain max-h-[600px]"
          width={500}
          height={500}
          src={singleData?.thumbnail}
          alt={singleData?.title}
        />
        <h3 className="text-lg">
          All hand-made with natural soy wax, Candleaf is made for your pleasure
          moments.
        </h3>
        <h3 className="text-lg"> 🚚 FREE SHIPPING</h3>
      </div>
      <div className="single__right flex flex-col gap-6 w-full md:w-1/2">
        <h2 className="text-3xl font-semibold">{singleData?.title}</h2>
        <h1 className="text-4xl font-bold text-green-600">
          ${singleData?.price}
        </h1>
        <p>{singleData?.description}</p>
        <div className="flex gap-[10px] items-center">
          <Image width={20} height={20} src={star} alt="star" />
          <h1>{singleData?.rating}</h1>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-medium">Quantity</h2>
          {cartData.some((product) => product.id === singleData.id) ? (
            <div className="counter flex items-center gap-4">
              {selectedData.amount === 1 ? (
                <button
                  onClick={() => dispatch(remove(selectedData))}
                  className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
                >
                  -
                </button>
              ) : (
                <button
                  onClick={() => dispatch(decreaseAmount(selectedData))}
                  className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
                >
                  -
                </button>
              )}

              <span className="text-2xl">{selectedData.amount}</span>
              <button
                onClick={() =>
                  dispatch(
                    increaseAmount(
                      cartData.filter(
                        (product) => product.id === singleData.id
                      )[0]
                    )
                  )
                }
                className="px-4 py-2 bg-gray-200 rounded"
              >
                +
              </button>
            </div>
          ) : (
            <button
              onClick={() => dispatch(add(singleData))}
              className="mt-4  px-4 py-2 bg-[#56B280] text-white rounded "
            >
              + Add to cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Single;
