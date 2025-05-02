
import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonialsData = [
  {
    quote: "A palestra de João Sergio foi um divisor de águas para nossa equipe. A performance aumentou em 40% nos meses seguintes!",
    author: "Ana Silva",
    position: "Diretora de RH",
    company: "Empresa X",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    quote: "Investir na palestra sobre liderança foi a melhor decisão que tomamos. Nossa equipe está mais engajada e os resultados falam por si.",
    author: "Carlos Mendes",
    position: "CEO",
    company: "Empresa Y",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    quote: "Em apenas 3 meses após o workshop de inteligência emocional, vimos uma transformação completa na cultura da empresa.",
    author: "Patrícia Alves",
    position: "COO",
    company: "Empresa Z",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    quote: "João tem a capacidade única de conectar conceitos avançados de Harvard com a realidade prática das empresas brasileiras.",
    author: "Roberto Santos",
    position: "Diretor de Operações",
    company: "Empresa W",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-20 bg-blue text-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">O Impacto nas Organizações</h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Veja como as palestras e treinamentos de João Sergio têm transformado empresas e gerado resultados concretos
          </p>
        </div>
        
        <Carousel className="max-w-5xl mx-auto">
          <CarouselContent>
            {testimonialsData.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="bg-white/10 backdrop-blur-sm border-none shadow-lg h-full testimonial-card">
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
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="-left-12 bg-white/20 hover:bg-white/40 text-white" />
            <CarouselNext className="-right-12 bg-white/20 hover:bg-white/40 text-white" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
