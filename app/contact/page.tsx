import React from 'react'
import HeroSection from '../components/contact/hero';
import FormSection from '../components/contact/form';
import { Separator } from '@/components/ui/separator';

const ContactPage = () => {
    return (
      <>
        <HeroSection />
        <Separator className="my-20 container" />
        <FormSection />
      </>
    );
};

export default ContactPage;
