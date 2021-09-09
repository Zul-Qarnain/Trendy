import React from "react"
import { UitListUiAlt } from '@iconscout/react-unicons-thinline'
import { Avatar} from "react-lorem-ipsum"
import { Link } from "react-router-dom"
export const Navbar = () =>{
  return(
    <div className="flex  flex-row justify-between items-center px-8 py-1.5">
      <UitListUiAlt />
      <Link to="/"><p className="text-base font-bold italic">Trendy</p></Link>
      <Link to="dashboard"><Avatar gender="male" className="w-8 h-8 rounded-full bg-gray-600" /></Link>
    </div>
  )
}