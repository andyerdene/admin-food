"use client";

import { CategoryType, FoodType } from "@/lib/types";
import { useEffect, useState } from "react";

//custom hook
export const useFood = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [foods, setFoods] = useState<FoodType[]>([]);

  const getCategories = async () => {
    setLoading(true);
    const result = await fetch("http://localhost:4000/api/categories");
    const responseData = await result.json();
    const { data } = responseData;
    setCategories(data);
    setLoading(false);
  };

  const getFoods = async () => {
    setLoading(true);
    const result = await fetch("http://localhost:4000/api/food");
    const responseData = await result.json();
    setFoods(responseData.data);
    setLoading(false);
  };

  useEffect(() => {
    getCategories();
    getFoods();
  }, []);

  return {
    loading,
    foods,
    categories,
    reFetchFoods: getFoods,
    reFetchCategories: getCategories,
  };
};
