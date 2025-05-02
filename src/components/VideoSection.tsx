
import React from 'react';

const VideoSection = () => {
  return (
    <section className="py-20 bg-blue text-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Veja João Sergio em Ação</h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Descubra como as palestras de João Sergio transformam equipes e impactam organizações
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm p-2 rounded-lg">
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
            {/* Placeholder para o vídeo - Aqui você substituiria por um vídeo real */}
            <div className="w-full h-0 pb-[56.25%] relative">
              <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-cta flex items-center justify-center mx-auto cursor-pointer hover:bg-cta-hover transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </div>
                  <p className="mt-4 text-white text-lg">Clique para assistir ao vídeo institucional</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-10 text-center">
          <a 
            href="#contato" 
            className="inline-block bg-cta hover:bg-cta-hover text-white rounded-full px-8 py-3 font-medium transition-all"
          >
            Quero este resultado na minha empresa
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
