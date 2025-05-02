
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const blogsData = [
  {
    title: "Como líderes eficazes constroem equipes resilientes",
    excerpt: "Descubra as estratégias que os melhores líderes utilizam para desenvolver equipes que superam crises e se adaptam a mudanças com facilidade.",
    date: "10 de maio, 2025",
    category: "Liderança",
    image: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "O segredo das empresas que retêm talentos: gestão emocional",
    excerpt: "A inteligência emocional tem se tornado um diferencial competitivo para organizações que desejam manter seus melhores profissionais. Entenda como implementar essa abordagem.",
    date: "28 de abril, 2025",
    category: "Gestão de Pessoas",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "5 lições de Harvard que transformaram minha visão sobre liderança",
    excerpt: "Compartilho as principais aprendizagens da minha formação executiva em Harvard e como aplicá-las no contexto empresarial brasileiro.",
    date: "15 de abril, 2025",
    category: "Desenvolvimento",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Como implementar uma cultura de feedback construtivo",
    excerpt: "O feedback é uma ferramenta poderosa para o desenvolvimento organizacional, mas precisa ser implementado corretamente. Confira o passo a passo.",
    date: "3 de abril, 2025",
    category: "Cultura Organizacional",
    image: "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

const BlogPosts = () => {
  return (
    <div className="space-y-10">
      {blogsData.map((post, index) => (
        <Card key={index} className="overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3 h-60 md:h-auto">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-2/3">
              <CardHeader>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-green font-medium">{post.category}</span>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                <CardTitle className="text-xl md:text-2xl text-blue hover:text-blue-light transition-colors">
                  <a href="#">{post.title}</a>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 mb-4">
                  {post.excerpt}
                </CardDescription>
                <Button variant="outline" className="text-blue border-blue hover:bg-blue hover:text-white">
                  Ler Artigo Completo
                </Button>
              </CardContent>
            </div>
          </div>
        </Card>
      ))}
      
      <div className="flex justify-center pt-6">
        <Button className="bg-blue hover:bg-blue-light text-white">
          Ver Mais Artigos
        </Button>
      </div>
    </div>
  );
};

export default BlogPosts;
