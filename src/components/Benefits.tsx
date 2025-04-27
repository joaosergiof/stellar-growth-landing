
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const benefitsData = [
  {
    title: "Liderança Transformadora",
    description: "Melhore as equipes de liderança para aumentar a produtividade, motivação e retenção de talentos.",
    icon: "👥"
  },
  {
    title: "Operação de Excelência",
    description: "Maximizar a eficiência operacional e reduzir desperdícios, melhorando os resultados financeiros.",
    icon: "⚙️"
  },
  {
    title: "Aumento de Resultados Comerciais",
    description: "Melhorar a taxa de conversão e retenção no setor comercial, gerando mais lucros.",
    icon: "📈"
  },
  {
    title: "Redução do Turnover",
    description: "Reduzir custos operacionais e melhorar o ambiente de trabalho com equipes mais engajadas.",
    icon: "🤝"
  },
  {
    title: "ROI Garantido",
    description: "Investir em pessoas gera um impacto financeiro positivo imediato em sua organização.",
    icon: "💰"
  }
];

const Benefits = () => {
  return (
    <section id="beneficios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue mb-4">Benefícios Comprovados</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nossas soluções são desenvolvidas para trazer resultados tangíveis e mensuráveis para sua empresa
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
          <a href="#contato" className="inline-flex items-center text-blue hover:text-blue-light font-medium gap-2 text-lg">
            Quero esses resultados 
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
