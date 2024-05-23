"use client"
import { FOOTERLINKS, SERVICE, SOCIALS, SUBSCRIBE } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from './Button'
import { toast } from 'sonner'

const Footer = () => {

  const handleSub = async (e: any) => {
    e.preventDefault();

    const email = String(e.target.email.value);

    const response = await fetch('/api/subscribe', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(email)
    });

    if (response.ok) {
      toast.success("Thank you for subscribing to our newsletters!");

      e.target.email.value = "";
    }
    else {
      toast.error("Not subscribed!");
      console.log("Error occured when subscribing."); 
    }
  }

  return (
    <footer className='bottom-0 text-white bg-green-90 py-12'>
      <div className='max-container padding-container flex w-full flex-col'>
        <div className='flex flex-col items-start justify-center gap-[5%] md:flex-row'>
          <div className='gap-2 mb-5'>
            <Link href={'/'} className='flex gap-4'>
              <Image 
              src={'/cosma.png'}
              alt='logo'
              width={50}
              height={50}
              />
            <h2 className='bold-20'>COSMAS' MASSAGE HOUSE LTD</h2>
            </Link>
            <div className='mt-8'>
              <Link href={'/'} className='text-gray-30 '>KG 30 Avenue N&deg;90, Gisozi</Link><br />
              <span className='text-gray-30'>Kigali - Rwanda</span><br/>
              <span className='text-gray-30'>Phone: +250 787 8787</span>
            </div>

            <div className='flex flex-row gap-5 mt-8'>
          { SERVICE.map((pics) => (
            <div className='' key={pics.label}>
              <Image src={pics.image} alt={pics.label} width={50} height={50} />
            </div>
          )) }
        </div>
          </div>
        
        <div className=''>
          { FOOTERLINKS.map((columns) => (
            <FooterColumn title={columns.title} key={columns.title}>
              <ul className='regular-14  grid grid-cols-2 gap-4 text-gray-30'>
                {columns.links.map((link) => (
                  <Link href='/' key={link}>
                    {link}
                  </Link>
                ))}
              </ul>
            </FooterColumn>
          ))}
        </div>
          
        <div className='flex flex-col gap-5 mt-6'>
            <FooterColumn title='Subscribe'>
              { SUBSCRIBE.map((sub) => (
                <p className='text-gray-30' key={sub.id}>{sub.text}</p>
              ))}
              <form onSubmit={handleSub} className='flex flex-col md:flex-row gap-4'>
                <input type="text" placeholder='Email Address' id='email' className='input rounded-lg' />
                <Button 
                type='submit'
                title='Sign Up'
                variant='btn_pink'
                />
              </form>
            </FooterColumn>
            <div className='flex flex-col gap-5'>
          <FooterColumn title={SOCIALS.title}>
            <ul className='regular-14 flex gap-4 text-gray-30'>
              { SOCIALS.links.map((link) => (
                <Link href={'/'} key={link} className='brightness-50 invert'>
                  <Image src={link} alt='logo' color='red' width={24} height={24} />
                </Link>
              ))}
            </ul>
          </FooterColumn>
        </div>
        </div>
        </div>
        <div className='mt-4 border bg-gray-20' />
        <p className='regular-14 w-full text-center text-gray-30 mt-4'> &copy;2024 Cosmas' Massage LTD | All rights reserved</p>
      </div>
    </footer>
  )
}

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
}

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className='flex flex-col gap-5'>
      <h4 className='bold-18 whitespace-nowrap'>{title}</h4>
      {children}
    </div>
  )
}

export default Footer