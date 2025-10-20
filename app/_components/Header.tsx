"use client";
export const Header = () => {
  const userEmail = localStorage.getItem("userEmail");
  return <div className="bg-blue-500 w-full h-16">{userEmail}</div>;
};
