import React from 'react'
import { FaPaperPlane } from 'react-icons/fa';
import { experimental_useFormStatus as useFormStatus } from "react-dom";


export const SubmitButton = () => {
    const { pending } = useFormStatus();
  return (
    <div>
        <button 
                type='submit'
                className=' flex justify-center items-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white 
                            rounded-full outline-none transition-all hover:scale-110 focus:scale-105 dark:bg-gray-800'
                disabled={pending}   
            >
                { pending ? (
                    <div className='h-5 w-5 animate-spin rounded-full border-b-2 border-white'></div>
                ) : (
                    <>
                        Submit <FaPaperPlane className='text-xs opacity-90 transition-all'/> {' '}
                    </>
                )}
            </button>
    </div>
  )
}
