'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const Divider = () => {
  return (
    <motion.div 
        className='bg-gray-200 h-[5rem] my-24 w-1 hidden sm:block rounded-full dark:bg-opacity-20'
        initial={{ y: 100, opacity: 0}}
        animate={{ y: 0, opacity: 1}}
        transition={{
            delay: 0.2
        }}
        ></motion.div>
  )
}
