
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format } from "date-fns";
import { CalendarIcon, FileText, PlusCircle, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Label } from "@/components/ui/label";

const formSchema = z.object({
  title: z.string().min(5, {
    message: "O título deve ter pelo menos 5 caracteres.",
  }),
  code: z.string().min(3, {
    message: "O código deve ter pelo menos 3 caracteres.",
  }),
  sector: z.string({
    required_error: "Por favor, selecione um setor.",
  }),
  department: z.string().min(1, {
    message: "Por favor, informe o departamento responsável.",
  }),
  objective: z.string().min(10, {
    message: "O objetivo deve ter pelo menos 10 caracteres.",
  }),
  materials: z.string().optional(),
  steps: z.array(
    z.object({
      description: z.string().min(5, {
        message: "A descrição deve ter pelo menos 5 caracteres.",
      }),
    })
  ).min(1, {
    message: "O procedimento deve ter pelo menos um passo.",
  }),
  creationDate: z.date({
    required_error: "Por favor, selecione uma data de criação.",
  }),
  revisionDate: z.date({
    required_error: "Por favor, selecione uma data de revisão.",
  }),
  version: z.string(),
  status: z.enum(["active", "under_review", "expired"]),
});

interface POPFormProps {
  onSubmit: (values: z.infer<typeof formSchema>) => void;
  initialData?: z.infer<typeof formSchema>;
  isEditing?: boolean;
}

export function POPForm({
  onSubmit,
  initialData,
  isEditing = false,
}: POPFormProps) {
  const defaultValues: Partial<z.infer<typeof formSchema>> = {
    title: "",
    code: "",
    sector: "",
    department: "",
    objective: "",
    materials: "",
    steps: [{ description: "" }],
    creationDate: new Date(),
    revisionDate: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000), // Default to 90 days from now
    version: "1.0",
    status: "active",
    ...initialData,
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const { fields, append, remove } = form.useFieldArray({
    name: "steps",
    control: form.control,
  });

  const sectorOptions = [
    "Administrativo",
    "Produção",
    "Qualidade",
    "Logística",
    "RH",
    "Financeiro",
    "TI",
    "Comercial",
    "Marketing",
  ];

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Título</FormLabel>
                <FormControl>
                  <Input placeholder="Título do procedimento" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="code"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Código</FormLabel>
                <FormControl>
                  <Input placeholder="POP-001" {...field} />
                </FormControl>
                <FormDescription>
                  Um código único para identificar o procedimento
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="sector"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Setor</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione um setor" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {sectorOptions.map((sector) => (
                      <SelectItem key={sector} value={sector}>
                        {sector}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="department"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Departamento Responsável</FormLabel>
                <FormControl>
                  <Input placeholder="Departamento responsável" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="creationDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Data de Criação</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "dd/MM/yyyy")
                        ) : (
                          <span>Selecione uma data</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="revisionDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Data para Revisão</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "dd/MM/yyyy")
                        ) : (
                          <span>Selecione uma data</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

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
                      <SelectValue placeholder="Selecione um status" />
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

        <FormField
          control={form.control}
          name="objective"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Objetivo</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Descreva o objetivo deste procedimento"
                  className="min-h-[120px]"
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
                  placeholder="Liste os materiais necessários para este procedimento (opcional)"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div>
          <Label className="text-base">Passos do Procedimento</Label>
          <div className="space-y-4 mt-2">
            {fields.map((field, index) => (
              <Card key={field.id}>
                <CardContent className="pt-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <FormField
                        control={form.control}
                        name={`steps.${index}.description`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center gap-2">
                              <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm">
                                {index + 1}
                              </span>
                              Descrição do Passo
                            </FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Descreva este passo do procedimento"
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
                        onClick={() => remove(index)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="mt-2"
              onClick={() => append({ description: "" })}
            >
              <PlusCircle className="mr-2 h-4 w-4" />
              Adicionar Passo
            </Button>
          </div>
          {form.formState.errors.steps?.root && (
            <p className="text-sm font-medium text-destructive mt-2">
              {form.formState.errors.steps.root.message}
            </p>
          )}
        </div>

        <Collapsible className="w-full">
          <CollapsibleTrigger asChild>
            <Button variant="outline" type="button" className="w-full">
              <FileText className="mr-2 h-4 w-4" />
              Anexos e Documentos Relacionados
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-4">
            <div className="border rounded-md p-4">
              <p className="text-sm text-muted-foreground mb-4">
                Adicione arquivos relacionados a este procedimento
              </p>
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-muted/50 hover:bg-muted"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <PlusCircle className="w-8 h-8 mb-3 text-muted-foreground" />
                    <p className="mb-2 text-sm text-muted-foreground">
                      Clique para fazer upload ou arraste arquivos aqui
                    </p>
                  </div>
                  <input id="dropzone-file" type="file" className="hidden" />
                </label>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>

        <div className="flex justify-end">
          <Button type="submit">{isEditing ? "Atualizar POP" : "Criar POP"}</Button>
        </div>
      </form>
    </Form>
  );
}
