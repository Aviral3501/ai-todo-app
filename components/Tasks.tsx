"use client";

import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";

export default function Tasks() {
  const tasks = useQuery(api.tasks.get);

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-8 bg-gray-50">
      <h1 className="text-3xl font-bold mb-8">Your Tasks</h1>
      <div className="w-full max-w-2xl space-y-4">
        {tasks?.map(({ _id, text }) => (
          <div
            key={_id}
            className="w-full p-4 bg-blue-400 rounded shadow-md hover:bg-gray-100 transition duration-300"
          >
            {text}
          </div>
        ))}
      </div>
    </main>
  );
}
