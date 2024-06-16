import React from 'react'

function SortTag({ sortType, setSortType }) {
  return (
    <div className="mb-4 flex items-center justify-center bg-white rounded-md p-2">
        <select className="p-2 border border-[#E4E4E4] rounded-md" value={sortType} onChange={(e) => setSortType(e.target.value)}>
            <option value="all" className='border border-[#E4E4E4]'>All</option>
            <option value="new" className='border border-[#E4E4E4]'>New</option>
            <option value="popular" className='border border-[#E4E4E4]'>Popular</option>
            <option value="noteworthy" className='border border-[#E4E4E4]'>NoteWorthy</option>
        </select>
    </div>
  )
}

export default SortTag