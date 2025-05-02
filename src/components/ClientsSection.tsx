
import React from 'react';

const ClientsSection = () => {
  // Logos de empresas fictícias (em prática, você usaria logos reais dos clientes)
  const clientLogos = [
    { name: "Empresa X", logo: "https://via.placeholder.com/150x80?text=EMPRESA+X" },
    { name: "Empresa Y", logo: "https://via.placeholder.com/150x80?text=EMPRESA+Y" },
    { name: "Empresa Z", logo: "https://via.placeholder.com/150x80?text=EMPRESA+Z" },
    { name: "Empresa W", logo: "https://via.placeholder.com/150x80?text=EMPRESA+W" },
    { name: "Empresa K", logo: "https://via.placeholder.com/150x80?text=EMPRESA+K" },
    { name: "Empresa J", logo: "https://via.placeholder.com/150x80?text=EMPRESA+J" },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-blue">Empresas Transformadas</h2>
          <p className="text-gray-600">Mais de 200 empresas já foram impactadas pelo trabalho de João Sergio</p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
          {clientLogos.map((client, index) => (
            <div key={index} className="w-32 md:w-48 grayscale hover:grayscale-0 transition-all">
              <img 
                src={client.logo} 
                alt={`Logo ${client.name}`} 
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>
        
        <div className="mt-12 flex justify-center gap-12 text-center">
          <div>
            <div className="text-3xl font-bold text-blue">200+</div>
            <p className="text-gray-600">Empresas</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue">50.000+</div>
            <p className="text-gray-600">Pessoas impactadas</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue">8.000+</div>
            <p className="text-gray-600">Horas de treinamentos</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
