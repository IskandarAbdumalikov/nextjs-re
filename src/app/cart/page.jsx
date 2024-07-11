"use client";

import Empty from "@/components/empty/Empty";
import {
  decreaseAmount,
  increaseAmount,
  remove,
} from "@/lib/features/cart/cartSlice";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  let data = useSelector((state) => state.cart.value);
  let dispatch = useDispatch();
  const [sum, setSum] = useState(0);

  useEffect(() => {
    const total = data?.reduce((acc, el) => acc + el.price * el.amount, 0);
    setSum(Math.ceil(total));
  }, [data]);

  return (
    <>
      {data.length > 0 ? (
        <div
          style={{ paddingTop: 150 }}
          className="container text-center
           mx-auto p-4"
        >
          <h2 className="text-2xl font-bold mb-4 ">Your cart items</h2>
          <Link href={"/"} className="text-blue-500 ">
            Back to shopping
          </Link>
          <div className="overflow-x-auto pt-[50px]">
            <table className="hidden sm:table min-w-full bg-white">
              <thead className="bg-gray-200">
                <tr>
                  <th className="py-2 px-4 text-start">Product</th>
                  <th className="py-2 px-4 text-start">Price</th>
                  <th className="py-2 px-4 text-start">Quantity</th>
                  <th className="py-2 px-4 text-start">Total</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((el) => (
                  <tr key={el.id} className="border-b">
                    <td className="py-2 px-4 flex items-center">
                      <Link href={`/product/${el.id}`}>
                        <Image
                          width={100}
                          height={100}
                          src={el.thumbnail}
                          className="mr-4"
                        />
                      </Link>
                      <div className="flex flex-col gap-2 items-start text-start">
                        <h2 className="text-lg font-medium">{el.title}</h2>
                        <button
                          onClick={() => dispatch(remove(el))}
                          className="text-red-500"
                        >
                          Remove
                        </button>
                      </div>
                    </td>
                    <td className="py-2 px-4 text-start">${el.price}</td>
                    <td className="py-2 px-4 text-start">
                      <div className="flex items-center gap-4">
                        <button
                          disabled={el.amount == 1}
                          onClick={() => dispatch(decreaseAmount(el))}
                          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
                        >
                          -
                        </button>
                        <span className="text-2xl">{el.amount}</span>
                        <button
                          onClick={() => dispatch(increaseAmount(el))}
                          className="px-4 py-2 bg-gray-200 rounded"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="py-2 px-4 text-start">
                      ${(el.price * el.amount).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Cards for smaller screens */}
            <div className="sm:hidden">
              {data?.map((el) => (
                <div key={el.id} className="border-b py-4">
                  <div className="flex items-center">
                    <Link href={`/product/${el.id}`}>
                      <Image
                        width={100}
                        height={100}
                        src={el.thumbnail}
                        className="mr-4"
                      />
                    </Link>
                    <div className="flex flex-col gap-2 items-start text-start">
                      <h2 className="text-lg font-medium">{el.title}</h2>
                      <span className="text-gray-500">${el.price}</span>
                      <button
                        onClick={() => dispatch(remove(el))}
                        className="text-red-500"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="mt-2 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <button
                        disabled={el.amount == 1}
                        onClick={() => dispatch(decreaseAmount(el))}
                        className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
                      >
                        -
                      </button>
                      <span className="text-2xl">{el.amount}</span>
                      <button
                        onClick={() => dispatch(increaseAmount(el))}
                        className="px-4 py-2 bg-gray-200 rounded"
                      >
                        +
                      </button>
                    </div>
                    <span className="text-xl">
                      ${(el.price * el.amount).toFixed(2)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-between items-center mt-4">
            <h2 className="text-xl font-bold">Subtotal :</h2>
            <h2 className="text-xl font-bold">${sum}</h2>
          </div>
        </div>
      ) : (
        <Empty
          url={"https://cdn-icons-png.flaticon.com/512/11329/11329060.png"}
        />
      )}
    </>
  );
};

export default Cart;
