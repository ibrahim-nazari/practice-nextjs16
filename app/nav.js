import Link from "next/link";
import React from "react";

const nav = () => {
  return (
    <div className="container mx-auto flex items-center  gap-2 h-20">
      <div className="bg-gray-100 text-black rounded-2xl px-5 py-2  ">
        <Link href="/">Home</Link>
      </div>
      <div className="bg-gray-100 text-black rounded-2xl  px-5 py-2 ">
        <Link href="/">About</Link>
      </div>
      <div className="bg-gray-100 text-black rounded-2xl  px-5 py-2 ">
        <Link href="/">Contact</Link>
      </div>
    </div>
  );
};

export default nav;
