import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

export const SubmitButton = ({ isLoading }: { isLoading: boolean}) => {

    return (
        <div>
            <button 
                type='submit'
                className='flex justify-center items-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white 
                            rounded-full outline-none transition-all hover:scale-110 focus:scale-105 dark:bg-gray-800'
                disabled={isLoading}   
            >
                {isLoading ? (
                    <div className='h-5 w-5 animate-spin rounded-full border-b-2 border-white'></div>
                ) : (
                    <>
                        Submit <FaPaperPlane className='text-xs opacity-90 transition-all'/> {' '}
                    </>
                )}
            </button>
        </div>
    );
};
