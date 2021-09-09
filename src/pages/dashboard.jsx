import React from "react";
import { StoryCard } from "@/components/storyCard";

export const Dashboard = () => {
  return (
    <div className="flex flex-col  justify-center items-start px-4 py-4">
      
      <p className="text-xl font-bold">Your Posts</p>
      <div className="py-7   grid grid-cols-1 md:grid-cols-3 gap-7">
        {[1, 1, 1, 1, 1].map((i, k) =>
          <StoryCard key={k} />)}
      </div>
      
      <p className="text-xl font-bold">History</p>
      <div className="py-7 grid grid-cols-1 md:grid-cols-3 gap-7">
        {[1, 1, 1, 1, 1].map((i, k) =>
          <StoryCard key={k} />)}
      </div>
    </div>
  )
}