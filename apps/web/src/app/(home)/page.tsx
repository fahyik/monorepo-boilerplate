"use client";

import { Spinner } from "@/components";

export default function Home() {
  return (
    <div className="flex flex-1 h-screen items-center justify-center bg-gray-100 dark:bg-gray-700">
      <div className="w-full max-w-screen-md p-8 bg-white dark:bg-gray-500 shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-center mb-8">HOME PAGE</h1>
        <Spinner></Spinner>
      </div>
    </div>
  );
}
