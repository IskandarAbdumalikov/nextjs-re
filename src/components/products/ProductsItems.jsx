"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { toggleHeart } from "@/lib/features/wishlist/wishlistSlice";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import {
  add,
  decreaseAmount,
  increaseAmount,
  remove,
} from "@/lib/features/cart/cartSlice";
import SingleModule from "./SingleModule";
import "./singleModule.css";
import {
  useDeleteProductMutation,
  useGetProductsQuery,
  useUpdateProductMutation,
} from "@/lib/api/productApi";
import EditModule from "../editModule/EditModule";

const ProductsItems = ({ limit, isAdmin, category }) => {
  const { data } = useGetProductsQuery({ limit, category });
  const wishlistData = useSelector((state) => state.wishlist.value);
  const cartData = useSelector((state) => state.cart.value);

  const dispatch = useDispatch();
  const [showModule, setShowModule] = useState(false);
  const [showEditModule, setShowEditModule] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleViewMore = (product) => {
    setSelectedProduct(product);
    setShowModule(true);
  };

  const [handleDelete] = useDeleteProductMutation();
  const [handleUpdate, { data: update }] = useUpdateProductMutation();

  console.log("update", update);

  const handleUpdateProduct = (product) => {
    setSelectedProduct(product);
    setShowEditModule(true);
  };

  const handleUpdateSubmit = (updatedProduct) => {
    const { id, ...body } = updatedProduct;
    handleUpdate({ id, ...body }).then(() => {
      setShowEditModule(false);
    });
  };

  return (
    <div className="products__cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-4">
      {data?.map((el) => (
        <div
          className="products__cards__card rounded-lg relative shadow-md flex flex-col max-h-[400px] min-h-[250px] gap-4 bg-white"
          key={el.id}
        >
          <div
            onClick={() => handleViewMore(el)}
            className="products__cards__card__image flex-1 h-1/2 w-full bg-gray-100 cursor-pointer"
          >
            <Image
              src={el.images[0]}
              width={500}
              height={500}
              className="w-full h-full object-contain rounded-t-lg"
              alt={el.name}
            />
          </div>

          <div className="products__cards__card__info flex-1 flex flex-col items-center justify-center gap-4 p-4">
            <Link
              className="cursor-pointer text-blue-500 hover:underline"
              href={`/product/${el.id}`}
            >
              {el.title}
            </Link>
            <h2 className="text-green-500 text-xl">${el.price}</h2>
            <button
              onClick={() => dispatch(toggleHeart(el))}
              className="absolute top-4 left-4"
            >
              {wishlistData.some((product) => product.id === el.id) ? (
                <FaHeart className="text-green-500 w-5 h-5" />
              ) : (
                <FaRegHeart className="w-5 h-5 text-green-500" />
              )}
            </button>
            <button
              onClick={() => dispatch(add(el))}
              className="absolute top-4 right-4"
            ></button>
            <div className="flex items-center justify-between gap-4 w-full">
              {isAdmin && (
                <button
                  className="bg-red-600 py-2 px-4 rounded text-white"
                  onClick={() => handleDelete(el.id)}
                >
                  Delete
                </button>
              )}
              {cartData.some((product) => product.id === el.id) ? (
                <div className="counter flex items-center gap-4">
                  {cartData.find((product) => product.id === el.id).amount ===
                  1 ? (
                    <button
                      onClick={() =>
                        dispatch(
                          remove(
                            cartData.find((product) => product.id === el.id)
                          )
                        )
                      }
                      className="px-4 py-2 bg-gray-200 rounded"
                    >
                      -
                    </button>
                  ) : (
                    <button
                      onClick={() =>
                        dispatch(
                          decreaseAmount(
                            cartData.find((product) => product.id === el.id)
                          )
                        )
                      }
                      className="px-4 py-2 bg-gray-200 rounded"
                    >
                      -
                    </button>
                  )}

                  <span className="text-2xl">
                    {cartData.find((product) => product.id === el.id).amount}
                  </span>
                  <button
                    onClick={() =>
                      dispatch(
                        increaseAmount(
                          cartData.filter((product) => product.id === el.id)[0]
                        )
                      )
                    }
                    className="px-4 py-2 bg-gray-200 rounded"
                  >
                    +
                  </button>
                </div>
              ) : (
                <button
                  className="bg-green-600 py-2 px-4 rounded text-white"
                  onClick={() => dispatch(add(el))}
                >
                  + ADD to cart
                </button>
              )}
              {isAdmin && (
                <button
                  className="bg-blue-600 py-2 px-4 rounded text-white"
                  onClick={() => handleUpdateProduct(el)}
                >
                  Edit
                </button>
              )}
            </div>
          </div>
          {showModule && (
            <SingleModule
              product={selectedProduct}
              setShowModule={setShowModule}
            />
          )}
          {showModule && showEditModule && (
            <div onClick={() => setShowModule(false)} className="overlay"></div>
          )}
        </div>
      ))}
      {showEditModule && (
        <EditModule
          isProducts={true}
          data={selectedProduct}
          setShowEditModule={setShowEditModule}
          onUpdate={handleUpdateSubmit}
        />
      )}
    </div>
  );
};

export default ProductsItems;
