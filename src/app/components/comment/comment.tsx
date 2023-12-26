"use client";

import React from "react";

interface MyComponentProps {
  createdAt: string;
  owner: string;
  content: string;
}

const Comment: React.FC<MyComponentProps> = ({ content, createdAt, owner }) => {
  const date = new Date(createdAt);
  const formattedDate = date.toLocaleString();
  return (
    <div
      style={{ marginTop: "18px" }}
      className="border-t border-gray-300 pt-4"
    >
      <article className="mt-4 ml-20 ">
        <p className="text-md text-gray-600 text-left">{content}</p>
        <div className="flex justify-between items-center">
          <div style={{ paddingRight: "11rem" }} className="flex flex-col ">
            <span
              className="text-sm font-semibold mt-4 flex dark:text-black"
              style={{ paddingRight: "25px" }}
            >
              {owner}
            </span>
            <span className="text-sm font-normal dark:text-black">
              {formattedDate}
            </span>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Comment;
