"use client";
import { NAV_LINKS, SOCIALS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Button from './Button'
import { X } from 'react-feather';


const Navbar = () => {
    const [ isOpen, setIsOpen ] = useState(false);

    const handleMenu = () => {
        setIsOpen((prev) => !prev);
        console.log(isOpen);
    }

    return (
    <nav className='flexBetween max-container padding-container relative z-10 py-5'>
        <Link href="/" className=''>
            <Image src="/cosma.png" alt='logo' width={74} height={29} />
        </Link>
        <ul className='hidden h-full gap-12 lg:flex'>
            { NAV_LINKS.map((nav) => (
                <Link href={nav.href} key={nav.key} className='bold-16 text-black/80 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold'>
                    {nav.label}
                </Link>
            ))}
        </ul>
        <div className='hidden lg:flexCenter'>
            <ul className='regular-14 flex gap-4'>
            { SOCIALS.links.map((link) => (
                <Link href="/" key={link} className='border border-white  rounded-full p-2 hover:brightness hover:invert-0 hover:bg-[#FBA88F] hover:text-white'>
                    <Image src={link} alt='social' width={24} height={24} className='brightness-0 invert hover:invert-0' />
                </Link>
            ))}
            </ul>
        </div>
        <div className='lg:flexCenter hidden'>
            <Link href={'/contact'}>
                <Button
                type='button'
                title='Contact us'
                icon= ''
                variant='btn_pink'
                />
            </Link>
        </div>
        {/* Mobile Navbar */}
        <div className='' onClick={handleMenu}>
            { isOpen === false ? <Image 
            src="menu.svg"
            alt='menu'
            width={32}
            height={32}
            className='inline-block cursor-pointer lg:hidden'
            /> :
            <X /> }
        </div>
        { isOpen ? (<div className='absolute md:hidden block bg-slate-400 w-full px-10 py-60 left-0 top-24 rounded-lg flexCenter'>
            <div className='absolute top-12 regular-14 flex flex-col text-white/70 gap-4 text-[18px] hover:text-white hover:transition-200'>
            <div className='py-8'>
                <ul className='md:hidden h-full gap-12 lg:flex'>
                    { NAV_LINKS.map((nav) => (
                        <Link href={nav.href} key={nav.key} className='bold-20 text-black/80 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold'>
                            {nav.label}
                        </Link>
                    ))}
                </ul>
            </div>
            <div className='py-4'>
            <ul className='regular-14 flex gap-4'>
            { SOCIALS.links.map((link) => (
                <Link href="/" key={link} className='border border-white  rounded-full p-2 hover:brightness hover:invert-0 hover:bg-[#FBA88F] hover:text-white'>
                    <Image src={link} alt='social' width={24} height={24} className='brightness-0 invert hover:invert-0' />
                </Link>
            ))}
            </ul>
            </div>
            <Link href={'/contact'} className='mx-auto'>
                <Button
                type='button'
                title='Contact us'
                icon= ''
                variant='btn_pink'
                />
            </Link>
            </div>
        </div> ) : null }
    </nav>
  )
}

export default Navbar