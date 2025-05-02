
import React from 'react';
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-6 md:px-12 lg:px-24 bg-white shadow-sm w-full fixed top-0 z-50">
      <div className="flex items-center">
        <Link to="/" className="text-blue text-2xl font-bold">João Sergio</Link>
      </div>
      <nav className="hidden md:flex items-center space-x-8">
        <Link to="/sobre" className="text-gray-700 hover:text-blue transition-colors">Sobre</Link>
        <Link to="/temas" className="text-gray-700 hover:text-blue transition-colors">Palestras</Link>
        <Link to="/blog" className="text-gray-700 hover:text-blue transition-colors">Blog</Link>
        <Link to="/#depoimentos" className="text-gray-700 hover:text-blue transition-colors">Depoimentos</Link>
        <Link to="/#contato" className="text-gray-700 hover:text-blue transition-colors">Contato</Link>
      </nav>
      <Button 
        className="bg-cta hover:bg-cta-hover text-white rounded-full px-6 py-2 flex items-center gap-2 transition-all"
        onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
      >
        Agendar Consultoria
        <Calendar className="w-4 h-4" />
      </Button>
    </header>
  );
};

export default Header;
