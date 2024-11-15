import React, { ReactNode } from "react";
import Link from "next/link";

interface BaseLayoutProps {
  children: ReactNode;
}

export default function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <div>
      <div className="bg-gray-800 p-4">
        <Link href="/" className="text-white mx-2">
          Home
        </Link>
        <Link href="/favs" className="text-white mx-2">
          favs
        </Link>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}