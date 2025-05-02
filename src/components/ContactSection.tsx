
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Calendar, Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Formulário enviado!",
      description: "Nossa equipe entrará em contato em breve.",
      duration: 5000,
    });
  };

  return (
    <section id="contato" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue mb-4">Pronto para Transformar sua Empresa?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Solicite uma proposta para palestras ou treinamentos customizados para sua organização.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Formulário de Contato */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">Solicite uma Proposta Personalizada</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nome Completo</Label>
                <Input id="name" placeholder="Seu nome" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input id="email" type="email" placeholder="seu.email@empresa.com" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="company">Empresa</Label>
                <Input id="company" placeholder="Nome da sua empresa" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="topic">Tema de Interesse</Label>
                <select 
                  id="topic" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-light"
                  required
                >
                  <option value="">Selecione um tema</option>
                  <option value="lideranca">Liderança com Propósito</option>
                  <option value="inteligencia-emocional">Inteligência Emocional</option>
                  <option value="alta-performance">Equipes de Alta Performance</option>
                  <option value="conflitos">Gestão de Conflitos</option>
                  <option value="cultura">Cultura Organizacional</option>
                  <option value="outro">Outro (especifique)</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Detalhes do Evento</Label>
                <Textarea id="message" placeholder="Conte-nos sobre o evento, número de participantes, data desejada, etc." className="min-h-[100px]" />
              </div>
              
              <div className="pt-2">
                <Button type="submit" className="w-full bg-cta hover:bg-cta-hover text-white">
                  Solicitar Proposta
                </Button>
              </div>
              
              <p className="text-xs text-gray-500 text-center pt-2">
                Ao enviar, você concorda com nossa Política de Privacidade e Termos de Uso.
              </p>
            </form>
          </div>
          
          {/* Informações de Contato Direto */}
          <div className="flex flex-col justify-center">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4">Contato Direto</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-light text-white p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-blue">Telefone</h4>
                    <p className="text-gray-600">(15) 99764-8931</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green text-white p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-blue">E-mail</h4>
                    <p className="text-gray-600">assessoria@joaosergio.com.br</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-cta text-white p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-blue">Endereço</h4>
                    <p className="text-gray-600">São Paulo - SP</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold mb-4">Agende uma Conversa</h3>
              <Button 
                className="bg-green hover:bg-green/90 text-white flex items-center gap-2 w-full"
                onClick={() => window.open(`https://wa.me/5515997648931`, '_blank')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="white" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Conversar no WhatsApp
              </Button>
              
              <Button 
                className="bg-blue text-white flex items-center gap-2 w-full"
                onClick={() => window.open('https://calendly.com', '_blank')}
              >
                <Calendar className="h-5 w-5" />
                Agendar Reunião Online
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
