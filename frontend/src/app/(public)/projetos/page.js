// (public)/projetos/page.js
"use client";

import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import CardProjeto from "@/components/card-projeto";

const API = "http://localhost:5500/api/projetos";

export default function Projetos() {
  const [projetos, setProjetos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProjetos() {
      setLoading(true);
      const res = await fetch(API);
      const data = await res.json();
      setProjetos(data);
      setLoading(false);
    }

    loadProjetos();
  }, []);

  return (
    <div className="flex flex-col gap-8 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold">Projetos</h1>
        <p className="text-muted-foreground mt-2">
          Alguns projetos.
        </p>
      </div>

      {loading ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-48 rounded-xl" />
          ))}
        </div>
      ) : projetos.length === 0 ? (
        <p className="text-center text-muted-foreground text-sm">
          Nenhum projeto cadastrado ainda.
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projetos.map((projeto) => (
            <CardProjeto key={projeto.id} projeto={projeto} />
          ))}
        </div>
      )}
    </div>
  );
}
