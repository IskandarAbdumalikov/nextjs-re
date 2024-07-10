import React from "react";

const Hero = () => {
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
          your pleasure moments{" "}
        </h3>
        <button>Discovery our collection</button>
      </div>
    </div>
  );
};

export default Hero;
