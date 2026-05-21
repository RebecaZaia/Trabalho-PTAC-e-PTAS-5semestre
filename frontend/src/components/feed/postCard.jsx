import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Star, Share2 } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Plus } from "lucide-react"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"

export default function PostCard() {
  return (
    <div className="w-full max-w-3xl bg-white rounded-xl shadow-sm flex overflow-hidden">

      <div className="w-full max-w-sm">
        <AspectRatio ratio={16 / 11} className="rounded-lg bg-muted">
          <Image
            src="https://avatar.vercel.sh/shadcn1"
            alt="Photo"
            fill
            className="w-full rounded-lg object-cover grayscale dark:brightness-20"
          />
        </AspectRatio>
      </div>

      <div className="w-1/2 p-4 flex flex-col justify-between">
        <div className="flex w-full max-w-lg flex-col gap-6">
          <Item>
            <ItemMedia>
              <Avatar className="size-9">
                <AvatarImage src="https://github.com/evilrabbit.png" />
                <AvatarFallback>ER</AvatarFallback>
              </Avatar>
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Evil Rabbit</ItemTitle>
              <ItemDescription>Data e horário da postagem</ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button
                size="icon-sm"
                variant="outline"
                className="rounded-full"
                aria-label="Invite"
              >
                <Plus />
              </Button>
            </ItemActions>
          </Item>  
        </div>

        <div className="m-4">
          <h3 className="font-semibold mt-3">
            Nome do Projeto
          </h3>

          <p className="text-sm text-gray-600">
            Atualização/Ação recente
          </p>

          <p className="text-xs text-gray-500 mt-2">
            Descrição...
          </p>
        </div>

        <div className="flex items-center justify-between mt-4 ml-4 mr-2">

          <div className="flex gap-4 text-gray-600">
            <Heart size={18} />
            <MessageCircle size={18} />
            <Star size={18} />
            <Share2 size={18} />
          </div>

          <Button size="sm" className="bg-green-600 hover:bg-green-700">
            + Seguir
          </Button>
        </div>
      </div>
    </div>
  );
}