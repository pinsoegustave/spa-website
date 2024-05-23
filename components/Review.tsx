import Image from 'next/image'
import React from 'react'
import Button from './Button'

const Review = () => {
  return (
    <section className=' bg-blue-100 py-24 flexCenter flexBetween gap-10 max-container padding-container flex sm:flex-row flex-col'>
      <div className='mb-5'>
        <Image 
        src={'/expression.png'}
        alt='client'
        width={400}
        height={400}
        />
      </div>
      <div className=' w-full md:w-[50%] mx-auto'>
        <h1 className=' md:bold-32 mb-10 text-3xl font-bold text-black/90'>Client Expression</h1>
        <p className='mb-10 whitespace-wrap text-black/70'>"COSMAS MASSAGE HOUSE LTD is my go-to place for relaxation. The massages are heavenly, and the staff is incredibly friendly and professional."<span className='bold-16'>- Sarah L.</span> 
<br/>
"I had the most amazing facial at COSMAS MASSAGE HOUSE LTD. My skin has never felt so refreshed and rejuvenated. I can't wait to come back!" <span className='bold-16'> - Emily R.</span> 
<br/>
"The couple’s retreat package was the perfect way to celebrate our anniversary. We left feeling so connected and pampered! <span className='bold-16'>- David M</span></p>
        <Button 
        type='button'
        title='Check Reviews'
        variant='btn_dark_pink'
        />
      </div>
    </section>
  )
}

export default Review