import Footer from "@/components/footer/Footer";
import { getData } from "@/hooks/fetchUser";
import React from "react";
import Single from "@/components/single/Single";

const SinglePage = async ({ params }) => {
  let { id } = params;

  let singleData = await getData(`products/${id}`);
  return (
    <>
      <Single singleData={singleData}/>
      <Footer />
    </>
  );
};

export default SinglePage;
