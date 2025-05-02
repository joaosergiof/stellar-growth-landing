
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const topicsData = [
  {
    title: "Liderança com Propósito",
    description: "Desenvolva líderes que inspiram e transformam equipes através de uma liderança autêntica e baseada em valores. Esta palestra apresenta o framework exclusivo das 5 dimensões de liderança inspiradora desenvolvido por João Sergio.",
    benefits: [
      "Maior engajamento das equipes",
      "Retenção de talentos",
      "Clareza de propósito organizacional"
    ],
    duration: "60-90 minutos",
    ideal: "Líderes e gestores de todos os níveis",
    icon: "👥"
  },
  {
    title: "Equipes de Alta Performance",
    description: "Como construir e manter equipes que se autogerenciam, alcançam resultados extraordinários e mantêm alto nível de motivação. Baseado em estudos de Harvard sobre times de excelência.",
    benefits: [
      "Aumento da produtividade",
      "Melhoria da colaboração",
      "Desenvolvimento de autonomia"
    ],
    duration: "90-120 minutos",
    ideal: "Equipes completas e seus líderes",
    icon: "⚙️"
  },
  {
    title: "Inteligência Emocional no Trabalho",
    description: "Aprenda a reconhecer, entender e gerenciar emoções para otimizar relacionamentos profissionais e resultados. Um diferencial competitivo essencial no mundo corporativo atual.",
    benefits: [
      "Melhor gestão de conflitos",
      "Comunicação mais efetiva",
      "Redução do estresse organizacional"
    ],
    duration: "60-90 minutos",
    ideal: "Todos os níveis hierárquicos",
    icon: "🧠"
  },
  {
    title: "Gestão de Conflitos",
    description: "Transforme situações de conflito em oportunidades de crescimento e inovação. Metodologia prática para gerenciar desavenças e construir ambientes de trabalho mais harmoniosos.",
    benefits: [
      "Melhoria do clima organizacional",
      "Aumento da produtividade",
      "Redução de turnover"
    ],
    duration: "60-90 minutos",
    ideal: "Gestores e líderes de equipe",
    icon: "🤝"
  },
  {
    title: "Cultura Organizacional",
    description: "Como desenvolver e fortalecer uma cultura organizacional que atrai, retém talentos e impulsiona resultados de negócio. Ferramentas práticas para transformação cultural.",
    benefits: [
      "Alinhamento de valores",
      "Melhoria da marca empregadora",
      "Maior consistência nas operações"
    ],
    duration: "90-120 minutos",
    ideal: "Alta liderança e RH",
    icon: "🏆"
  },
  {
    title: "Transformação Pessoal",
    description: "Inspirada na história de vida de João Sergio, esta palestra motivacional mostra como superar obstáculos, desenvolver resiliência e alcançar objetivos aparentemente impossíveis.",
    benefits: [
      "Aumento da motivação",
      "Desenvolvimento da resiliência",
      "Clareza de propósito individual"
    ],
    duration: "60-90 minutos",
    ideal: "Todos os públicos",
    icon: "🚀"
  }
];

const TopicsGrid = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topicsData.map((topic, index) => (
            <Card key={index} className="border border-gray-200 shadow-lg hover:shadow-xl transition-all">
              <CardHeader className="pb-2">
                <div className="text-4xl mb-2">{topic.icon}</div>
                <CardTitle className="text-2xl text-blue">{topic.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-600 mb-4">{topic.description}</CardDescription>
                
                <h4 className="font-semibold text-blue mb-2">Benefícios:</h4>
                <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-1">
                  {topic.benefits.map((benefit, i) => (
                    <li key={i}>{benefit}</li>
                  ))}
                </ul>
                
                <div className="text-sm text-gray-600 space-y-1">
                  <p><span className="font-medium">Duração:</span> {topic.duration}</p>
                  <p><span className="font-medium">Ideal para:</span> {topic.ideal}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 bg-blue-light/10 p-6 rounded-lg border border-blue-light/30 max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-blue mb-4">Palestras e Treinamentos Personalizados</h3>
          <p className="text-gray-700 mb-4">
            Além dos temas principais, João Sergio desenvolve conteúdos exclusivos baseados nas necessidades específicas de sua organização. Após uma análise detalhada dos desafios da sua empresa, criamos uma abordagem sob medida para gerar o máximo impacto.
          </p>
          <p className="text-gray-700">
            Entre em contato para discutir como podemos desenvolver um programa personalizado para sua equipe.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TopicsGrid;
