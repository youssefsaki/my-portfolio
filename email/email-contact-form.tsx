
import * as React from 'react';
import {
    Html,
    Head,
    Body,
    Preview,
    Container,
    Section,
    Heading,
    Text,
    Hr
} from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

type EmailContactFormProps = {
    message: string;
    senderEmail: string;
}

export const EmailContactForm = ({ 
    message,
    senderEmail
 }: EmailContactFormProps) => {
  return (
    <Html>
        <Head />
        <Preview>New Message From Your Portfolio Site</Preview>
        <Tailwind>
            <Body className='bg-gray-100 text-gray-950'>
                <Container>
                    <Section className='bg-white border border-black/10 my-10 px-10 py-8 rounded-md'>
                        <Heading className='leading-tight'>
                            You Received the following message from the contact form
                        </Heading>
                        <Text>{message}</Text>
                        <Hr />
                        <Text className='font-bold'>The Sender's Email is: <a className='font-normal text-blue-500 underline'>{senderEmail}</a></Text>
                    </Section>
                </Container>
            </Body>
        </Tailwind>
    </Html>
  )
}
