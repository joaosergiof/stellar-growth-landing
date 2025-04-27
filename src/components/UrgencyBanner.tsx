
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const UrgencyBanner = () => {
  return (
    <div className="bg-cta py-4 text-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <span className="mr-3 text-2xl">⏰</span>
            <p className="font-medium">Oferta por tempo limitado: Consultoria inicial gratuita + 20% de desconto em nossos programas.</p>
          </div>
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-cta">
            Aproveitar Agora <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UrgencyBanner;
