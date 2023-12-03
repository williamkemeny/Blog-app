"use client";

import React, { useState } from "react";
import Comment from "../comment/comment";
import CreateComment from "../comment/create-comment";
import { useUser } from "../../context/AuthContext";

interface MyComponentProps {
  title: string;
  createdAt: string;
  username: string;
  content: string;
}

const Post: React.FC<MyComponentProps> = ({
  title,
  content,
  createdAt,
  username,
}) => {
  const { userName } = useUser();
  const [viewReplies, setViewReplies] = useState(false);
  const [commentInput, setCommentInput] = useState(false);
  const date = new Date(createdAt);
  const formattedDate = date.toLocaleString();

  return (
    <div
      style={{ padding: "20px" }}
      className="px-10 flex items-center justify-center"
    >
      <div className="bg-white border-2 max-w-xl rounded-2xl px-10 py-8 shadow-lg hover:shadow-2xl transition duration-500">
        <article className="mt-4">
          <h1 className="text-lg text-gray-700 font-semibold hover:underline cursor-pointer">
            {title}
          </h1>
          <p className="mt-4 text-md text-gray-600">{content}</p>
          <div
            style={{ padding: "10px" }}
            className="flex justify-between items-center"
          >
            <div
              className="text-sm font-semibold mt-4 flex items-center space-x-4 py-6"
              style={{ paddingRight: "25px" }}
            >
              {username} •{" "}
              <span className="font-normal" style={{ paddingRight: "50px" }}>
                {formattedDate}
              </span>
            </div>
            {userName ? (
              <button
                className="p-6 bg-blue-400 rounded-full h-4 w-4 flex items-center justify-center text-2xl text-white mt-4 shadow-lg cursor-pointer"
                onClick={() => setCommentInput(!commentInput)}
              >
                +
              </button>
            ) : null}
          </div>
          {commentInput ? <CreateComment /> : null}
        </article>
        <button
          onClick={() => setViewReplies(!viewReplies)}
          className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
        >
          View Replies &#8627;
        </button>
        {viewReplies ? <Comment /> : null}
      </div>
    </div>
  );
};

export default Post;
