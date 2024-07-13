"use client";
import React, { useState } from "react";
import EditModule from "@/components/editModule/EditModule";
import Sidebar from "@/components/sidebar/Sidebar";
import {
  useGetCategoriesQuery,
  useDeleteCategoryMutation,
  useUpdateCategoryMutation,
} from "@/lib/api/categoriesApi";

const CategoryManage = () => {
  const [showEdit, setShowEdit] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const { data: categories } = useGetCategoriesQuery();
  const [deleteCategory] = useDeleteCategoryMutation();
  const [updateCategory] = useUpdateCategoryMutation();

  const handleEdit = (category) => {
    setSelectedCategory(category);
    setShowEdit(true);
  };

  const handleUpdate = async (updatedCategory) => {
    await updateCategory({ id: selectedCategory.id, body: updatedCategory });
    setShowEdit(false);
  };

  return (
    <div className="admin">
      <Sidebar />
      <div className="p-4 space-y-4">
        {categories?.map((category) => (
          <div
            key={category.id}
            className="bg-blue-300 p-[10px] gap-[20px] flex flex-col w-[150px] items-center justify-center rounded-[10px]"
          >
            <h2 className="text-2xl text-white">{category.name}</h2>
            <div className="buttons flex items-center gap-[10px]">
              <button
                className="bg-red-600 py-[5px] px-[10px] rounded-[5px] text-white"
                onClick={() => deleteCategory({ id: category.id })}
              >
                Delete
              </button>
              <button
                className="bg-green-600 py-[5px] px-[10px] rounded-[5px] text-white"
                onClick={() => handleEdit(category)}
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
      {showEdit && (
        <EditModule
          isProducts={false}
          data={selectedCategory}
          onUpdate={handleUpdate}
          setShowEditModule={setShowEdit}
        />
      )}
    </div>
  );
};

export default CategoryManage;
