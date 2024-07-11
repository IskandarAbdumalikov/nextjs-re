"use client";
import { defaultCounter } from "@/lib/features/counter/counterSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const DefaultValues = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(defaultCounter(+localStorage.getItem("counter")));
  }, []);
  return null;
};

export default DefaultValues;
