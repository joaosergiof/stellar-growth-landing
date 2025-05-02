
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import Testimonials from '@/components/Testimonials';
import ValueProposition from '@/components/ValueProposition';
import Guarantees from '@/components/Guarantees';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import UrgencyBanner from '@/components/UrgencyBanner';
import NewsletterPopup from '@/components/NewsletterPopup';
import ClientsSection from '@/components/ClientsSection';
import VideoSection from '@/components/VideoSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <UrgencyBanner />
      <Header />
      <Hero />
      <ClientsSection />
      <Benefits />
      <VideoSection />
      <ValueProposition />
      <Testimonials />
      <Guarantees />
      <ContactSection />
      <Footer />
      <NewsletterPopup />
    </div>
  );
};

export default Index;
