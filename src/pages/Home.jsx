import React from 'react';
import { StoryCard } from '@/components/storyCard';


export default function Home() {
  return (
    <>
      <main className="py-7 px-8 bg-gray-100 grid grid-cols-1 md:grid-cols-3 gap-7">
        {[,1,1,1,1,1,1,1,1,1,1,1].map((i,k)=>
          <StoryCard key={k} />  
        )}
             
      </main>
    </>
  );
}
