import Image from "next/image";
import Link from "next/link";
import React from "react";

const Empty = ({ url }) => {
  return (
    <div style={{paddingTop:200}} className="container flex flex-col items-center justify-center gap-[50px] mt-[200px]">
      <Image width={500} height={500} className="object-contain" src={url} />
      <Link href={"/"}>
        <button className="bg-green-500 rounded-[10px] py-[10px] px-[15px] text-white">Back to home</button>
      </Link>
    </div>
  );
};

export default Empty;
