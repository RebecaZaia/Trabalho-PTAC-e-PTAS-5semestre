"use client";

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Plus } from "lucide-react";
import CardProjetoAdmin from "@/components/card-proj-admin";
import ProjetoForm from "@/components/proj-form";

const API = "http://localhost:5500/api/projetos"; // Substitua pelo endpoint correto da sua API

export default function ProjetosAdmin() {
  const [projetos, setProjetos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [editing, setEditing] = useState(null); // null = criar, objeto = editar
  const [form, setForm] = useState({
    nome: "",
    conteudo: "",
    data_inicial: "",
    data_final: "",
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [confirmDelete, setConfirmDelete] = useState(null); // id do plano a deletar

  const fetchProjetos = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(API);
      const data = await res.json();
      setProjetos(data);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProjetos();
  }, [fetchProjetos]);

  function openCreate() {
    setEditing(null);
    setForm({ nome: "", conteudo: "", data_inicial: "", data_final: "" });
    setError("");
    setSheetOpen(true);
  }

  function openEdit(projeto) {
    setEditing(projeto);
    setForm({
      nome: projeto.nome,
      conteudo: projeto.conteudo,
      data_inicial: projeto.data_inicial,
      data_final: projeto.data_final,
    });
    setError("");
    setSheetOpen(true);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);
    setError("");

    const body = {
      nome: form.nome,
      conteudo: form.conteudo,
      data_inicial: form.data_inicial,
      data_final: form.data_final,
    };

    const res = await fetch(editing ? `${API}/${editing.id}` : API, {
      method: editing ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(body),
    });

    setSaving(false);

    if (!res.ok) {
      const data = await res.json();
      setError(data.error ?? "Erro ao salvar projeto.");
      return;
    }

    setSheetOpen(false);
    fetchProjetos();
  }

  async function handleDelete(id) {
    await fetch(`${API}/${id}`, { method: "DELETE", credentials: "include" });
    setConfirmDelete(null);
    fetchProjetos();
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Projetos</h1>
        <Button onClick={openCreate}>
          <Plus className="size-4 mr-2" />
          Novo Projeto
        </Button>
      </div>

      {loading ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-48 rounded-xl" />
          ))}
        </div>
      ) : projetos.length === 0 ? (
        <p className="text-muted-foreground text-sm">
          Nenhum projeto cadastrado ainda.
        </p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projetos.map((projeto) => (
            <CardProjetoAdmin
              key={projeto.id}
              projeto={projeto}
              confirmDelete={confirmDelete}
              onEdit={openEdit}
              onDelete={handleDelete}
              onRequestDelete={setConfirmDelete}
              onCancelDelete={() => setConfirmDelete(null)}
            />
          ))}
        </div>
      )}

      <ProjetoForm
        editing={editing} 
        sheetOpen={sheetOpen} 
        setSheetOpen={setSheetOpen} 
        form={form}
        setForm={setForm}
        handleSubmit={handleSubmit} 
        saving={saving}
        error={error}
      />
    </div>
  );
}
