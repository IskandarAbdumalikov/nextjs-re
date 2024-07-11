"use client";
import { defaultCartValues } from "@/lib/features/cart/cartSlice";
import { defaultCounter } from "@/lib/features/counter/counterSlice";
import { defaultWishlistValues } from "@/lib/features/wishlist/wishlistSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const DefaultValues = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(defaultCounter(+localStorage.getItem("counter")));
    dispatch(
      defaultWishlistValues(JSON.parse(localStorage.getItem("wishlist")) || [])
    );
    dispatch(defaultCartValues(JSON.parse(localStorage.getItem("cart")) || []));
  }, []);

  return null;
};

export default DefaultValues;
