
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import UrgencyBanner from '@/components/UrgencyBanner';
import BlogHero from '@/components/BlogHero';
import BlogPosts from '@/components/BlogPosts';
import BlogSidebar from '@/components/BlogSidebar';

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <UrgencyBanner />
      <Header />
      <div className="container mx-auto px-6 py-12 md:py-20">
        <BlogHero />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          <div className="lg:col-span-2">
            <BlogPosts />
          </div>
          <div className="lg:col-span-1">
            <BlogSidebar />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
