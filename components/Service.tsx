import { SERVICE } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Service = () => {
  return (
    <section className='' id='service'>
      <div className='flexBetween'>
        <div className='hidden md:flex w-full bg-black/90 opcaity-90 inset-0'>
          <Image 
          src={'/portrait-femme.png'}
          alt='service'
          width={400}
          height={400}
          className='inset-0'
          />
        </div>
        <div className='mt-10 padding-container mx-auto'>
          <h2 className='bold-32 lg:bold-40 flexCenter pb-8 '>Our Spa Hot Service</h2>
          <p className='text-gray-50 text-center'>We offer a luxurious and soothing experience that combines warm water therapy with therapeutic massage techniques to relieve tension, improve circulation, and promote deep relaxation.</p>  
          <ul className='block px-20 mx-auto lg:flex lg:flex-row gap-10 p-4'>
            { SERVICE.map((tip) => (
              <Link href={'/services'} key={tip.name}>
                <div className=' mx-auto mb-4 w-[300px] md:w-[150px]'>
                  <Image src={tip.image} alt={tip.label} width={150} height={150} />
                  <h4 className=' bold-20'>{tip.name}</h4>
                  <span className=' text-gray-50'>{tip.amount}</span>
                </div>
              </Link>
            ))}
          </ul>
      </div>
    </div>
    </section>
  )
}

export default Service