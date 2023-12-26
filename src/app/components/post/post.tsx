"use client";

import React, { useState, useEffect } from "react";
import Comment from "../comment/comment";
import CreateComment from "../comment/create-comment";
import { useUser } from "../../context/AuthContext";
import { listComments } from "@/graphql/queries";
import { createComment } from "@/graphql/mutations";
import { generateClient } from "aws-amplify/api";

const client = generateClient();

interface MyComponentProps {
  title: string;
  createdAt: string;
  owner: string;
  content: string;
  id: string;
}

const Post: React.FC<MyComponentProps> = ({
  title,
  content,
  createdAt,
  owner,
  id,
}) => {
  const { userName } = useUser();
  const [viewReplies, setViewReplies] = useState(false);
  const [commentInput, setCommentInput] = useState(false);
  const [comments, setComments] = useState<any[]>([]);
  const date = new Date(createdAt);
  const formattedDate = date.toLocaleString();

  const handleLoadComments = async () => {
    try {
      const allComments = await client.graphql({
        query: listComments,
        variables: {
          filter: {
            postCommentsId: {
              eq: id,
            },
          },
        },
      });
      const sortedComments = allComments.data.listComments.items.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      setComments(sortedComments || []);
    } catch (error) {
      console.error("Error creating post:", error);
      setComments([]);
    }
  };

  const handleCreateComment = async (content: string) => {
    try {
      const newComment = await client.graphql({
        query: createComment,
        variables: {
          input: {
            content: content,
            postCommentsId: id,
          },
        },
        authMode: "userPool",
      });
      console.log("New Post Result:", newComment);
    } catch (error) {
      console.error("Error creating post:", error);
      // Handle error as needed
    }
  };

  useEffect(() => {
    handleLoadComments();
  }, [handleCreateComment]);

  return (
    <div
      style={{ paddingTop: "12px" }}
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
            <div style={{ paddingRight: "9rem" }} className="flex flex-col ">
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
            {userName ? (
              <button
                className="p-6 bg-blue-400 rounded-full h-4 w-4 flex items-center justify-center text-2xl text-white mt-4 shadow-lg cursor-pointer"
                onClick={() => setCommentInput(!commentInput)}
              >
                +
              </button>
            ) : null}
          </div>
          {commentInput ? (
            <CreateComment handleCreateComment={handleCreateComment} />
          ) : null}
        </article>
        <button
          onClick={() => setViewReplies(!viewReplies)}
          className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
        >
          View Replies &#8627;
        </button>
        {viewReplies
          ? comments.map((comment) => (
              <Comment
                key={comment.id}
                content={comment.content}
                createdAt={comment.updatedAt}
                owner={comment.owner}
              />
            ))
          : null}
      </div>
    </div>
  );
};

export default Post;
