import React from "react";
import hero from "../../assets/clean.svg";
import Image from "next/image";

const Clean = () => {
  return (
    <div
      style={{ paddingTop: 80, marginTop: 80, alignItems: "center" }}
      className="clean bg-[#F7F8FA] flex flex-col items-center md:flex-row container max-w-[1440px] mx-auto md:items-start py-[100px] mt-[80px]"
    >
      <div className="clean__left flex flex-col gap-5 md:w-1/2 px-5">
        <h2 className="text-3xl font-semibold">Clean and fragrant soy wax</h2>
        <p className="text-lg">Made for your home and for your wellness</p>
        <ul className="list-none space-y-3">
          <li className="text-md">
            <h3>Eco-sustainable: All recyclable materials, 0% CO2 emissions</h3>
          </li>
          <li className="text-md">
            <h3>Eco-sustainable: All recyclable materials, 0% CO2 emissions</h3>
          </li>
          <li className="text-md">
            <h3>Eco-sustainable: All recyclable materials, 0% CO2 emissions</h3>
          </li>
          <li className="text-md">
            <h3>Eco-sustainable: All recyclable materials, 0% CO2 emissions</h3>
          </li>
        </ul>
        <button className=" bg-[#56B280] text-white py-2 px-4 rounded w-[180px]">
          Learn more
        </button>
      </div>
      <div className="clean__right md:w-1/2 w-full mt-8 md:mt-0">
        <Image src={hero} alt="Clean" className="w-full" />
      </div>
    </div>
  );
};

export default Clean;
