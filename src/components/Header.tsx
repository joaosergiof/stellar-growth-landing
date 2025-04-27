
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-6 md:px-12 lg:px-24 bg-white shadow-sm w-full fixed top-0 z-50">
      <div className="flex items-center">
        <h1 className="text-blue text-2xl font-bold">ExpertConsult</h1>
      </div>
      <nav className="hidden md:flex items-center space-x-8">
        <a href="#beneficios" className="text-gray-700 hover:text-blue transition-colors">Benefícios</a>
        <a href="#depoimentos" className="text-gray-700 hover:text-blue transition-colors">Depoimentos</a>
        <a href="#contato" className="text-gray-700 hover:text-blue transition-colors">Contato</a>
      </nav>
      <Button className="bg-cta hover:bg-cta-hover text-white rounded-full px-6 py-2 flex items-center gap-2 transition-all">
        Consultoria Gratuita
        <ArrowRight className="w-4 h-4" />
      </Button>
    </header>
  );
};

export default Header;
