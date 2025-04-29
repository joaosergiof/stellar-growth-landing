
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ValueProposition = () => {
  return (
    <section className="py-20 bg-green-light">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue mb-6">Nossa Proposta de Valor Única</h2>
          <p className="text-xl leading-relaxed mb-8">
            Nosso diferencial é oferecer soluções de gestão e treinamento completamente personalizadas, voltadas para resultados mensuráveis. Com nosso trabalho, sua empresa vai não apenas otimizar suas operações e melhorar sua liderança, mas também ver um aumento direto na performance e nos lucros.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center max-w-xs">
              <div className="text-3xl mr-4 text-green">✓</div>
              <p className="text-gray-800">Performance comprovada em mais de 200 empresas</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center max-w-xs">
              <div className="text-3xl mr-4 text-green">✓</div>
              <p className="text-gray-800">Metodologia exclusiva baseada em dados</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center max-w-xs">
              <div className="text-3xl mr-4 text-green">✓</div>
              <p className="text-gray-800">Acompanhamento contínuo dos resultados</p>
            </div>
          </div>
          <Button 
            className="bg-cta hover:bg-cta-hover text-white rounded-full px-8 py-6 text-lg flex items-center gap-2 mx-auto transform hover:scale-105 transition-all"
            onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Solicitar Proposta Personalizada
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
