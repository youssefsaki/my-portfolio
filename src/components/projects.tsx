'use client';

import React from 'react'
import { SectionHeading } from './section-heading';
import { projectsData } from '@/lib/data';
import { Project } from './project';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/hooks/hooks';


export const Projects = () => {
  
  const { ref } = useSectionInView('Projects', 0.5)

  return (
    <motion.section 
      ref={ref} 
      id='projects'
      className='scroll-mt-28 mb-28 sm:mb-20'
      initial={{y: 100, opacity: 0}}
      animate={{y: 0, opacity: 1}}
    >
        <SectionHeading>my projects</SectionHeading>
        <div>
            {projectsData.map(( project, index) => (
                <React.Fragment key={index}>
                    <Project {...project} />
                </React.Fragment>
            ))}
        </div>
    </motion.section>
  )
}

