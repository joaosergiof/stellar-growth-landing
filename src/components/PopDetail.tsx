
import React from "react";
import { format } from "date-fns";
import { 
  Calendar, 
  Clock, 
  FileText, 
  CheckCircle, 
  AlertTriangle 
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { POP } from "./PopDashboard";

interface PopDetailProps {
  pop: POP;
  onClose: () => void;
  onEdit: () => void;
}

interface PopStep {
  description: string;
}

interface PopVersion {
  version: string;
  date: Date;
  author: string;
  changes: string;
}

// Extending the POP type for detail view
interface POPDetail extends POP {
  objective: string;
  materials?: string;
  steps: PopStep[];
  versions: PopVersion[];
}

export function POPDetail({ pop, onClose, onEdit }: PopDetailProps) {
  // Mock data for this example
  const popDetail: POPDetail = {
    ...pop,
    objective: "Este procedimento tem como objetivo padronizar o processo de atendimento ao cliente, garantindo qualidade e eficiência no serviço prestado.",
    materials: "Computador, sistema CRM, headset, formulário de atendimento.",
    steps: [
      { description: "Atender a chamada em até 3 toques, identificando-se com nome e setor." },
      { description: "Identificar o cliente no sistema utilizando CPF ou código de cliente." },
      { description: "Escutar atentamente a solicitação do cliente, sem interrupções." },
      { description: "Registrar a solicitação no sistema utilizando o formulário padrão." },
      { description: "Fornecer ao cliente um número de protocolo e prazo para resposta." },
    ],
    versions: [
      {
        version: "1.0",
        date: new Date(2023, 3, 15),
        author: "Maria Silva",
        changes: "Versão inicial do documento",
      },
      {
        version: "1.1",
        date: new Date(2023, 6, 20),
        author: "João Santos",
        changes: "Atualização do formulário de registro",
      },
      {
        version: "2.0",
        date: new Date(2024, 1, 10),
        author: "Ana Oliveira",
        changes: "Revisão completa do procedimento com adição de novos passos",
      },
    ],
  };

  const statusLabel = {
    active: { label: "Ativo", icon: <CheckCircle className="text-green-500" /> },
    under_review: { label: "Em Revisão", icon: <Clock className="text-yellow-500" /> },
    expired: { label: "Expirado", icon: <AlertTriangle className="text-red-500" /> },
  };

  const { icon, label } = statusLabel[popDetail.status];

  const today = new Date();
  const isExpiringSoon = 
    popDetail.status === "active" && 
    popDetail.revisionDate.getTime() - today.getTime() < 30 * 24 * 60 * 60 * 1000; // 30 days

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            {popDetail.code} - {popDetail.title}
          </h1>
          <p className="text-muted-foreground">
            {popDetail.sector} / {popDetail.department}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1 text-sm">
            {icon}
            <span>{label}</span>
          </span>
          <Button onClick={onEdit} variant="outline">
            Editar
          </Button>
          <Button onClick={onClose} variant="default">
            Voltar
          </Button>
        </div>
      </div>

      {isExpiringSoon && (
        <div className="rounded-md bg-yellow-50 p-4 border border-yellow-200">
          <div className="flex items-center">
            <Clock className="h-5 w-5 text-yellow-400 mr-2" />
            <h3 className="text-sm font-medium text-yellow-800">
              Este POP está próximo da data de revisão
            </h3>
          </div>
          <div className="mt-2 text-sm text-yellow-700">
            A revisão está programada para{" "}
            {format(popDetail.revisionDate, "dd/MM/yyyy")}. Por favor, planeje a
            atualização deste procedimento.
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Procedimento Operacional Padrão
            </CardTitle>
            <CardDescription>
              Versão {popDetail.version} · Criado em{" "}
              {format(popDetail.creationDate, "dd/MM/yyyy")} · Revisão em{" "}
              {format(popDetail.revisionDate, "dd/MM/yyyy")}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-medium">Objetivo</h3>
              <p className="mt-2 text-muted-foreground">
                {popDetail.objective}
              </p>
            </div>

            {popDetail.materials && (
              <div>
                <h3 className="text-lg font-medium">Materiais Necessários</h3>
                <p className="mt-2 text-muted-foreground">
                  {popDetail.materials}
                </p>
              </div>
            )}

            <div>
              <h3 className="text-lg font-medium">Passos</h3>
              <ol className="mt-4 space-y-4">
                {popDetail.steps.map((step, index) => (
                  <li key={index} className="flex gap-4">
                    <div className="flex-none">
                      <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                        {index + 1}
                      </span>
                    </div>
                    <div className="flex-1 pt-1">
                      <p>{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between border-t pt-6">
            <Button variant="outline" onClick={onEdit}>
              Editar POP
            </Button>
            <Button variant="ghost" onClick={() => window.print()}>
              Imprimir
            </Button>
          </CardFooter>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Histórico de Versões</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {popDetail.versions.map((version, index) => (
                  <div
                    key={index}
                    className="border-l-2 border-muted-foreground/20 pl-4 relative"
                  >
                    {index === 0 && (
                      <span className="absolute w-2 h-2 bg-primary rounded-full -left-[5px] top-1.5" />
                    )}
                    <h4 className="font-medium">Versão {version.version}</h4>
                    <div className="flex items-center text-xs text-muted-foreground mt-1">
                      <Calendar className="h-3 w-3 mr-1" />
                      {format(version.date, "dd/MM/yyyy")}
                    </div>
                    <p className="text-sm mt-1">{version.changes}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Por: {version.author}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Documentos Relacionados</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Nenhum documento anexado a este POP.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
