'use client'
import React from 'react'
import SortTag from './SortTag';
import Category from './Category';
import Cards from './Cards';

function Content({
    filteredData,
    toggleLike,
    sortType,
    setSortType,
    categoryFilter,
    setCategoryFilter,
    likedImageList
}) {


    return (
        <div className="mx-8 my-4">
            <div className='flex flex-col md:flex-row justify-between'>
                {/* Sort Type */}
                <SortTag sortType={sortType} setSortType={setSortType}/>

                {/* Category Filter */}
                <Category categoryFilter={categoryFilter} setCategoryFilter={setCategoryFilter}/>

                {/* right */}
                <div></div>
            </div>
            <Cards filteredData={filteredData} toggleLike={toggleLike} likedImageList={likedImageList}/>
        </div>
    )
}

export default Content;
