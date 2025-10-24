"use client";
import React from "react";
import { useData } from "../../_providers/FoodProvider";

const page = () => {
  const { foods, categories } = useData();

  return <div className="p-10">page</div>;
};

export default page;
