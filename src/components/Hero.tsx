
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center bg-cover bg-center min-h-screen pt-16" 
      style={{ backgroundImage: `url(https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80)` }}>
      <div className="absolute inset-0 hero-gradient"></div>
      <div className="container mx-auto px-6 md:px-12 lg:px-24 z-10 text-center md:text-left">
        <div className="max-w-3xl mx-auto md:mx-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in text-shadow">
            Transforme Sua Empresa com Liderança e Processos de Alta Performance
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 animate-fade-in delay-200">
            Aprimore suas equipes, otimize operações e aumente os resultados comerciais com estratégias personalizadas de gestão e desenvolvimento
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in delay-300">
            <Button className="bg-cta hover:bg-cta-hover text-white rounded-full px-8 py-6 text-lg flex items-center gap-2 transition-all">
              Solicitar Consultoria
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg transition-all">
              Saiba Mais
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
