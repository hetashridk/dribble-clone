import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import views from '../public/views.png'
import LikedImages from './LikedImages'
import { itemVariants } from '../lib/constants'

function Cards({ filteredData, toggleLike, likedImageList }) {
    return (
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredData.length > 0 ? (
                filteredData.map((item, index) => (
                    <motion.div 
                        key={index}    
                        className='relative group w-full'
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
                            <Image src={item.image} alt={item.category} width={400} height={148} className='w-full object-cover' />
                            <div className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 p-4 flex justify-between'>
                                <p className='text-sm sm:text-base'>{item.description}</p>
                                <div className='bg-white rounded-full w-10 h-10 flex items-center justify-center'>
                                    <LikedImages likedImageList={likedImageList} toggleLike={toggleLike} item={item} />
                                </div>
                            </div>
                        </div>
                        <div className='mt-2 flex flex-col md:flex-row justify-between items-center'>
                            <div className='text-[13px] font-semibold md:text-[16px] md:ml-2'>
                                <p>{item.title}</p>
                            </div>
                            <div className='flex space-x-4 mt-2 md:mt-0'>
                                <div className='flex items-center space-x-2'>
                                    <LikedImages likedImageList={likedImageList} toggleLike={toggleLike} item={item} />
                                    <p className='text-[#A2A2A2]'>{likedImageList[item.id] ? item.likes + 1 : item.likes}</p>
                                </div>
                                <div className='flex items-center space-x-1'>
                                    <Image src={views} alt='' className='w-4 h-4'/>
                                    <p className='text-[#A2A2A2]'>{item.views}</p>
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
