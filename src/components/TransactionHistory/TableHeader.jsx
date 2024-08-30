import React from 'react'
import { IoFilterOutline } from "react-icons/io5";
function TableHeader() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-2 gap-3">
    <div className='flex justify-between items-center w-full md:w-auto'>
    <div className='flex flex-col md:flex-row justify-start items-start md:items-center gap-3'>
    <div className="w-full">
    <form className="flex items-center">
        <label htmlFor="simple-search" className="sr-only">Search</label>
        <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <IoFilterOutline />
        </div>
        <input type="text" id="simple-search" className=" bg-[#F7F9FD] border border-[#D7E1F4] text-[#6882B6] text-sm rounded-lg  block w-full pl-10 p-2" placeholder="Filter" required />
        </div>
    </form>
    </div>
    </div>
    </div>
    </div>
  )
}

export default TableHeader
