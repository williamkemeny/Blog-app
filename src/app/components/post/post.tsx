"use client";

import React, { useState } from "react";

const Post: React.FC = () => {
  return (
    <div className="px-10 flex items-center justify-center">
      <div className="bg-white max-w-xl rounded-2xl px-10 py-8 shadow-lg hover:shadow-2xl transition duration-500">
        <div className="mt-4">
          <h1 className="text-lg text-gray-700 font-semibold hover:underline cursor-pointer">
            Product Review
          </h1>
          <p className="mt-4 text-md text-gray-600">
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happines.
          </p>
          <div className="flex justify-between items-center">
            <div className="text-sm font-semibold">
              John Lucas • <span className="font-normal"> 5 minutes ago</span>
            </div>
            <div className="p-6 bg-blue-400 rounded-full h-4 w-4 flex items-center justify-center text-2xl text-white mt-4 shadow-lg cursor-pointer">
              +
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
