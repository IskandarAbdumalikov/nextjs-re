'use client'
import React, { useState } from "react";
import Sidebar from "@/components/sidebar/Sidebar";
import { useCreateCategoriesMutation } from "@/lib/api/categoriesApi";

const initialState = {
  name: "",
};

const CategoryCreate = () => {
  const [handleCreate, { data }] = useCreateCategoriesMutation();
  const [categoryData, setCategoryData] = useState(initialState);

  const handleChange = (e) => {
    setCategoryData({ ...categoryData, [e.target.name]: e.target.value });
  };

  const handleCreateCategory = async (e) => {
    e.preventDefault();
    const { name } = categoryData;
    await handleCreate({
      name,
    });
    setCategoryData(initialState);
  };

  return (
    <div className="admin">
      <Sidebar />
      <div>
        <h2 className="p-4 space-y-4">Create category</h2>
        <form onSubmit={handleCreateCategory} className="p-4 space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">
              Category name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={categoryData.name}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <button
            type="submit"
            className="mt-4 p-2 bg-blue-500 text-white rounded-md"
          >
            Create Category
          </button>
        </form>
      </div>
    </div>
  );
};

export default CategoryCreate;
