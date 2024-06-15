import React from 'react'
import Image from 'next/image'
import LikedImages from './LikedImages'

function Cards({ filteredData, toggleLike, likedImages }) {
  return (
    <div className="flex flex-wrap items-center justify-between">
    {filteredData.length > 0 ? (
        filteredData.map((item, index) => (
            <div key={index} className='relative mt-8 group w-[400px]'>
                <div className='rounded-[14px] overflow-hidden relative'>
                    <Image src={item.image} alt={item.category} width={400} height={148}/>
                    <div className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 p-4 flex justify-between'>
                        <p>{item.description}</p>
                         <div className='bg-white rounded-full w-20 h-10 flex items-center justify-center'>
                            <LikedImages likedImages={likedImages} toggleLike={toggleLike} item={item} />
                        </div>
                    </div>
                </div>
                <div className='mt-2 flex justify-between items-center'>
                    {/* title */}
                    <div className='font-semibold'>
                        <p>{item.title}</p>
                    </div>

                    {/* like */}
                    <div>
                        <LikedImages likedImages={likedImages} toggleLike={toggleLike} item={item}/>
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
  )
}

export default Cards