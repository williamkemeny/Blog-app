"use client";

import React from "react";

const Comment: React.FC = () => {
  return (
    <div className="border-t border-gray-300 pt-4">
      <article className="mt-4 ml-20 ">
        <p className="text-md text-gray-600 text-left">Cool!</p>
        <div className="flex justify-between items-center">
          <div className="text-sm font-semibold mt-4 flex items-center space-x-4 py-6">
            John Lucas • <span className="font-normal">5 minutes ago</span>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Comment;
