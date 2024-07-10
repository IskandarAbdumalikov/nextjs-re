import React from "react";
import { USERS__DATA } from "../../static/index";
import Image from "next/image";
import star from "../../assets/star.svg";

const Users = () => {
  return (
    <div
      style={{ paddingTop: 80, paddingBottom: 80 }}
      className="users container bg-[#eef7f2] mx-auto max-w-[1440px] flex flex-col gap-8 py-10 text-center"
    >
      <h2 className="text-3xl font-semibold">Testimonials</h2>
      <h3 className="text-lg">Some quotes from our happy customers</h3>
      <div className="users__cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {USERS__DATA.map((user) => (
          <div
            key={user.id}
            className="user__card flex flex-col items-center justify-between gap-4 min-h-[350px] p-4 border rounded"
          >
            <Image
              width={150}
              height={150}
              src={user.img}
              alt={user.name}
              className="rounded-full h-1/2 object-contain"
            />
            <div className="stars flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Image key={i} width={20} src={star} alt="star" />
              ))}
            </div>
            <h3 className="text-md font-medium">{user.description}</h3>
            <p className="text-sm text-gray-600">{user.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
