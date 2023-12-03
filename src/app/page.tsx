"use client";

import React, { useEffect, useState } from "react";
import { useUser } from "./context/AuthContext";
import Post from "./components/post/post";
import CreatePost from "./components/post/create-post";
import { listPosts } from "@/graphql/queries";
import { generateClient } from "aws-amplify/api";
const client = generateClient();

export default function Home() {
  const [owner, setOwner] = useState("");
  const [posts, setPosts] = useState<any[]>([]);
  const { userName, email } = useUser();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setOwner(process.env.NEXT_PUBLIC_OWNER || "Owner");
    }
    handleCreatePost();
  }, []);

  const handleCreatePost = async () => {
    try {
      const allPosts = await client.graphql({ query: listPosts });
      const sortedPosts = allPosts.data.listPosts.items.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      console.log(sortedPosts);
      setPosts(sortedPosts || []);
    } catch (error) {
      console.error("Error creating post:", error);
      setPosts([]);
    }
  };

  console.log(posts);

  return (
    <section
      className="bg-white dark:bg-gray-900 min-h-screen"
      style={{ paddingTop: "50px" }}
    >
      <div className="container px-6 py-12 mx-auto">
        <div className="text-center">
          {email === owner ? <CreatePost /> : null}
          {posts.map((post) => (
            <Post
              key={post.id}
              content={post.content}
              title={post.title}
              createdAt={post.updatedAt}
              username={post.username}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
