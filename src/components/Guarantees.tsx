
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Guarantees = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue mb-4">Garantias para sua Tranquilidade</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Trabalhamos com total transparência e compromisso com seus resultados
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="border-green border-2">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl flex items-center">
                <span className="text-green text-3xl mr-3">✓</span>
                Garantia de Satisfação
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Se você não observar resultados tangíveis dentro de 30 dias, garantimos a devolução integral do seu investimento.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-green border-2">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl flex items-center">
                <span className="text-green text-3xl mr-3">🔒</span>
                Segurança de Dados
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Seus dados estão 100% seguros conosco. Trabalhamos com plataformas confiáveis e asseguramos total sigilo.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Guarantees;
