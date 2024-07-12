"use client";
import AdminHeader from "@/components/adminHeader/AdminHeader";
import Sidebar from "@/components/sidebar/Sidebar";
import React, { useState, memo } from "react";
import "../admin.scss";
import { useCreateProductMutation } from "@/lib/api/productApi";
import { useGetCategoriesQuery } from "@/lib/api/categoriesApi";

const initialState = {
  title: "",
  thumbnail: "",
  description: "",
  price: "",
  category: "",
  brand: "",
  images: "",
};

const ProductCreate = () => {
  let { data: categoryData } = useGetCategoriesQuery();
  const [handleCreate] = useCreateProductMutation();
  const [productData, setProductData] = useState(initialState);

  const handleChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  const handleCreateProduct = async (e) => {
    e.preventDefault();
    const { title, thumbnail, description, price, category, brand, images } =
      productData;
    const imagesArray = images.split(",").map((img) => img.trim());
    await handleCreate({
      title,
      thumbnail: "",
      description,
      price: Number(price),
      category,
      brand,
      images: "",
    });
    setProductData(initialState);
  };

  return (
    <div className="admin">
      <Sidebar />
      <div className="flex flex-col w-full">
        <AdminHeader />
        <form onSubmit={handleCreateProduct} className="p-4 space-y-4">
          <div className="flex flex-col">
            <label
              htmlFor="title"
              className="text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={productData.title}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="thumbnail"
              className="text-sm font-medium text-gray-700"
            >
              Thumbnail
            </label>
            <input
              type="text"
              id="thumbnail"
              name="thumbnail"
              value={productData.thumbnail}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="description"
              className="text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <input
              type="text"
              id="description"
              name="description"
              value={productData.description}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="price"
              className="text-sm font-medium text-gray-700"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={productData.price}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="category"
              className="text-sm font-medium text-gray-700"
            >
              Category
            </label>
            <select
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md"
              required
              name="category"
              id="category"
            >
              {categoryData?.map((el) => (
                <option value={el.slug}>{el.name}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="brand"
              className="text-sm font-medium text-gray-700"
            >
              Brand
            </label>
            <input
              type="text"
              id="brand"
              name="brand"
              value={productData.brand}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="images"
              className="text-sm font-medium text-gray-700"
            >
              Images
            </label>
            <input
              type="text"
              id="images"
              name="images"
              value={productData.images}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <button
            type="submit"
            className="mt-4 p-2 bg-blue-500 text-white rounded-md"
          >
            Create Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default memo(ProductCreate);
