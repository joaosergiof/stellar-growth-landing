
import React from 'react';

const certificates = [
  {
    title: "Formação Executiva em Liderança",
    institution: "Harvard Business School",
    year: "2020",
    image: "https://via.placeholder.com/400x300?text=Harvard+Business+School"
  },
  {
    title: "MBA em Gestão de Projetos",
    institution: "Universidade de São Paulo (USP)",
    year: "2016",
    image: "https://via.placeholder.com/400x300?text=USP"
  },
  {
    title: "Especialização em Desenvolvimento Organizacional",
    institution: "Fundação Dom Cabral",
    year: "2014",
    image: "https://via.placeholder.com/400x300?text=FDC"
  },
  {
    title: "Certificação Internacional em Coaching",
    institution: "International Coaching Federation",
    year: "2010",
    image: "https://via.placeholder.com/400x300?text=ICF"
  }
];

const Certificates = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue mb-4">Formação e Certificações</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Investimento contínuo em conhecimento para entregar o que há de melhor em desenvolvimento humano e organizacional
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
              <div className="h-48 overflow-hidden">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue mb-2">{cert.title}</h3>
                <p className="text-gray-600 mb-1">{cert.institution}</p>
                <p className="text-sm text-gray-500">{cert.year}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 max-w-3xl mx-auto bg-blue-light/10 rounded-lg p-6 border border-blue-light/30">
          <h3 className="text-xl font-bold text-blue mb-4">Desenvolvimento Contínuo</h3>
          <p className="text-gray-700 mb-4">
            João Sergio mantém-se constantemente atualizado com as mais recentes pesquisas e tendências em liderança, gestão de pessoas e desenvolvimento organizacional, participando regularmente de congressos internacionais e programas de atualização.
          </p>
          <p className="text-gray-700">
            Todo o conteúdo apresentado em suas palestras e treinamentos combina conhecimento acadêmico de ponta com aplicações práticas testadas em diversas organizações.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
