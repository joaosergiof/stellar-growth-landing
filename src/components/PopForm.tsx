
import React from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Plus, Minus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

const popSchema = z.object({
  code: z.string().min(1, { message: "O código é obrigatório" }),
  title: z.string().min(3, { message: "O título deve ter pelo menos 3 caracteres" }),
  sector: z.string().min(1, { message: "O setor é obrigatório" }),
  department: z.string().min(1, { message: "O departamento é obrigatório" }),
  objective: z.string().min(10, { message: "Objetivo deve ter pelo menos 10 caracteres" }),
  materials: z.string().optional(),
  creationDate: z.date(),
  revisionDate: z.date(),
  version: z.string().min(1, { message: "A versão é obrigatória" }),
  status: z.enum(["active", "under_review", "expired"]),
  steps: z.array(
    z.object({
      description: z.string().min(1, { message: "A descrição do passo é obrigatória" }),
    })
  ).min(1, { message: "Adicione pelo menos um passo" }),
});

type PopFormValues = z.infer<typeof popSchema>;

interface PopFormProps {
  onSubmit: (values: PopFormValues) => void;
  initialData?: Partial<PopFormValues>;
  isEditing?: boolean;
}

export function POPForm({ onSubmit, initialData, isEditing = false }: PopFormProps) {
  const defaultValues: Partial<PopFormValues> = {
    code: "",
    title: "",
    sector: "",
    department: "",
    objective: "",
    materials: "",
    creationDate: new Date(),
    revisionDate: new Date(),
    version: "1.0",
    status: "active",
    steps: [{ description: "" }],
    ...initialData,
  };

  const form = useForm<PopFormValues>({
    resolver: zodResolver(popSchema),
    defaultValues,
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "steps",
  });

  function handleFormSubmit(values: PopFormValues) {
    onSubmit(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left column */}
          <div className="space-y-6">
            <FormField
              control={form.control}
              name="code"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Código do POP</FormLabel>
                  <FormControl>
                    <Input placeholder="POP-001" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Título</FormLabel>
                  <FormControl>
                    <Input placeholder="Processo de Atendimento ao Cliente" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="sector"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Setor</FormLabel>
                    <FormControl>
                      <Input placeholder="Comercial" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="department"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Departamento</FormLabel>
                    <FormControl>
                      <Input placeholder="SAC" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="version"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Versão</FormLabel>
                    <FormControl>
                      <Input placeholder="1.0" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Status</FormLabel>
                    <Select 
                      onValueChange={field.onChange} 
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o status" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="active">Ativo</SelectItem>
                        <SelectItem value="under_review">Em Revisão</SelectItem>
                        <SelectItem value="expired">Expirado</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="creationDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Data de Criação</FormLabel>
                    <FormControl>
                      <Input 
                        type="date" 
                        value={field.value instanceof Date ? field.value.toISOString().split('T')[0] : ''} 
                        onChange={(e) => field.onChange(new Date(e.target.value))}
                        disabled={isEditing}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="revisionDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Data de Revisão</FormLabel>
                    <FormControl>
                      <Input 
                        type="date" 
                        value={field.value instanceof Date ? field.value.toISOString().split('T')[0] : ''} 
                        onChange={(e) => field.onChange(new Date(e.target.value))}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-6">
            <FormField
              control={form.control}
              name="objective"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Objetivo</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Descreva o objetivo deste procedimento..." 
                      className="h-24"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="materials"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Materiais Necessários</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Liste os materiais necessários (opcional)..." 
                      className="h-24"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <Card>
          <CardContent className="pt-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Passos do Procedimento</h3>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => append({ description: "" })}
              >
                <Plus className="h-4 w-4 mr-1" /> Adicionar Passo
              </Button>
            </div>

            {fields.map((field, index) => (
              <div key={field.id} className="flex items-start space-x-3 mb-4">
                <div className="mt-2 flex-none">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                    {index + 1}
                  </span>
                </div>
                <div className="flex-1">
                  <FormField
                    control={form.control}
                    name={`steps.${index}.description`}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea
                            placeholder="Descreva este passo do procedimento..."
                            className="min-h-20"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                {fields.length > 1 && (
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="mt-2"
                    onClick={() => remove(index)}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                )}
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="flex justify-end space-x-2">
          <Button type="submit">
            {isEditing ? "Salvar Alterações" : "Criar POP"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
