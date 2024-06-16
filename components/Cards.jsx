import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import views from '../public/views.png'
import LikedImages from './LikedImages'
import { itemVariants } from '../lib/constants'


function Cards({ filteredData, toggleLike, likedImageList }) {
    return (
        <div className="p-4 md:p-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
            {filteredData.length > 0 ? (
                filteredData.map((item, index) => (
                    <motion.div 
                        key={index}    
                        className='relative mt-8 group w-[400px]'
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.5,
                            delay: index * 0.1
                        }}
                        variants={itemVariants}
                    >
                        <div className='rounded-[14px] overflow-hidden relative'>
                            <Image src={item.image} alt={item.category} width={400} height={148} />
                            <div className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 p-4 flex justify-between'>
                                <p>{item.description}</p>
                                <div className='bg-white rounded-full w-20 h-10 flex items-center justify-center'>
                                    <LikedImages likedImageList={likedImageList} toggleLike={toggleLike} item={item} />
                                </div>
                            </div>
                        </div>
                        <div className='mt-2 flex justify-between items-center'>
                            {/* title */}
                            <div className='font-semibold'>
                                <p>{item.title}</p>
                            </div>

                            {/* like */}
                            <div className='flex space-x-4'>
                                <div className='flex space-x-2'>
                                    <LikedImages likedImageList={likedImageList} toggleLike={toggleLike} item={item} />
                                    <p className='mt-2 text-[#A2A2A2]'>{likedImageList[item.id] ? item.likes + 1 : item.likes}</p>
                                </div>
                                <div className='flex space-x-1'>
                                    <Image src={views} alt='' className='w-5 h-4 mt-3'/>
                                    <p className='mt-2 text-[#A2A2A2]'>{item.views}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
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