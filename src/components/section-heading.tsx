import React from 'react';

type SectionHeadingProps = {
    children: React.ReactNode
}

export const SectionHeading = ({ children }: SectionHeadingProps) => {
  return (
    <h2 className='text-3xl text-center font-medium max-sm:text-[1.8rem] capitalize text-gray-950 mb-8 dark:text-gray-200'>
        {children}
    </h2>
  )
}
