
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from 'react-router-dom';

const benefitsData = [
  {
    title: "Liderança com Propósito",
    description: "Desenvolva líderes inspiradores que motivam equipes e alcançam resultados extraordinários.",
    icon: "👥"
  },
  {
    title: "Equipes de Alta Performance",
    description: "Transforme grupos de indivíduos em times coesos e altamente produtivos.",
    icon: "⚙️"
  },
  {
    title: "Inteligência Emocional",
    description: "Aprenda a reconhecer, entender e gerenciar emoções para otimizar relacionamentos e resultados.",
    icon: "🧠"
  },
  {
    title: "Gestão de Conflitos",
    description: "Técnicas comprovadas para transformar conflitos em oportunidades de crescimento.",
    icon: "🤝"
  },
  {
    title: "Cultura Organizacional",
    description: "Construa uma cultura corporativa forte que atrai e retém os melhores talentos.",
    icon: "🏆"
  }
];

const Benefits = () => {
  return (
    <section id="palestras" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue mb-4">Temas de Palestras</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Conheça as áreas de especialidade onde João Sergio transforma conhecimento acadêmico e experiência prática em resultados mensuráveis
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefitsData.map((benefit, index) => (
            <Card key={index} className="border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 benefit-card">
              <CardHeader className="pb-2">
                <div className="text-4xl mb-2">{benefit.icon}</div>
                <CardTitle className="text-xl text-blue">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-600">{benefit.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/temas" className="inline-flex items-center text-blue hover:text-blue-light font-medium gap-2 text-lg">
            Ver todos os temas 
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
