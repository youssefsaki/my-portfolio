import React from 'react'

export const Footer = () => {
  return (
    <footer className='mb-8 px-4 text-center text-gray-500'>
        <small className='block mb-2 text-xs'>
            &copy; 2030 Youssef. All Rights Reserved.
        </small>
        <p className='text-xs'>
            <span className='font-semibold'>About This Website:</span> Built with React & Next.js (App Router & Server Actions),
            Typescript, Tailwind CSS, Framer Motion, Resend & React Email.
        </p>
    </footer>
  )
}
