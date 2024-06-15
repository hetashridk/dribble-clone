import React from 'react'

function SortTag({ sortType, setSortType }) {
  return (
    <div className="mb-4 flex items-center justify-center">
        <select className="p-2 border border-[#E4E4E4] rounded-md" value={sortType} onChange={(e) => setSortType(e.target.value)}>
            <option value="all">All</option>
            <option value="new">New</option>
            <option value="popular">Popular</option>
            <option value="worthy">Worthy</option>
        </select>
    </div>
  )
}

export default SortTag