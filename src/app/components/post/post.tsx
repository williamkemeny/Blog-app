"use client";

import React, { useState } from "react";
import Comment from "../comment/comment";
import CreateComment from "../comment/create-comment";

const Post: React.FC = () => {
  const [viewReplies, setViewReplies] = useState(false);
  const [commentInput, setCommentInput] = useState(false);

  return (
    <div className="px-10 flex items-center justify-center">
      <div className="bg-white border-2 max-w-xl rounded-2xl px-10 py-8 shadow-lg hover:shadow-2xl transition duration-500">
        <article className="mt-4">
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
            <div className="text-sm font-semibold mt-4 flex items-center space-x-4 py-6">
              John Lucas • <span className="font-normal"> 5 minutes ago</span>
            </div>
            <button
              className="p-6 bg-blue-400 rounded-full h-4 w-4 flex items-center justify-center text-2xl text-white mt-4 shadow-lg cursor-pointer"
              onClick={() => setCommentInput(!commentInput)}
            >
              +
            </button>
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
