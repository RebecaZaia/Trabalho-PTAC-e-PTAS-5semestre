// frontend\src\components\card-plan-admin.jsx
import { Pencil, Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function CardProjetoAdmin({
  projeto,
  confirmDelete,
  onEdit,
  onDelete,
  onRequestDelete,
  onCancelDelete,
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{projeto.nome}</CardTitle>
        <CardDescription>
          {projeto.conteudo}
        </CardDescription>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground flex flex-col gap-1">
        <span>
            <strong>Início:</strong>{" "}
            {new Date(projeto.data_inicial).toLocaleDateString("pt-BR")}
        </span>
        <span>
            <strong>Término:</strong>{" "}
            {new Date(projeto.data_final).toLocaleDateString("pt-BR")}
        </span>
      </CardContent>
      <CardFooter className="flex gap-2">
        {confirmDelete === projeto.id ? (
          <>
            <span className="text-sm text-destructive flex-1">
              Confirmar exclusão?
            </span>
            <Button
              size="sm"
              variant="destructive"
              onClick={() => onDelete(projeto.id)}
            >
              Sim
            </Button>
            <Button size="sm" variant="outline" onClick={onCancelDelete}>
              Não
            </Button>
          </>
        ) : (
          <>
            <Button size="sm" variant="outline" onClick={() => onEdit(projeto)}>
              <Pencil className="size-3.5 mr-1" /> Editar
            </Button>
            <Button
              size="sm"
              variant="destructive"
              onClick={() => onRequestDelete(projeto.id)}
            >
              <Trash2 className="size-3.5 mr-1" /> Excluir
            </Button>
          </>
        )}
      </CardFooter>
    </Card>
  );
}
