
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FileText } from "lucide-react";

const popularPosts = [
  "Como desenvolver a inteligência emocional na sua equipe",
  "3 técnicas para reuniões mais produtivas",
  "O papel do líder na transformação digital",
  "Feedback construtivo: guia completo"
];

const categories = [
  { name: "Liderança", count: 12 },
  { name: "Gestão de Pessoas", count: 8 },
  { name: "Cultura Organizacional", count: 6 },
  { name: "Inteligência Emocional", count: 9 },
  { name: "Desenvolvimento Pessoal", count: 7 }
];

const BlogSidebar = () => {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Buscar no Blog</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            <Input placeholder="Buscar artigos..." className="flex-1" />
            <Button className="bg-blue hover:bg-blue-light">Buscar</Button>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>E-book Gratuito</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
              <FileText className="h-8 w-8 text-blue" />
            </div>
            <div>
              <h3 className="font-bold text-blue">Os 7 Pilares da Liderança Emocional</h3>
              <p className="text-sm text-gray-600">Aprenda a liderar com inteligência emocional</p>
            </div>
          </div>
          <Input placeholder="Seu melhor e-mail" className="mb-2" />
          <Button className="w-full bg-cta hover:bg-cta-hover text-white">
            Baixar E-book Grátis
          </Button>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Artigos Populares</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {popularPosts.map((post, index) => (
              <li key={index}>
                <a href="#" className="text-blue hover:text-blue-light flex items-center">
                  <span className="text-xs bg-blue/10 text-blue rounded-full w-5 h-5 flex items-center justify-center mr-2">
                    {index + 1}
                  </span>
                  {post}
                </a>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Categorias</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {categories.map((category, index) => (
              <li key={index} className="flex justify-between items-center">
                <a href="#" className="text-blue hover:text-blue-light">
                  {category.name}
                </a>
                <span className="text-xs bg-gray-100 text-gray-600 rounded-full px-2 py-1">
                  {category.count}
                </span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogSidebar;
