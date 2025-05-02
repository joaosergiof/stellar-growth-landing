
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const TopicsHero = () => {
  return (
    <section className="pt-24 pb-12 bg-blue text-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Temas de Palestras e Treinamentos</h1>
          <p className="text-xl mb-8 text-white/80">
            Conheça as especialidades de João Sergio e descubra como ele pode transformar sua equipe e organização com conteúdos baseados em Harvard e adaptados à realidade brasileira.
          </p>
          <Button 
            className="bg-cta hover:bg-cta-hover text-white rounded-full px-8 py-3 text-lg flex items-center gap-2 mx-auto"
            onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Solicitar uma palestra
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TopicsHero;
