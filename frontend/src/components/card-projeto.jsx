// frontend/src/components/card-plan.jsx
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CardProjeto({ projeto }) {
  return (
    <Card key={projeto.id} className="flex flex-col">
      <CardHeader>
        <CardTitle className="text-2xl">{projeto.nome}</CardTitle>
        <CardDescription className="text-3xl font-bold text-foreground">
          {projeto.conteudo}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col gap-2 text-sm">
        <span>
            <strong>Início:</strong>{" "}
            {new Date(projeto.data_inicial).toLocaleDateString("pt-BR")}
        </span>
        <span>
            <strong>Término:</strong>{" "}
            {new Date(projeto.data_final).toLocaleDateString("pt-BR")}
        </span>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href="/register">Ver projeto</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
