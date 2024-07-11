'use client'
import { decrement, increment } from "@/lib/features/counter/counterSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Hero = () => {
  let dispatch = useDispatch();
  let count = useSelector((state) => state.counter.value);
  return (
    <div
      className="bg-no-repeat bg-center bg-cover p-[180px] flex items-center justify-center  pt-[200px]"
      style={{
        backgroundImage: `url(https://candleseurope.com/wp-content/uploads/2021/03/noelle-australia-6ElnH17iD-8-unsplash-700x700.jpg)`,
      }}
    >
      <div className="bg-white w-[730px] p-[60px] flex flex-col gap-[30px] text-center">
        <h2 style={{ fontSize: 35 }} className="text-lg">
          🌱
        </h2>

        <h2 style={{ fontSize: 35 }}>The nature candle</h2>
        <h3>
          All handmade with natural soy wax, Candleaf is a companion for all
          your pleasure moments
        </h3>
        <div className="counter flex items-center gap-4">
          <button
           disabled={count<=0}
            onClick={() => dispatch(decrement())}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            -
          </button>
          <span className="text-2xl">{count}</span>
          <button
            onClick={() => dispatch(increment())}
            className="px-4 py-2 bg-gray-200 rounded"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
