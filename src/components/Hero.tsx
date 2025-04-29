
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center bg-cover bg-center min-h-screen pt-16" 
      style={{ backgroundImage: `url(https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80)` }}>
      <div className="absolute inset-0 hero-gradient"></div>
      <div className="container mx-auto px-6 md:px-12 lg:px-24 z-10 text-center md:text-left">
        <div className="max-w-3xl mx-auto md:mx-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in text-shadow">
            Quando você evolui, sua empresa também cresce: lidere com propósito e processos de alta performance
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 animate-fade-in delay-200">
            Invista no desenvolvimento das pessoas, transforme suas equipes, aperfeiçoe a operação e eleve os resultados da sua empresa com estratégias de gestão sob medida
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in delay-300">
            <Button 
              className="bg-cta hover:bg-cta-hover text-white rounded-full px-8 py-6 text-lg flex items-center gap-2 transition-all transform hover:scale-105" 
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Solicite uma Consultoria Gratuita
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg transition-all flex items-center gap-2"
              onClick={() => window.open(`https://wa.me/5515997648931`, '_blank')}
            >
              Agende sua Consultoria
              <Calendar className="w-5 h-5" />
            </Button>
          </div>
          
          <div className="mt-8 bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 inline-block animate-fade-in delay-400">
            <p className="text-white/90 font-medium flex items-center">
              <span className="text-cta mr-2 text-2xl">⏰</span>
              Oferta por tempo limitado: Apenas 10 vagas disponíveis para consultoria gratuita
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
