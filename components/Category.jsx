import React from 'react'
import { categories } from '../lib/constants'

function Category({ categoryFilter, setCategoryFilter }) {
    return (
        <div className='flex gap-2 mb-4 overflow-x-auto whitespace-nowrap scrollbar-hide md:ml-6 lg:ml-0'>
            {categories.map((item, index) => (
                <button
                    key={index}
                    className={`p-2 font-semibold hover:bg-[#779ffc] hover:rounded-full ${categoryFilter === item ? 'border rounded-full bg-[#cfddff] px-4' : ''}`}
                    onClick={() => setCategoryFilter(item)}
                >
                    {item}
                </button>
            ))}
        </div>
    )
}

export default Category