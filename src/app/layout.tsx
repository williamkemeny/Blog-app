"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/navbar";
import { Amplify } from "aws-amplify";
import config from "../amplifyconfiguration.json";
import aws_exports from "../aws-exports";
Amplify.configure(aws_exports);
Amplify.configure(config);
import { AuthContext } from "./context/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning={true} lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        <AuthContext>
          <Navbar />
          {children}
        </AuthContext>
      </body>
    </html>
  );
}
