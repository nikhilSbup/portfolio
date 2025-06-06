import React from 'react'
import { FaFacebook, FaX, FaInstagram, FaLinkedinIn } from 'react-icons/fa6'

const Footer = () => {
  return (
   <>
    <hr />
    <footer className='py-12'>
        <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
            <div className='flex flex-col items-center justify-center'>
                <div className='flex space-x-4'>
                    <FaFacebook size={24} />
                    <FaX size={24} />
                    <FaInstagram size={24} />
                    <FaLinkedinIn size={24} />
                </div>
                <div className=' mt-8 border-t border-gray-700 pt-8 flex flex-col items-center'>
                    <p className='text-sm'>&copy; 2025 Nikhil Kumar Singh. All rights reserved.</p>
                    <p className='text-sm'>Creted with love.</p>
                </div>
            </div>
        </div>
    </footer>
   </>
  )
}

export default Footer