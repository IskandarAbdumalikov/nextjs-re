import AdminHeader from "@/components/adminHeader/AdminHeader";
import Sidebar from "@/components/sidebar/Sidebar";
import React from "react";

const CategoryManage = () => {
  return (
    <div className="admin">
      <Sidebar />
      <div>
        <AdminHeader />
      </div>
    </div>
  );
};

export default CategoryManage;
