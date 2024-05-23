import { sendMail } from '@/constants/mail'
import React from 'react'

const page = () => {

    const send = async() => {
        "use server"
        await sendMail({ 
            to: "mzeegustmann12@gmail.com", 
            name: "Gustave", 
            subject: "Test Sending Email", 
            body: `<h1>Hello World of TypeScript Programmers.</h1>`
        })
    }
  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-24 gap-4'>
        <form>
            <button formAction={send} >Test</button>
        </form>
    </main>
  )
}

export default page