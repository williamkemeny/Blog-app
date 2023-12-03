"use client";

import React, { useEffect, useState } from "react";
import { useUser } from "./context/AuthContext";
import Post from "./components/post/post";
import CreatePost from "./components/post/create-post";
import { listPosts } from "@/graphql/queries";
import { createPost } from "@/graphql/mutations";
import { generateClient } from "aws-amplify/api";

const client = generateClient();

export default function Home() {
  const [owner, setOwner] = useState("");
  const [posts, setPosts] = useState<any[]>([]);
  const { userName, email } = useUser();

  const handleLoadPost = async () => {
    try {
      const allPosts = await client.graphql({ query: listPosts });
      const sortedPosts = allPosts.data.listPosts.items.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      setPosts(sortedPosts || []);
    } catch (error) {
      console.error("Error creating post:", error);
      setPosts([]);
    }
  };

  const handleCreatePost = async (title: string, content: string) => {
    try {
      const newPost = await client.graphql({
        query: createPost,
        variables: {
          input: {
            title: title,
            content: content,
          },
        },
        authMode: "userPool",
      });
      console.log("New Post Result:", newPost);
    } catch (error) {
      console.error("Error creating post:", error);
      // Handle error as needed
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setOwner(process.env.NEXT_PUBLIC_OWNER || "Owner");
    }
    handleLoadPost();
  }, [handleCreatePost]);

  return (
    <section
      className="bg-white dark:bg-gray-900 min-h-screen"
      style={{ paddingTop: "50px" }}
    >
      <div className="container px-6 py-12 mx-auto">
        <div className="text-center">
          {email === owner ? (
            <CreatePost handleCreatePost={handleCreatePost} />
          ) : null}
          {posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              content={post.content}
              title={post.title}
              createdAt={post.updatedAt}
              owner={post.owner}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
