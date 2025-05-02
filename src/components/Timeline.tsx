
import React from 'react';

const timelineEvents = [
  {
    year: "2020",
    title: "Formação Executiva em Harvard Business School",
    description: "Conclusão do programa de formação executiva em Liderança e Gestão de Pessoas pela Harvard Business School."
  },
  {
    year: "2018",
    title: "Publicação do Livro 'Alicerce Seus Sonhos'",
    description: "Lançamento do livro sobre autodesenvolvimento, motivação e superação, que se tornou referência na área."
  },
  {
    year: "2016",
    title: "MBA em Gestão de Projetos pela USP",
    description: "Conclusão do MBA com foco em gerenciamento de projetos e iniciativas estratégicas."
  },
  {
    year: "2012",
    title: "Diretor de Desenvolvimento no Grupo Ita Aços",
    description: "Implementação de programas de capacitação alinhados às metas estratégicas da empresa."
  },
  {
    year: "2005",
    title: "Início da Carreira como Palestrante",
    description: "Primeiras palestras sobre liderança e desenvolvimento pessoal em empresas regionais."
  }
];

const Timeline = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue mb-4">Trajetória Profissional</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Conheça a jornada de João Sergio, marcada por superação, aprendizado contínuo e conquistas significativas
          </p>
        </div>
        
        <div className="relative max-w-3xl mx-auto">
          {/* Linha vertical do timeline */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue/20"></div>
          
          {timelineEvents.map((event, index) => (
            <div key={index} className={`mb-12 flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="md:w-1/2 p-4">
                <div className={`bg-white p-6 rounded-lg shadow-md relative ${index % 2 === 0 ? 'md:ml-6' : 'md:mr-6'}`}>
                  <div className="absolute top-6 hidden md:block h-4 w-4 rounded-full bg-blue z-10
                    ${index % 2 === 0 ? 'left-0 transform -translate-x-10' : 'right-0 transform translate-x-10'}"></div>
                  <span className="inline-block px-3 py-1 bg-blue text-white text-sm rounded-full mb-2">{event.year}</span>
                  <h3 className="text-xl font-bold text-blue mb-2">{event.title}</h3>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </div>
              <div className="md:w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
