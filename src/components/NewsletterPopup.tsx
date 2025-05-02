
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, FileText } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const NewsletterPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    // Show popup after 5 seconds
    const timer = setTimeout(() => {
      // Check if user has already seen the popup
      const hasSeenPopup = localStorage.getItem('hasSeenPopup');
      if (!hasSeenPopup) {
        setIsVisible(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    // Set flag in localStorage to remember that user has seen the popup
    localStorage.setItem('hasSeenPopup', 'true');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Inscrição realizada com sucesso!",
        description: "Seu e-book será enviado para o email fornecido.",
        duration: 5000,
      });
      setIsVisible(false);
      localStorage.setItem('hasSeenPopup', 'true');
      setEmail('');
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 relative animate-scale-in">
        <button 
          onClick={handleClose} 
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Fechar"
        >
          <X className="h-5 w-5" />
        </button>
        
        <div className="text-center mb-6">
          <div className="mx-auto w-16 h-16 bg-blue/10 rounded-full flex items-center justify-center mb-4">
            <FileText className="h-8 w-8 text-blue" />
          </div>
          <h3 className="text-2xl font-bold text-blue mb-2">E-book Gratuito</h3>
          <p className="text-gray-600">
            Receba agora mesmo o e-book exclusivo "Os 7 Pilares da Liderança Emocional" escrito por João Sergio com base em seus estudos em Harvard.
          </p>
        </div>
        
        <form id="newsletter" onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Input 
              type="email" 
              placeholder="Seu melhor e-mail" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-cta hover:bg-cta-hover text-white"
          >
            Receber E-book Grátis
          </Button>
          
          <p className="text-xs text-gray-500 text-center">
            Nós respeitamos sua privacidade. Não enviaremos spam.
          </p>
        </form>
      </div>
    </div>
  );
};

export default NewsletterPopup;
