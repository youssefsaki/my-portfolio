'use client';

import Image from 'next/image'
import React, { useEffect } from 'react'
import myPic from '@/assets/ussef.png';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';
import { useSectionInView } from '@/hooks/hooks';

export const Intro = () => {

    const { ref } = useSectionInView('Home', 0.5);

  return (
    <section ref={ref} id='home' className='scroll-mt-[10rem] mb-28 max-w-[50rem] text-center sm:mb-0'>
        <div className='flex justify-center items-center flex-col'>
            <motion.div 
                initial={{ scale: 0, opacity: 0}}
                animate={{ scale: 1, opacity: 1}}
                transition={{
                    type: 'tween',
                    duration: 0.2
                }}
            >
                <Image 
                    src={myPic} 
                    alt='Youssef Portrait' 
                    className='h-28 w-28 rounded-full object-cover shadow-xl border-[0.35rem] dark:border-gray-900 border-white/55'
                />
            </motion.div>
        </div>

        <motion.h1 className='mb-10 mt-4 px-4 text-gray-950 text-2xl font-medium leading-[1.5] sm:leading-relaxed sm:text-4xl
                dark:text-gray-50'
            initial={{ y: 100, opacity: 0}}
            animate={{ y: 0, opacity: 1}}
        >
            <span className='font-medium'><span className="font-bold">Software Developer</span>{' '} && <span className="font-bold">Web Instructor.</span></span> 
            <br />
             with {''}
            <span className="font-bold">4+ years</span> of experience. Building Scalable Web Applications With {' '}
            <span className='italic underline'>React (Next.js)</span> & mentoring developers.{''}
        </motion.h1>

        {/* This is the Buttons for my social Accounts */}
        <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium' 
            initial={{ y: 100, opacity: 0}}
            animate={{ y: 0, opacity: 1}}
            transition={{
                delay: 0.1
            }}
        >
            {/* This is the contact me button */}
            <Link 
                href='#contact' 
                className='group flex items-center justify-center rounded-full bg-gray-900 text-white px-7 py-3
                outline-none hover:bg-gray-900 focus:scale-110 hover:scale-110 active:scale-105 transition
                border border-black/10 dark:max-sm:bg-black/20
            '>
                Contact Me Here
                <BsArrowRight className='group-hover:translate-x-1 transition ml-2 z-1001' />
            </Link>

            {/* This is the Download Cv and i'm using anchor Tag */}
            <a className='group flex items-center justify-center gap-2 rounded-full bg-white cursor-pointer px-7 py-3
                outline-none focus:scale-110 hover:scale-110 active:scale-105 transition border border-black/10
                dark:bg-white/10 dark:text-gray-200
            '
                href='/youssefCv.pdf' download
            >
                Download Cv <HiDownload className='group-hover:translate-y-1 transition'/>
            </a>

            {/* These are the social accounts Linkedin and Github */}
            <a 
                href='https://linkedin.com/in/youssefsaki' target='_blank'
                className='
                    bg-white p-4 text-gray-700 flex-items-center gap-2 rounded-full cursor-pointer 
                    hover:scale-[1.15] transition border border-black/10  focus:scale-110 dark:bg-white/10
                    dark:text-white/60'>
                <BsLinkedin />
            </a>
            <a 
                href='https://github.com/youssefsaki' target='_blank'
                className='
                    bg-white p-4 text-gray-700 text-[1.25rem] flex-items-center gap-2 rounded-full 
                    cursor-pointer hover:scale-[1.15] transition border border-black/10 focus:scale-110 dark:bg-white/10
                    dark:text-white/60'>
                <FaGithubSquare />
            </a>
        </motion.div>
    </section>
  )
}
