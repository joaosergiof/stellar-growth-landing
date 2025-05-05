
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Plus, 
  FileText, 
  User, 
  Settings, 
  LogOut,
  Home
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { POPDashboard, POP } from "@/components/PopDashboard";
import { POPDetail } from "@/components/PopDetail";
import { POPForm } from "@/components/PopForm";
import { useAuth, PERMISSIONS } from "@/components/AuthProvider";
import { useToast } from "@/hooks/use-toast";

// Sample data for demonstration
const samplePOPs: POP[] = [
  {
    id: "1",
    code: "POP-001",
    title: "Atendimento ao Cliente",
    sector: "Comercial",
    department: "SAC",
    creationDate: new Date(2023, 3, 15),
    revisionDate: new Date(2025, 3, 15),
    version: "2.0",
    status: "active",
  },
  {
    id: "2",
    code: "POP-002",
    title: "Manutenção de Equipamentos",
    sector: "Produção",
    department: "Manutenção",
    creationDate: new Date(2023, 5, 10),
    revisionDate: new Date(new Date().getTime() + 15 * 24 * 60 * 60 * 1000), // 15 days from now
    version: "1.0",
    status: "active",
  },
  {
    id: "3",
    code: "POP-003",
    title: "Processo de Compras",
    sector: "Administrativo",
    department: "Compras",
    creationDate: new Date(2022, 10, 5),
    revisionDate: new Date(2023, 10, 5),
    version: "3.1",
    status: "expired",
  },
  {
    id: "4",
    code: "POP-004",
    title: "Controle de Qualidade",
    sector: "Qualidade",
    department: "Controle de Qualidade",
    creationDate: new Date(2023, 8, 20),
    revisionDate: new Date(new Date().getTime() - 5 * 24 * 60 * 60 * 1000), // 5 days ago
    version: "1.2",
    status: "under_review",
  },
];

enum ViewMode {
  LIST = "list",
  DETAIL = "detail",
  CREATE = "create",
  EDIT = "edit",
}

