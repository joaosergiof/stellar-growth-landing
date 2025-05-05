
import React, { createContext, useContext, useState, useEffect } from "react";

// Define the roles with their permissions
export const ROLES = {
  ADMIN: "admin",
  MANAGER: "manager",
  EDITOR: "editor",
  VIEWER: "viewer",
};

export const PERMISSIONS = {
  CREATE_POP: "create_pop",
  EDIT_POP: "edit_pop",
  DELETE_POP: "delete_pop",
  APPROVE_POP: "approve_pop",
  VIEW_POP: "view_pop",
};

// Role-based permissions mapping
const rolePermissions = {
  [ROLES.ADMIN]: [
    PERMISSIONS.CREATE_POP,
    PERMISSIONS.EDIT_POP,
    PERMISSIONS.DELETE_POP,
    PERMISSIONS.APPROVE_POP,
    PERMISSIONS.VIEW_POP,
  ],
  [ROLES.MANAGER]: [
    PERMISSIONS.CREATE_POP,
    PERMISSIONS.EDIT_POP,
    PERMISSIONS.APPROVE_POP,
    PERMISSIONS.VIEW_POP,
  ],
  [ROLES.EDITOR]: [
    PERMISSIONS.CREATE_POP,
    PERMISSIONS.EDIT_POP,
    PERMISSIONS.VIEW_POP,
  ],
  [ROLES.VIEWER]: [
    PERMISSIONS.VIEW_POP,
  ],
};

type User = {
  id: string;
  name: string;
  email: string;
  role: keyof typeof ROLES;
  avatar?: string;
};

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  hasPermission: (permission: string) => boolean;
  isLoading: boolean;
  error: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

// Mock users for demonstration
const mockUsers = [
  {
    id: "1",
    name: "Administrador",
    email: "admin@pops.com",
    password: "admin123",
    role: ROLES.ADMIN,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: "2",
    name: "Gerente de Qualidade",
    email: "gerente@pops.com",
    password: "gerente123",
    role: ROLES.MANAGER,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: "3",
    name: "Editor de POPs",
    email: "editor@pops.com",
    password: "editor123",
    role: ROLES.EDITOR,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: "4",
    name: "Visualizador",
    email: "view@pops.com",
    password: "view123",
    role: ROLES.VIEWER,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Check for stored user on mount
    const storedUser = localStorage.getItem("gestor_pops_user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (err) {
        console.error("Error parsing stored user", err);
        localStorage.removeItem("gestor_pops_user");
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);

    try {
      // Simulate API delay
      await new Promise((r) => setTimeout(r, 1000));
      
      const foundUser = mockUsers.find(
        (u) => u.email === email && u.password === password
      );

      if (!foundUser) {
        throw new Error("Credenciais inválidas");
      }

      // Create a cleaned user object without the password
      const { password: _, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword);
      localStorage.setItem("gestor_pops_user", JSON.stringify(userWithoutPassword));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao fazer login");
      console.error("Login error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("gestor_pops_user");
  };

  const hasPermission = (permission: string) => {
    if (!user) return false;
    
    // Get permissions for the user's role
    const userPermissions = rolePermissions[user.role as keyof typeof rolePermissions];
    return userPermissions.includes(permission);
  };

  const value = {
    user,
    login,
    logout,
    isAuthenticated: !!user,
    hasPermission,
    isLoading,
    error,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
