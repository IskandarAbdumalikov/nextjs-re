"use client";
import React, { useState, useEffect } from "react";
import "./editModule.scss";

const EditModule = ({ isProducts, data, onUpdate, setShowEditModule }) => {
  const [formData, setFormData] = useState(data);

  useEffect(() => {
    setFormData(data);
  }, [data]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData);
  };

  return (
    <div className="edit__module bg-white p-6 rounded-lg shadow-md">
      <form
        onSubmit={handleSubmit}
        className="space-y-4 flex flex-col justify-between"
      >
        {isProducts ? (
          <>
            <div>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Title"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <input
                type="text"
                name="thumbnail"
                value={formData.thumbnail}
                onChange={handleChange}
                placeholder="Thumbnail"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Description"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="Price"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                placeholder="Category"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <input
                type="text"
                name="brand"
                value={formData.brand}
                onChange={handleChange}
                placeholder="Brand"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <input
                type="text"
                name="images"
                value={formData.images}
                onChange={handleChange}
                placeholder="Images"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          </>
        ) : (
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Category Name"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        )}
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Update
        </button>
        <button
          type="button"
          onClick={() => setShowEditModule(false)}
          className="w-full py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditModule;