export default function Dashboard() {
  const [viewMode, setViewMode] = useState<ViewMode>(ViewMode.LIST);
  const [selectedPOPId, setSelectedPOPId] = useState<string | null>(null);
  const [pops, setPOPs] = useState<POP[]>(samplePOPs);
  const { user, logout, hasPermission } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const handleViewPOP = (id: string) => {
    setSelectedPOPId(id);
    setViewMode(ViewMode.DETAIL);
  };
  
  const handleEditPOP = (id: string) => {
    if (!hasPermission(PERMISSIONS.EDIT_POP)) {
      toast({
        variant: "destructive",
        title: "Permissão negada",
        description: "Você não tem permissão para editar POPs.",
      });
      return;
    }
    setSelectedPOPId(id);
    setViewMode(ViewMode.EDIT);
  };
  
  const handleCreatePOP = () => {
    if (!hasPermission(PERMISSIONS.CREATE_POP)) {
      toast({
        variant: "destructive",
        title: "Permissão negada",
        description: "Você não tem permissão para criar POPs.",
      });
      return;
    }
    setSelectedPOPId(null);
    setViewMode(ViewMode.CREATE);
  };
  
  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  
  const handleSubmitPOP = (values: any) => {
    if (viewMode === ViewMode.CREATE) {
      // Add new POP
      const newPOP: POP = {
        id: `${pops.length + 1}`,
        code: values.code,
        title: values.title,
        sector: values.sector,
        department: values.department,
        creationDate: values.creationDate,
        revisionDate: values.revisionDate,
        version: values.version,
        status: values.status,
      };
      
      setPOPs([...pops, newPOP]);
      toast({
        title: "POP criado com sucesso",
        description: `O POP "${values.title}" foi criado.`,
      });
    } else if (viewMode === ViewMode.EDIT && selectedPOPId) {
      // Update existing POP
      const updatedPOPs = pops.map((pop) => {
        if (pop.id === selectedPOPId) {
          return {
            ...pop,
            code: values.code,
            title: values.title,
            sector: values.sector,
            department: values.department,
            revisionDate: values.revisionDate,
            version: values.version,
            status: values.status,
          };
        }
        return pop;
      });
      
      setPOPs(updatedPOPs);
      toast({
        title: "POP atualizado com sucesso",
        description: `O POP "${values.title}" foi atualizado.`,
      });
    }
    
    setViewMode(ViewMode.LIST);
  };
  
  const selectedPOP = selectedPOPId ? pops.find((pop) => pop.id === selectedPOPId) : null;
  
  // Render appropriate view based on the current mode
  const renderContent = () => {
    switch (viewMode) {
      case ViewMode.DETAIL:
        return selectedPOP ? (
          <POPDetail
            pop={selectedPOP}
            onClose={() => setViewMode(ViewMode.LIST)}
            onEdit={() => handleEditPOP(selectedPOP.id)}
          />
        ) : (
          <div>POP não encontrado</div>
        );
      
      case ViewMode.CREATE:
        return (
          <>
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold">Criar Novo POP</h1>
              <Button onClick={() => setViewMode(ViewMode.LIST)} variant="outline">
                Cancelar
              </Button>
            </div>
            <POPForm onSubmit={handleSubmitPOP} />
          </>
        );
      
      case ViewMode.EDIT:
        return selectedPOP ? (
          <>
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold">Editar POP</h1>
              <Button onClick={() => setViewMode(ViewMode.LIST)} variant="outline">
                Cancelar
              </Button>
            </div>
            <POPForm
              onSubmit={handleSubmitPOP}
              initialData={{
                title: selectedPOP.title,
                code: selectedPOP.code,
                sector: selectedPOP.sector,
                department: selectedPOP.department,
                creationDate: selectedPOP.creationDate,
                revisionDate: selectedPOP.revisionDate,
                version: selectedPOP.version,
                status: selectedPOP.status,
                objective: "",
                materials: "",
                steps: [{ description: "" }],
              }}
              isEditing
            />
          </>
        ) : (
          <div>POP não encontrado</div>
        );
      
      case ViewMode.LIST:
      default:
        return (
          <>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
              <h1 className="text-2xl font-bold">Procedimentos Operacionais Padrão</h1>
              {hasPermission(PERMISSIONS.CREATE_POP) && (
                <Button onClick={handleCreatePOP} className="mt-4 md:mt-0">
                  <Plus className="mr-2 h-4 w-4" />
                  Novo POP
                </Button>
              )}
            </div>
            
            <Tabs defaultValue="all" className="mb-6">
              <TabsList>
                <TabsTrigger value="all">Todos</TabsTrigger>
                <TabsTrigger value="active">Ativos</TabsTrigger>
                <TabsTrigger value="review">Em Revisão</TabsTrigger>
                <TabsTrigger value="expired">Expirados</TabsTrigger>
              </TabsList>
              <TabsContent value="all">
                <POPDashboard 
                  pops={pops}
                  onViewPOP={handleViewPOP}
                  onEditPOP={handleEditPOP}
                />
              </TabsContent>
              <TabsContent value="active">
                <POPDashboard 
                  pops={pops.filter(pop => pop.status === "active")}
                  onViewPOP={handleViewPOP}
                  onEditPOP={handleEditPOP}
                />
              </TabsContent>
              <TabsContent value="review">
                <POPDashboard 
                  pops={pops.filter(pop => pop.status === "under_review")}
                  onViewPOP={handleViewPOP}
                  onEditPOP={handleEditPOP}
                />
              </TabsContent>
              <TabsContent value="expired">
                <POPDashboard 
                  pops={pops.filter(pop => pop.status === "expired")}
                  onViewPOP={handleViewPOP}
                  onEditPOP={handleEditPOP}
                />
              </TabsContent>
            </Tabs>
          </>
        );
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background">
        <div className="flex h-16 items-center justify-between px-4 sm:px-6">
          <div className="flex items-center">
            <FileText className="h-6 w-6 text-primary mr-2" />
            <h1 className="text-xl font-bold">Gestor de POPs</h1>
          </div>
          {user && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  className="h-9 w-9 rounded-full" 
                  aria-label="Perfil"
                >
                  {user.avatar ? (
                    <img 
                      src={user.avatar} 
                      alt={user.name} 
                      className="h-9 w-9 rounded-full"
                    />
                  ) : (
                    <User className="h-5 w-5" />
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
                <div className="px-2 py-1.5">
                  <p className="text-sm font-medium">{user.name}</p>
                  <p className="text-xs text-muted-foreground">{user.email}</p>
                  <div className="mt-1 flex items-center">
                    <span className="inline-block h-2 w-2 rounded-full bg-green-500 mr-2" />
                    <span className="text-xs capitalize">{user.role}</span>
                  </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => navigate("/dashboard")}>
                  <Home className="mr-2 h-4 w-4" />
                  Dashboard
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  Configurações
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Sair
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </header>
      <main className="flex-1 overflow-auto">
        <div className="container mx-auto p-4 sm:p-6">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}
