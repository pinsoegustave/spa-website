import { SPAPRICING, THERAPYPRICING } from '@/constants'
import Image from 'next/image'
import React from 'react'
import Button from './Button'

const Work = () => {
  return (
    <section className='py-12 text-black/80'>
      <div className='max-container padding-container relative w-full gap-4'>
        <h1 className='bold-32 lg:bold-40 mb-4 block gap-4 flexCenter'>Spa &amp; Therapy Pricing</h1>
        <p className='flexCenter md:w-[80%] mx-auto text-center'>Our pricing at COSMAS MASSAGE HOUSE LTD is designed to offer exceptional value and flexibility, ensuring you can find the perfect treatment to fit your needs and budget. We offer a variety of individual services as well as discounted packages for extended pampering sessions.</p>
      <div className='w-full py-10 block md:flex md:justify-between items-center justify-center'>

        <ul className='bold-16 w-full md:max-w-[40vw] bg-[#fff8f6] px-8 py-3 text-gray-90
  } gap-4 p-4 mb-5'>
          <h2 className='bold-20 md:bold-32 lg:bold-40 flexCenter mb-10'>Spa Pricing</h2>
          { SPAPRICING.map((service) => (
            <div className='p-2 flex gap-10 justify-between' key={service.id}>
                <p className=''>{service.title}  &nbsp;...........</p>
                <span>${service.price}</span>
            </div>
          )) }
          <div className='mx-auto flexCenter'>
            <Button 
            type='button'
            title='Book Now'
            variant='btn_dark_pink'
            />
          </div>
        </ul>
        <ul className='bold-16 w-full md:max-w-[40vw] bg-[#fff8f6] px-8 py-3 text-gray-90
  } gap-4 p-4'>
          <h2 className='bold-20 md:bold-32 lg:bold-40 flexCenter mb-10'>Therapy Pricing</h2>
          { THERAPYPRICING.map((service) => (
            <div className='p-2 flex gap-10 justify-between' key={service.id}>
                <p className=''>{service.title}  &nbsp;...........</p>
                <span>${service.price}</span>
            </div>
          )) }
          <div className='mx-auto flexCenter'>
            <Button 
            type='button'
            title='Book Now'
            variant='btn_dark_pink'
            />
          </div>
        </ul>
        </div>
      </div>
    </section>
  )
}

export default Work