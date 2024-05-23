import Image from 'next/image'
import React from 'react'

type ButtonProps = {
    type: 'button' | 'submit';
    title: string;
    icon?: string;
    variant: string;
    full?: boolean;
    disabled?: boolean;
}

const Button = ({ type, title, icon, variant, full, disabled } : ButtonProps) => {
  return (
    <button
    type={type}
    disabled = {disabled}
    className={`flexCenter gap-3 rounded-md ${variant} ${full && 'w-full'}`}
    >
        { icon && <Image src={icon} alt={title} width={24} height={24} />}
        <label className='bold-16 whitespace-nowrap cursor-pointer'>{title}</label>
    </button>
  )
}

export default Button