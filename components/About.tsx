import { ABOUTUS } from '@/constants'
import Image from 'next/image'
import React from 'react'
import Button from './Button'


export const About = () => {
  return (
    <main className='bg-gray-100'>
      <div className='padding-container max-container flex flex-col-reverse gap-20 py-10 pb-32 md:gap-28 lg:py-20 md:flex-row'>
      <div className='border border-green-800'>
        <Image 
        src={'/about.png'}
        alt='about'
        width={1440}
        height={580}
        />
      </div>  
      <div className='text-gray-50 leading-7'>
        <h2 className='text-black mb-5 bold-32 lg:bold-40 xl:max-w-[520px]'>Natural &amp; Relaxiable </h2>
        <p className=' mb-4'>We have more than 25 years of experience and provide the best Spa service with 100% clients satisfaction.</p>
        <ul className='block mt-6 mb-5 ml-6'>
          { ABOUTUS.map((text) => (
            <div className='flex gap-1' key={text.word}>
              <span>{text.number}.</span>
              <p className='' >{text.word}</p>
            </div>
          ))}
        </ul>
        <Button 
        type='button'
        title='About Us'
        variant='btn_dark_pink'
        
        />
          </div>
      </div>
    </main>
  )
}
