import Footer from "@/components/footer/Footer";
import React from "react";
import Single from "@/components/single/Single";

const SinglePage = ({ params }) => {
  let { id } = params;
  console.log(id);

  return (
    <>
      <Single id={id} />
      <Footer />
    </>
  );
};

export default SinglePage;
