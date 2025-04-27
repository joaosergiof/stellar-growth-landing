
import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const testimonialsData = [
  {
    quote: "Mudamos nossa operação completamente após o treinamento. A performance da equipe aumentou em 40%!",
    author: "João Silva",
    position: "Diretor de Operações",
    company: "Empresa X",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    quote: "Investir em nossa liderança foi a chave para a redução do turnover. Nosso time está mais engajado e a produtividade melhorou.",
    author: "Maria Souza",
    position: "CEO",
    company: "Empresa Y",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    quote: "Em apenas 3 meses, vimos uma transformação completa na cultura da empresa. Os resultados financeiros superaram nossas expectativas.",
    author: "Paulo Mendes",
    position: "CFO",
    company: "Empresa Z",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-20 bg-blue text-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">O Que Nossos Clientes Dizem</h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Veja como nossos serviços têm transformado empresas e gerado resultados concretos
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-none shadow-lg testimonial-card">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-300 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="italic text-white/90 mb-4">"{testimonial.quote}"</p>
              </CardContent>
              <CardFooter className="flex items-center space-x-4 border-t border-white/10 pt-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img src={testimonial.avatar} alt={testimonial.author} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-medium">{testimonial.author}</h4>
                  <p className="text-sm text-white/70">{testimonial.position}, {testimonial.company}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
