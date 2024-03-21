'use client';

import React from 'react'
import { SectionHeading } from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/hooks/hooks';

export const About = () => {

  const { ref } = useSectionInView('About' ,0.99)

  return (
    <motion.section 
        ref={ref}
        id='about' 
        className='max-w-[800px] sm:text-lg text-md scroll-mt-28 text-center text-gray-600 leading-8 mb-28 sm:mb-52 dark:text-gray-300'
        initial={{ y: 100, opacity: 0}}
        animate={{ y: 0, opacity: 1}}
        transition={{
            delay: 0.1
        }}
    >
        <SectionHeading>About Me</SectionHeading>
        <p className="mb-3">
        After completing my Bachelor's degree{" "} I pursued further education in 
        <span className="font-medium">programming</span>, delving into full-stack web development 
        through a coding bootcamp. {" "}
        Problem-solving is my passion within programming, and I thrive on the satisfaction of finding solutions. {" "}
        Proficient in a full stack with additional expertise in {' '}
        <span className="font-medium">security,</span>  I am actively seeking opportunities in software development. 
      </p>
      <p>
        <span className="italic">When I'm not coding</span>, I find joy in strumming my guitar{" "}
        <span className="font-medium">learning new things</span>. and embarking on bike rides to unwind.
        I'm keen to bring my expertise and enthusiasm to a dynamic team.
        Let's <span className='font-medium'>connect</span> and discuss how I can contribute to your projects.
      </p>
    </motion.section>
  )
}
