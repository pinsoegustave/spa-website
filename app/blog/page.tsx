'use client'
import { BLOGS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Calendar } from "react-feather";


const page = () => {
  return (
    <section className="static">
        <div className="bg-gradient-to-tr  opacity-90 top-0 -z-20 h-[100%]">
            <div className=" opacity-70 h-full w-full flex items-center justify-center -z-20 overflow-hidden mb-10">
            <Image 
                src={`/blog.png`}
                alt='background'
                fill
                className="object-cover"
                />
            </div>
            <div className=''>
                <h1 className='text-white text-center my-64 bold-40'>Our Blog Post</h1>
            </div>
            </div>
            <div className=" max-container padding-container">
            <div className='grid md:grid-cols-3 gap-4 mb-20'>
                { BLOGS.map((blog) => (
                    <div className='' key={blog.name}>
                        <Image src={blog.image} alt={blog.name} width={400} height={500} className="object-cover w-full"/>
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
  );
};

export default page;
