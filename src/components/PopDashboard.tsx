
import React, { useState } from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { 
  Search, 
  Filter, 
  FileText, 
  CheckCircle, 
  Clock, 
  AlertTriangle,
  ChevronDown
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

// Sample data structure
export interface POP {
  id: string;
  code: string;
  title: string;
  sector: string;
  department: string;
  creationDate: Date;
  revisionDate: Date;
  version: string;
  status: "active" | "under_review" | "expired";
}

interface POPDashboardProps {
  pops: POP[];
  onViewPOP: (id: string) => void;
  onEditPOP: (id: string) => void;
}

export function POPDashboard({ pops, onViewPOP, onEditPOP }: POPDashboardProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sectorFilter, setSectorFilter] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState<string>("");

  const filteredPOPs = pops.filter((pop) => {
    const matchesSearch =
      searchQuery === "" ||
      pop.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pop.code.toLowerCase().includes(searchQuery.toLowerCase());
      
    const matchesSector = sectorFilter === "" || pop.sector === sectorFilter;
    const matchesStatus = statusFilter === "" || pop.status === statusFilter;

    return matchesSearch && matchesSector && matchesStatus;
  });

  const activePOPs = pops.filter((pop) => pop.status === "active");
  const expiringPOPs = pops.filter(
    (pop) => pop.status === "active" && 
    pop.revisionDate.getTime() - new Date().getTime() < 30 * 24 * 60 * 60 * 1000 // 30 days
  );
  const expiredPOPs = pops.filter((pop) => pop.status === "expired");

  const sectors = [...new Set(pops.map((pop) => pop.sector))];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">POPs Ativos</CardTitle>
            <CardDescription>Total de POPs em uso</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
              <span className="text-2xl font-bold">{activePOPs.length}</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">POPs para Revisão</CardTitle>
            <CardDescription>Expirando em 30 dias</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <Clock className="h-5 w-5 text-yellow-500 mr-2" />
              <span className="text-2xl font-bold">{expiringPOPs.length}</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">POPs Expirados</CardTitle>
            <CardDescription>Precisam de atenção</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
              <span className="text-2xl font-bold">{expiredPOPs.length}</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative w-full md:w-auto md:flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar por título ou código..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Select value={sectorFilter} onValueChange={setSectorFilter}>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Filtrar por setor" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">Todos os setores</SelectItem>
            {sectors.map((sector) => (
              <SelectItem key={sector} value={sector}>
                {sector}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Filtrar por status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">Todos os status</SelectItem>
            <SelectItem value="active">Ativos</SelectItem>
            <SelectItem value="under_review">Em Revisão</SelectItem>
            <SelectItem value="expired">Expirados</SelectItem>
          </SelectContent>
        </Select>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-full md:w-auto">
              <Filter className="mr-2 h-4 w-4" />
              Mais filtros
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="grid gap-4">
              <div className="space-y-2">
                <h4 className="font-medium leading-none">Filtros avançados</h4>
                <p className="text-sm text-muted-foreground">
                  Refine sua busca com filtros adicionais
                </p>
              </div>
              <div className="grid gap-2">
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="departmentFilter">Departamento</Label>
                  <Input
                    id="departmentFilter"
                    placeholder="Qualquer"
                    className="col-span-2 h-8"
                  />
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="versionFilter">Versão</Label>
                  <Input
                    id="versionFilter"
                    placeholder="Qualquer"
                    className="col-span-2 h-8"
                  />
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Código</TableHead>
              <TableHead>Título</TableHead>
              <TableHead className="hidden md:table-cell">Setor</TableHead>
              <TableHead className="hidden md:table-cell">Departamento</TableHead>
              <TableHead className="hidden md:table-cell">Rev. Data</TableHead>
              <TableHead className="hidden md:table-cell">Versão</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredPOPs.length > 0 ? (
              filteredPOPs.map((pop) => (
                <TableRow key={pop.id}>
                  <TableCell className="font-medium">{pop.code}</TableCell>
                  <TableCell>{pop.title}</TableCell>
                  <TableCell className="hidden md:table-cell">
                    {pop.sector}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {pop.department}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {format(pop.revisionDate, "dd/MM/yyyy")}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {pop.version}
                  </TableCell>
                  <TableCell>
                    <StatusBadge status={pop.status} />
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-1">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => onViewPOP(pop.id)}
                      >
                        Ver
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => onEditPOP(pop.id)}
                      >
                        Editar
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={8} className="text-center py-6">
                  <div className="flex flex-col items-center justify-center text-muted-foreground">
                    <FileText className="h-10 w-10 mb-2" />
                    <p>Nenhum procedimento encontrado</p>
                  </div>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: "active" | "under_review" | "expired" }) {
  const statusConfig = {
    active: {
      label: "Ativo",
      className: "bg-green-100 text-green-800 border-green-200",
      icon: <CheckCircle className="h-4 w-4 text-green-600" />,
    },
    under_review: {
      label: "Em Revisão",
      className: "bg-yellow-100 text-yellow-800 border-yellow-200",
      icon: <Clock className="h-4 w-4 text-yellow-600" />,
    },
    expired: {
      label: "Expirado",
      className: "bg-red-100 text-red-800 border-red-200",
      icon: <AlertTriangle className="h-4 w-4 text-red-600" />,
    },
  };

  const { label, className, icon } = statusConfig[status];

  return (
    <span
      className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-semibold ${className}`}
    >
      <span className="mr-1">{icon}</span>
      {label}
    </span>
  );
}

// Helper component for the filter inputs
function Label({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
  return (
    <label
      htmlFor={htmlFor}
      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      {children}
    </label>
  );
}
