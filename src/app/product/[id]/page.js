"use client";

import Footer from "@/components/footer/Footer";
import { PRODUCTS__DATA } from "@/static";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useState } from "react";

const SinglePage = () => {
  let { id } = useParams();
  let [count, setCount] = useState(0);
  let singleData = PRODUCTS__DATA.filter((el) => el.id == id)[0];

  return (
    <>
      <div
        style={{ marginTop: 100 }}
        className="single__page container mx-auto max-w-[1440px] flex flex-col md:flex-row items-start gap-10 px-4 py-8"
      >
        <div className="single__left flex flex-col gap-6 w-full md:w-1/2">
          <Image
            className="w-full"
            src={singleData.img}
            alt={singleData.name}
          />
          <h3 className="text-lg">
            All hand-made with natural soy wax, Candleaf is made for your
            pleasure moments.
          </h3>
          <h3 className="text-lg"> 🚚 FREE SHIPPING</h3>
        </div>
        <div className="single__right flex flex-col gap-6 w-full md:w-1/2">
          <h2 className="text-3xl font-semibold">{singleData.name}</h2>
          <h1 className="text-4xl font-bold text-green-600">
            ${singleData.price}
          </h1>
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-medium">Quantity</h2>
            <div className="counter flex items-center gap-4">
              <button
                className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
                onClick={() => setCount((p) => p - 1)}
                disabled={count <= 0}
              >
                -
              </button>
              <span className="text-2xl">{count}</span>
              <button
                className="px-4 py-2 bg-gray-200 rounded"
                onClick={() => setCount((p) => p + 1)}
              >
                +
              </button>
            </div>
            <button className="mt-4  px-4 py-2 bg-[#56B280] text-white rounded ">
              + Add to cart
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SinglePage;
