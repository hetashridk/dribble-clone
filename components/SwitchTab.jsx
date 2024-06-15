'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { categories, info } from '../lib/constants';

function SwitchTab({
    sortedData,
    filteredData,
    toggleLike,
    sortType,
    setSortType,
    categoryFilter,
    setCategoryFilter,
    likedImages
}) {


    return (
        <div className="mx-8 my-4">
            <div className='flex flex-col md:flex-row justify-between'>
                {/* Sort Type */}
                <div className="mb-4 flex items-center justify-center">
                    <select className="p-2 border border-[#E4E4E4] rounded-md" value={sortType} onChange={(e) => setSortType(e.target.value)}>
                        <option value="all">All</option>
                        <option value="new">New</option>
                        <option value="popular">Popular</option>
                        <option value="worthy">Worthy</option>
                    </select>
                </div>

                {/* Category Filter */}
                <div className='flex gap-2 mb-4 overflow-x-auto whitespace-nowrap scrollbar-hide'>
                    {categories.map((item, index) => (
                        <button
                            key={index}
                            className={`p-2 font-semibold ${categoryFilter === item ? 'border rounded-full bg-gray-200 px-4' : ''}`}
                            onClick={() => setCategoryFilter(item)}
                        >
                            {item}
                        </button>
                    ))}
                </div>

                {/* right */}
                <div></div>
            </div>
            <div className="flex flex-wrap items-center justify-between">
                {filteredData.length > 0 ? (
                    filteredData.map((item, index) => (
                        <div key={index} className='relative mt-8 group w-[400px]'>
                            <div className='rounded-[14px] overflow-hidden relative'>
                                <Image src={item.image} alt={item.category} width={400} height={148}/>
                                <div className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 p-4 flex justify-between'>
                                    <p>{item.description}</p>
                                    <button onClick={() => toggleLike(item.id)} className='bg-white rounded-full w-20 h-10'>
                                        {likedImages[item.id] ? (
                                            <span style={{ fontSize: '30px', color: 'red' }}>&hearts;</span>
                                        ) : (
                                            <span style={{ fontSize: '30px', color: 'grey' }}>&hearts;</span>
                                        )}
                                    </button>
                                </div>
                            </div>
                            <div className='mt-2 flex justify-between items-center'>
                                {/* title */}
                                <div className='font-semibold'>
                                    <p>{item.title}</p>
                                </div>

                                {/* like */}
                                <div>
                                    <button onClick={() => toggleLike(item.id)}>
                                        {likedImages[item.id] ? (
                                            <span style={{ fontSize: '30px', color: 'red' }}>&hearts;</span>
                                        ) : (
                                            <span style={{ fontSize: '30px', color: 'grey' }}>&hearts;</span>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className='mt-8 w-full text-center text-gray-500'>
                        No results found according to filter
                    </div>
                )}
            </div>
        </div>
    )
}

export default SwitchTab;
