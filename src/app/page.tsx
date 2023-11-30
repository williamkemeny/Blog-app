"use client";

import React, { useEffect, useState } from "react";

export default function Home() {
  const [owner, setOwner] = useState("");

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
          <h1>Home</h1>
          <h2>{owner}</h2>
        </div>
      </div>
    </section>
  );
}
