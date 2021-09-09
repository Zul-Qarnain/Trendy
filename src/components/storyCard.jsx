import React from "react"
import { post } from "../services/mocks"
import { Link } from "react-router-dom"

export const StoryCard = () => {
  return (
    <>
      <Link to="/story">
        <div className="flex flex-col justify-center shadow items-center rounded-2xl overflow-hidden bg-white">
          <post.img img keywords="car" className="shadow" style={{ width: "100%", height: 180, borderTopRadius: 10, zIndex: 3 }} />
          <div className="flex flex-col justify-center px-5 py-1 h-auto">
            <h1 className="text-lg">{post.heading[0]}</h1>
            <p className="text-sm text-gray-600">{post.summery[0]}</p>
          </div>
          <div className="flex flex-row w-full space-x-3 justify-between items-center px-5 py-3">
            <div className="flex space-x-2 items-center">
              <post.publishedby.img gender="male" className="w-5 h-5 rounded-full" />
              <p>{post.publishedby.name}</p>
            </div>
            <p>122 Views</p>
          </div>
        </div>
      </Link>
    </>)

}