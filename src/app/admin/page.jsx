import AdminHeader from "@/components/adminHeader/AdminHeader";
import Sidebar from "@/components/sidebar/Sidebar";
import React from "react";
import "./admin.scss";

const Admin = () => {
  return (
    <div className="admin">
      <Sidebar />
      <div>
        <AdminHeader />
      </div>
    </div>
  );
};

export default Admin;
