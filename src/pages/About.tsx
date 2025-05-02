
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import UrgencyBanner from '@/components/UrgencyBanner';
import NewsletterPopup from '@/components/NewsletterPopup';
import AboutHero from '@/components/AboutHero';
import Timeline from '@/components/Timeline';
import Certificates from '@/components/Certificates';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <UrgencyBanner />
      <Header />
      <AboutHero />
      <Timeline />
      <Certificates />
      <Footer />
      <NewsletterPopup />
    </div>
  );
};

export default About;
