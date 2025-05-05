
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Lock, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useAuth } from "@/components/AuthProvider";
import { useToast } from "@/hooks/use-toast";

const loginSchema = z.object({
  email: z.string().email({
    message: "Por favor, insira um e-mail válido.",
  }),
  password: z.string().min(6, {
    message: "A senha deve ter pelo menos 6 caracteres.",
  }),
});

export default function Login() {
  const { login, isLoading, error } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof loginSchema>) => {
    try {
      await login(values.email, values.password);
      toast({
        title: "Login realizado com sucesso",
        description: "Redirecionando para o dashboard...",
      });
      navigate("/dashboard");
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Falha no login",
        description: "Verifique suas credenciais e tente novamente.",
      });
    }
  };

  const loginDemo = async (userType: string) => {
    let email = "", password = "";
    
    switch (userType) {
      case "admin":
        email = "admin@pops.com";
        password = "admin123";
        break;
      case "manager":
        email = "gerente@pops.com";
        password = "gerente123";
        break;
      case "editor":
        email = "editor@pops.com";
        password = "editor123";
        break;
      case "viewer":
        email = "view@pops.com";
        password = "view123";
        break;
    }
    
    try {
      await login(email, password);
      toast({
        title: "Login demonstrativo",
        description: `Logado como ${userType}. Redirecionando...`,
      });
      navigate("/dashboard");
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Falha no login",
        description: "Erro ao fazer login demonstrativo.",
      });
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="flex justify-center">
            <div className="rounded-full bg-primary/10 p-2">
              <Lock className="h-8 w-8 text-primary" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-center">
            Gestor de POPs
          </CardTitle>
          <CardDescription className="text-center">
            Faça login para acessar o sistema de gestão de POPs
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>E-mail</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          placeholder="seu-email@exemplo.com"
                          className="pl-10"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Senha</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          type="password"
                          placeholder="********"
                          className="pl-10"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {error && (
                <div className="rounded-md bg-destructive/15 p-3">
                  <div className="text-sm text-destructive">{error}</div>
                </div>
              )}

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Entrando..." : "Entrar"}
              </Button>
            </form>
          </Form>
          
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">
                  Ou entre com um usuário demonstrativo
                </span>
              </div>
            </div>
            
            <div className="mt-4 grid grid-cols-2 gap-2">
              <Button
                variant="outline"
                className="w-full text-xs"
                onClick={() => loginDemo("admin")}
              >
                Admin
              </Button>
              <Button
                variant="outline"
                className="w-full text-xs"
                onClick={() => loginDemo("manager")}
              >
                Gerente
              </Button>
              <Button
                variant="outline"
                className="w-full text-xs"
                onClick={() => loginDemo("editor")}
              >
                Editor
              </Button>
              <Button
                variant="outline"
                className="w-full text-xs"
                onClick={() => loginDemo("viewer")}
              >
                Visualizador
              </Button>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col">
          <p className="px-8 text-center text-sm text-muted-foreground">
            Sistema para gerenciamento de Procedimentos Operacionais Padrão
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
