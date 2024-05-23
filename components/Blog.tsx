import { BLOGS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Calendar } from 'react-feather'

const Blog = () => {
  return (
    <section className=''>
        <div className='max-container padding-container w-full'>
            <div>
                <h1 className='bold-32 md:bold-40 text-center flexCenter py-10'>Welcome To Home of Tranquility,<br /> Relaxation and Respite.</h1>
                <p className='text-center mb-10'>Stay updated with the latest trends and insights in spa and wellness through our News and Blog section. Discover informative articles on massage techniques, skincare tips, wellness practices, and the benefits of various treatments. Our expert team shares their knowledge to help you make informed decisions about your self-care routine.</p>
            </div>
            <div className='grid md:grid-cols-3 gap-4'>
                { BLOGS.map((blog) => (
                    <div className='' key={blog.name}>
                        <Image src={blog.image} alt={blog.name} width={400} height={500} className='w-full' />
                        <div className='p-4 bg-black/80 text-gray-10 regular-14'>
                            <h3 className='bold-20'>{blog.name}</h3>
                            <div className='flex justify-end gap-1'>
                                <Calendar width={17} height={17} />
                                <span className=''>{blog.date}</span>
                            </div>
                            <p className='mt-4 mb-4'>{blog.sample.slice(0, 225) + ""}</p>
                            <Link href={`/singleBlog/${blog.name}`} className='text-white underline'>{blog.button}</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Blog