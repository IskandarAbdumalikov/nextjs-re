import Footer from "@/components/footer/Footer";
import { getData } from "@/hooks/fetchUser";
import Image from "next/image";
import React from "react";
import star from "../../../assets/star.svg";

const SinglePage = async ({ params }) => {
  let { id } = params;

  let singleData = await getData(`products/${id}`);
  return (
    <>
      <div
        style={{ marginTop: 100 }}
        className="single__page container mx-auto max-w-[1440px] flex flex-col md:flex-row items-start gap-10 px-4 py-8"
      >
        <div className="single__left flex flex-col gap-6 w-full md:w-1/2">
          <Image
            className="w-full"
            width={500}
            height={500}
            src={singleData?.images[0]}
            alt={singleData?.title}
          />
          <h3 className="text-lg">
            All hand-made with natural soy wax, Candleaf is made for your
            pleasure moments.
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
            <div className="counter flex items-center gap-4">
              <button className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50">
                -
              </button>
              <span className="text-2xl">0</span>
              <button className="px-4 py-2 bg-gray-200 rounded">+</button>
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
