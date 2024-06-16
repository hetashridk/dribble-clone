'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import downArrow from '../public/arrow.png'
import Logo from '../public/logo.png'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className='hidden mx-8 my-4 lg:flex items-center justify-between'>
        {/* left */}
        <div className='flex space-x-7'>
          <div className='flex space-x-1'>
            <p className='font-semibold hover:text-[#A2A2A2] cursor-pointer'>Find Designers</p>
            <Image src={downArrow} alt='down arrow' width={20} />
          </div>
          <div>
            <p className='font-semibold hover:text-[#A2A2A2] cursor-pointer'>Inspiration</p>
          </div>
          <div className='flex space-x-1'>
            <p className='font-semibold hover:text-[#A2A2A2] cursor-pointer'>Courses</p>
            <Image src={downArrow} alt='down arrow' width={20} />
          </div>
          <div>
            <p className='font-semibold hover:text-[#A2A2A2] cursor-pointer'>Jobs</p>
          </div>
          <div>
            <p className='font-semibold hover:text-[#A2A2A2] cursor-pointer'>Go Pro</p>
          </div>
        </div>

        {/* center - logo */}
        <div className='w-44'>
          <Image src={Logo} alt='logo' />
        </div>

        {/* right - search, login/signup */}
        <div className='flex space-x-4'>
          <div className="relative flex items-center w-full max-w-md bg-white rounded-full overflow-hidden">
            <input
              type='text'
              className="w-[277px] h-[45px] bg-[#ebebf2] rounded-full border-[#FFECC6] pl-10 pr-4 py-2 placeholder:pl-2 font-Lato font-normal text-[14px] leading-[18px] text-[#868686] hover:bg-white hover:border-[6px] hover:border-[#e9e3ea]"
              placeholder='Search...'
            />
            <div className="absolute left-4">
              <svg
                width={16}
                height={16}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-[5px]"
              >
                <path
                  d="M17.1527 15.0943H16.0686L15.6844 14.7238C17.0292 13.1595 17.8388 11.1286 17.8388 8.91938C17.8388 3.99314 13.8456 0 8.91938 0C3.99314 0 0 3.99314 0 8.91938C0 13.8456 3.99314 17.8388 8.91938 17.8388C11.1286 17.8388 13.1595 17.0292 14.7238 15.6844L15.0943 16.0686V17.1527L21.9554 24L24 21.9554L17.1527 15.0943ZM8.91938 15.0943C5.50257 15.0943 2.74443 12.3362 2.74443 8.91938C2.74443 5.50257 5.50257 2.74443 8.91938 2.74443C12.3362 2.74443 15.0943 5.50257 15.0943 8.91938C15.0943 12.3362 12.3362 15.0943 8.91938 15.0943Z"
                  fill="#868686"
                />
              </svg>
            </div>
          </div>
          <div>
            <button className='w-32 py-2 bg-black text-white font-semibold rounded-full'>Sign up</button>
          </div>
        </div>
      </nav>
      <div className='flex lg:hidden items-center m-4'>
        <div className='flex space-x-4'>
          <button onClick={toggleMenu}>
            <svg className="w-6 h-6 text-gray-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>

          <div className='w-32'>
            <Image src={Logo} alt='logo' />
          </div>
        </div>
        <div className='ml-auto flex space-x-4'>
          <div className='mt-1'>
            <svg
              width={20}
              height={20}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-[5px]"
            >
              <path
                d="M17.1527 15.0943H16.0686L15.6844 14.7238C17.0292 13.1595 17.8388 11.1286 17.8388 8.91938C17.8388 3.99314 13.8456 0 8.91938 0C3.99314 0 0 3.99314 0 8.91938C0 13.8456 3.99314 17.8388 8.91938 17.8388C11.1286 17.8388 13.1595 17.0292 14.7238 15.6844L15.0943 16.0686V17.1527L21.9554 24L24 21.9554L17.1527 15.0943ZM8.91938 15.0943C5.50257 15.0943 2.74443 12.3362 2.74443 8.91938C2.74443 5.50257 5.50257 2.74443 8.91938 2.74443C12.3362 2.74443 15.0943 5.50257 15.0943 8.91938C15.0943 12.3362 12.3362 15.0943 8.91938 15.0943Z"
                fill="#868686"
              />
            </svg>
          </div>
          <div>
            <button className='w-12 py-2 bg-[#cc57d8] text-white font-semibold rounded-md text-[10px]'>Sign up</button>
          </div>
        </div>
      </div>
      <div className={`lg:hidden transition-all duration-1000 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
        <div className='bg-white'>
          <div className='w-full h-[0.5px] text-[#A2A2A2] bg-[#A2A2A2]'></div>
          <div className='ml-10 mt-8 space-y-5'>
            <div className='font-semibold text-[17px] transition-transform duration-300 ease-in-out'>
              <p>Find Designers</p>
            </div>
            <div className='flex space-x-7'>
              {/* vertical line */}
              <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'h-10' : 'h-0'}`}>
                <div className='w-[0.5px] h-40 text-[#e7e7e9] bg-[#e7e7e9]'></div>
              </div>

              {/* text */}
              <div className='space-y-5 mt-4 transition-transform duration-300 ease-in-out'>
                <div>
                  <p className='font-medium text-[15px]'>Designer search</p>
                  <p className='font-normal text-[12px] text-[#3d3d4e] leading-5'>Quickly find your next designer</p>
                </div>
                <div>
                  <p className='font-medium text-[15px]'>Post a job</p>
                  <p className='font-normal text-[12px] text-[#3d3d4e] leading-5'>The #1 job board for design talent</p>
                </div>
              </div>
            </div>
            <div className='font-semibold text-[17px] transition-transform duration-300 ease-in-out'>
              <p>Inspiration</p>
            </div>
            <div className='font-semibold text-[17px] transition-transform duration-300 ease-in-out'>
              <p>Courses</p>
            </div>
            <div className='flex space-x-7'>
              {/* vertical line */}
              <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'h-[210px]' : 'h-0'}`}>
                <div className='w-[0.5px] h-[210px] text-[#e7e7e9] bg-[#e7e7e9]'></div>
              </div>

              {/* text */}
              <div className='space-y-5 mt-4 transition-transform duration-300 ease-in-out'>
                <div>
                  <p className='font-medium text-[15px]'>UX Diploma</p>
                  <p className='font-normal text-[12px] text-[#3d3d4e] leading-5'>Learn UX from scratch in 6 months</p>
                </div>
                <div>
                  <p className='font-medium text-[15px]'>UI Certificate</p>
                  <p className='font-normal text-[12px] text-[#3d3d4e] leading-5'>12 week UI skill building for designers</p>
                </div>
                <div>
                  <p className='font-medium text-[15px]'>Live interactive workshops</p>
                  <p className='font-normal text-[12px] text-[#3d3d4e] leading-5'>with design professionals</p>
                </div>
              </div>
            </div>
            <div className='font-semibold text-[17px] transition-transform duration-300 ease-in-out'>
              <p>Jobs</p>
            </div>
            <div className='font-semibold text-[17px] transition-transform duration-300 ease-in-out'>
              <p>Go Pro</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
