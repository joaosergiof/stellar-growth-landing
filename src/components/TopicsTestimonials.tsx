
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const testimonialsData = [
  {
    quote: "A palestra sobre Liderança com Propósito transformou a mentalidade dos nossos gestores. Vimos mudanças reais no engajamento das equipes já na primeira semana.",
    author: "Amanda Oliveira",
    position: "Diretora de RH",
    company: "Grupo ABC",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    quote: "O workshop de Equipes de Alta Performance foi um divisor de águas. Nossa produtividade aumentou 27% no trimestre seguinte.",
    author: "Ricardo Monteiro",
    position: "CEO",
    company: "TechSolutions",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    quote: "Grande tutor, coach, professor, conduziu com excelência a grande evolução em minha carreira, com um trabalho exclusivo visando pontos estratégicos a serem trabalhados e também melhorados. Com grande êxito estamos conseguimos atingir resultados expressivos não só em números comerciais mas também um grande desenvolvimento pessoal e profissional notável.",
    author: "Henrique Mattos",
    position: "Coordenador de Vendas",
    company: "Grupo Ita Aços",
    avatar: "/lovable-uploads/bbb729a7-4682-4707-a4ed-29dbbeab50d3.png"
  }
];

const TopicsTestimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue mb-4">Resultados Comprovados</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Veja o que nossos clientes dizem sobre os resultados obtidos após as palestras e treinamentos
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonialsData.map((testimonial, index) => (
            <Card key={index} className="bg-gray-50 border-none shadow-lg">
              <CardContent className="p-8">
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-lg italic text-gray-700 mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img src={testimonial.avatar} alt={testimonial.author} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue">{testimonial.author}</h4>
                    <p className="text-sm text-gray-600">{testimonial.position}, {testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#contato" 
            className="inline-block bg-cta hover:bg-cta-hover text-white rounded-full px-8 py-3 font-medium transition-all"
          >
            Quero esses resultados para minha empresa
          </a>
        </div>
      </div>
    </section>
  );
};

export default TopicsTestimonials;
