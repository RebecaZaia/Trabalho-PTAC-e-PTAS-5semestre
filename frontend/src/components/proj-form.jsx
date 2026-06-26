// frontend\src\components\plan-form.jsx
import { Button } from "./ui/button";
import { Field, FieldGroup, FieldLabel } from "./ui/field";
import { Input } from "./ui/input";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "./ui/sheet";

export default function ProjetoForm({
  editing,
  sheetOpen,
  setSheetOpen,
  form,
  setForm,
  error,
  saving,
  handleSubmit,
}) {
  return (
    <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{editing ? "Editar Projeto" : "Novo Projeto"}</SheetTitle>
          <SheetDescription>
            {editing
              ? "Altere os dados do projeto."
              : "Preencha os dados para criar um novo projeto."}
          </SheetDescription>
        </SheetHeader>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-6 px-4">
          <FieldGroup>
            {error && <p className="text-sm text-destructive">{error}</p>}
            <Field>
              <FieldLabel htmlFor="nome">Nome do Projeto</FieldLabel>
              <Input
                id="nome"
                placeholder="Ex: Projeto Exemplo"
                required
                value={form.nome}
                onChange={(e) => setForm({ ...form, nome: e.target.value })}
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="conteudo">Descrição do Projeto</FieldLabel>
              <Input
                id="conteudo"
                placeholder="Descreva o projeto..."
                required
                value={form.conteudo}
                onChange={(e) => setForm({ ...form, conteudo: e.target.value })}
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="data_inicial">Data de Início</FieldLabel>
              <Input
                id="data_inicial"
                type="date"
                required
                value={form.data_inicial}
                onChange={(e) => setForm({ ...form, data_inicial: e.target.value })}
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="data_final">Data de Término</FieldLabel>
              <Input
                id="data_final"
                type="date"
                required
                value={form.data_final}
                onChange={(e) =>
                  setForm({ ...form, data_final: e.target.value })
                }
              />
            </Field>
            <Field className="mt-4">
              <Button type="submit" disabled={saving}>
                {saving
                  ? "Salvando..."
                  : editing
                    ? "Salvar Alterações"
                    : "Criar Projeto"}
              </Button>
            </Field>
          </FieldGroup>
        </form>
      </SheetContent>
    </Sheet>
  );
}

