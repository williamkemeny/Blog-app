"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/navbar";
import { usePathname } from "next/navigation";
import { Amplify } from "aws-amplify";
import config from "../amplifyconfiguration.json";
import aws_exports from "../aws-exports";
Amplify.configure(aws_exports);
Amplify.configure(config);

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const registerPathname = usePathname();

  return (
    <html suppressHydrationWarning={true} lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
