"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MyComponentProps {
  itemName: string;
  itemLocation: string;
}

const NavbarItems: React.FC<MyComponentProps> = ({
  itemName,
  itemLocation,
}) => {
  const registerPathname = usePathname();
  return (
    <li>
      {registerPathname === itemLocation ? (
        <Link
          className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
          aria-current="page"
          href={itemLocation}
        >
          {itemName}
        </Link>
      ) : (
        <Link
          className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          href={itemLocation}
        >
          {itemName}
        </Link>
      )}
    </li>
  );
};

export default NavbarItems;
