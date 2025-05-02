
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import UrgencyBanner from '@/components/UrgencyBanner';
import TopicsHero from '@/components/TopicsHero';
import TopicsGrid from '@/components/TopicsGrid';
import TopicsTestimonials from '@/components/TopicsTestimonials';
import ContactSection from '@/components/ContactSection';

const Topics = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <UrgencyBanner />
      <Header />
      <TopicsHero />
      <TopicsGrid />
      <TopicsTestimonials />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Topics;
