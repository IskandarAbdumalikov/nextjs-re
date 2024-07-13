"use client";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdClose, MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import "swiper/css";
import "swiper/css/navigation";
import "./singleModule.css";
import Image from "next/image";
import Link from "next/link";

const SingleModule = ({ product, setShowModule }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleClose = () => {
    setShowModule(false);
  };

  if (!product) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-button" onClick={handleClose}>
          <MdClose size={24} />
        </button>
        <h2>{product.title}</h2>
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className="product-swiper"
        >
          {product?.map((url, index) => (
            <SwiperSlide key={index}>
              <Image
                width={200}
                height={200}
                src={url}
                alt={`Product image ${url.thumbnail}`}
                className="product-image"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-prev">
          <MdNavigateBefore size={24} />
        </div>
        <div className="swiper-button-next">
          <MdNavigateNext size={24} />
        </div>
        <p>
          {product.description
            ? product.description
            : "No description available"}
        </p>
        <p>Price: ${product.price}</p>
        <Link className="text-blue-400" href={`/product/${product.id}`}>
          Show more details
        </Link>
      </div>
    </div>
  );
};

export default SingleModule;
