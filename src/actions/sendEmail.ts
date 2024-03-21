'use server';

import React from 'react';
import { Resend } from 'resend';
import { EmailContactForm } from '../../email/email-contact-form';

const resend = new Resend(process.env.RESEND_API_KEY);

const getErrorMessage = (error: unknown) => {
    let message: string;
    if(error instanceof Error) {
        message = error.message;
    }else if(error && typeof error === 'object' && 'message' in error) {
        message = String(error.message);
    }else if(typeof error === 'string') {
        message = error;
    }else {
        message = 'Something Went Wrong';
    }

    return message;
}

export const sendEmail = async (formData: FormData) => {

    const senderEmail = formData.get('email');
    const message = formData.get('message');

    if(!senderEmail || typeof senderEmail !== 'string') {
        return {
            error: 'Invalid Email'
        }
    }

    if(!message || typeof message !== 'string') {
        return {
            error: 'Invalid Message'
        }
    }

    let data;

    try{
        data = await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>',
            subject: 'Message from Contact form in portfolio',
            to: 'youssefsaki@protonmail.com',
            // text: message,
            reply_to: senderEmail,
            react: React.createElement(EmailContactForm, {
                message: message as string,
                senderEmail: senderEmail as string
            })
        })
    }catch(error) {
        return {
            error: getErrorMessage(error)
        }
    }

    return {
        data,
    }

}