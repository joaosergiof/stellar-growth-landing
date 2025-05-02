
import React from 'react';
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const AboutHero = () => {
  return (
    <section className="pt-24 pb-12 bg-blue text-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">João Sergio</h1>
            <p className="text-xl mb-6 text-white/80">
              Especialista em desenvolvimento humano e organizacional, palestrante internacional e formado em Harvard Business School.
            </p>
            <p className="mb-8 text-white/90">
              De jovem responsável por sustentar a casa aos 13 anos, a Harvard. Essa é a história de quem vive o que ensina. João Sergio dedicou sua vida a entender como as pessoas e organizações podem alcançar seu verdadeiro potencial.
            </p>
            <Button 
              onClick={() => document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-cta hover:bg-cta-hover text-white flex items-center gap-2"
            >
              <FileText className="h-5 w-5" />
              Baixar Currículo Completo
            </Button>
          </div>
          <div className="relative">
            <div className="absolute -left-4 -top-4 w-24 h-24 rounded-full bg-green/20 z-0"></div>
            <div className="absolute -right-4 -bottom-4 w-32 h-32 rounded-full bg-cta/20 z-0"></div>
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="João Sergio" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
