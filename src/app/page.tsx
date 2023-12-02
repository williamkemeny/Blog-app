"use client";

import React, { useEffect, useState } from "react";
import { useUser } from "./context/AuthContext";
import Post from "./components/post/post";
import CreatePost from "./components/post/create-post";

export default function Home() {
  const [owner, setOwner] = useState("");
  const { userName, email } = useUser();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setOwner(process.env.NEXT_PUBLIC_OWNER || "Owner");
    }
  }, []);

  return (
    <section
      className="bg-white dark:bg-gray-900 min-h-screen"
      style={{ paddingTop: "50px" }}
    >
      <div className="container px-6 py-12 mx-auto">
        <div className="text-center">
          {email === owner ? <CreatePost /> : <></>}
          <Post />
        </div>
      </div>
    </section>
  );
}
