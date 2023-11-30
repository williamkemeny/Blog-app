"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/navbar";
import { usePathname } from "next/navigation";

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
        {registerPathname !== "/login" && registerPathname !== "/register" && (
          <Navbar />
        )}
        {children}
      </body>
    </html>
  );
}
