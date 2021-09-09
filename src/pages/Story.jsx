import React from 'react';
import { StoryCard } from '@/components/storyCard';
import { post } from "../services/mocks"

export default function Story() {
  return (
    <>
      <div className="flex flex-col justify-center item-center py-4 px-4">
        <div className="px-3 py-1 flex justify-between items-center w-full">
          <div className="flex  justify-center space-x-3 items-center">
            <post.publishedby.img gender="male" className="w-9 h-9 rounded-full" />
            <div className="flex flex-col -space-y-1 justify-start items-start">
              <p className="text-base ">{post.publishedby.name}</p>
              <p className="text-xs text-gray-500">{post.reading} min</p>
            </div>

          </div>
          <p className="text-sm italic text-gray-600">{post.date}</p>
        </div>
        <div className="w-full flex flex-col justify-center items-center px-14 space-y-8  py-5">
          <h1 className="text-xl font-semibold italic">{post.heading}</h1>
          <post.img img width="400" keywords="classic" height="200" />
          <p className="text-base space-y-3">{post.content.map(pra => <p>{pra}</p>)}</p>
          <p className="text-sm italic font-semibold text-gray-500">Cradit goes to {post.publishedby.name}</p>
        </div>
        <div className="w-full flex flex-col justify-start items-center">
          <p className="text-xl  font-semibold text-left"> Most Popular </p>
          <div className="py-7 px-8  grid grid-cols-1 md:grid-cols-3 gap-7">
            {[1, 1, 1, 1, 1].map((i,k) =>
              <StoryCard key={k} /> )}
          </div>
        </div>
      </div>
    </>
  );
}
