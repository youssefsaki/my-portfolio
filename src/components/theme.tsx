'use client';

import React from 'react'
import { BsMoon, BsSun } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { useTheme } from '@/context/theme-context';

export const Theme = () => {

    const {theme, toggleClick} = useTheme();

  return (
    <motion.button 
        className='fixed bottom-5 border border-white right-5 h-[48px] w-[48px] bg-white bg-opacity-80 flex justify-center *:
        items-center rounded-full shadow-2xl hover:scale-110 transition-all active:scale-105 dark:bg-gray-950 dark:text-gray-300
        outline-none
    '
        initial={{x: 40, opacity: 0}}
        animate={{x: 0, opacity: 1}}
        onClick={toggleClick}
    >
        { theme === 'light' ? (
            <BsSun />
        ): (
            <BsMoon />
        )}
    </motion.button>
  )
}
