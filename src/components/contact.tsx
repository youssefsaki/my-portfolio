'use client';

import React, { ChangeEvent, useState } from 'react';
import { SectionHeading } from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/hooks/hooks';
import { sendEmail } from '@/actions/sendEmail';
import { SubmitButton } from './submit-btn';
import toast from 'react-hot-toast';

type InputDataProps = {
    email: string;
    message: string;
};

export const Contact = () => {
    const { ref } = useSectionInView('Contact', 0.75);

    const [dataInput, setDataInput] = useState<InputDataProps>({
        email: '',
        message: ''
    });

    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setDataInput({
            ...dataInput,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        const { data, error } = await sendEmail(dataInput);

        if (error) {
            toast.error(error);
        } else {
            toast.success('Email Sent Successfully');
            setDataInput({ email: '', message: '' });
        }

        setIsLoading(false);
    };

    return (
        <motion.section
            ref={ref}
            id='contact'
            className='mb-14 sm:mb-28 w-[min(100%, 38rem)]'
            initial={{
                opacity: 0
            }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{
                once: true
            }}>
            <SectionHeading>Contact Me</SectionHeading>
            <p className='text-gray-700 -mt-6 dark:text-white/80 max-sm:text-center'>
                Please contact me at {' '}
                <a href='mailto:youssefsaki@protonmail.com' className='underline text-blue-500'>
                    <span>youssefsaki@protonmail.com</span>
                </a>
                {' '} or through this form.
            </p>

            <form className='mt-10 flex flex-col' onSubmit={handleSubmit}>
                <input
                    className='h-14 px-4 rounded-lg border border-black/10 dark:text-gray-50 dark:outline-none
                    dark:bg-gray-900 dark:border-white/20'
                    type='email'
                    placeholder='Enter Your Email'
                    required
                    name='email'
                    value={dataInput.email}
                    onChange={handleChange}
                />
                <textarea
                    placeholder='Your Message'
                    className='h-52 my-3 rounded-lg border border-black/10 p-4 dark:text-gray-50 dark:outline-none
                    dark:bg-gray-900 dark:border-white/20'
                    required
                    name='message'
                    value={dataInput.message}
                    onChange={handleChange}
                />
                <SubmitButton isLoading={isLoading} />
            </form>
        </motion.section>
    );
};
