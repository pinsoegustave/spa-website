import { BLOGS } from '@/constants'
import Image from 'next/image'
import React from 'react'
import { Calendar } from 'react-feather'

const index = () => {
  return (
    <section className='w-full flex flex-col items-center h-[100vh] justify-center'>
        <div className='bg-gradient-to-tr to-[#000000] from-[#282525] absolute opacity-90 top-0 -z-10 w-full h-[80%]'>
            <div className='absolute opacity-70 h-full w-full flex items-center justify-center -z-20 overflow-hidden'>
                <Image 
                src={`/blog.png`}
                alt='background'
                layout='fill'
                objectFit='cover'
                />
            </div>
            <div className=''>
                <h1 className='text-white text-center my-64 bold-40'>Our Blog Post</h1>
            </div>
            <div className='relative max-container padding-container grid md:grid-cols-3 gap-4'>
                    { BLOGS.map((blog) => (
                        <div className='' key={blog.name}>
                            <Image src={blog.image} alt={blog.name} width={400} height={500}/>
                            <div className='p-4 bg-black/80 text-gray-10 regular-14'>
                                <h3 className='bold-20'>{blog.name}</h3>
                                <div className='flex justify-end gap-1'>
                                    <Calendar className='w-4 h-4' />
                                    <span className='flex justify-end'>{blog.date}</span>
                                </div>
                                <p className='mt-4 mb-4'>{blog.sample.slice(0, 225) + ""}</p>
                                <u className='text-white'>{blog.button}</u>
                            </div>
                        </div>
                    ))}
                </div>
        </div>
    </section>
  )
}

export default index