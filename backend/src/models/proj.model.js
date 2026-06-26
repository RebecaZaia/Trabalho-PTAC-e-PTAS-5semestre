// src/models/plan.model.js
import { prisma } from "../lib/prisma.js";

export async function listarProjetos() {
  return prisma.projetos.findMany({ orderBy: { nome: "asc" } });
}

export async function buscarProjetoPorId(id) {
  return prisma.projetos.findUnique({ where: { id } });
}

export async function criarProjeto(data) {
  return prisma.projetos.create({ data });
}

export async function atualizarProjeto(id, data) {
  return prisma.projetos.update({ where: { id }, data });
}

export async function deletarProjeto(id) {
  return prisma.$transaction(async (tx) => {
    await tx.comentarios.deleteMany({
      where: {
        post: {
          id_proj: id,
        },
      },
    });

    await tx.curtidas.deleteMany({
      where: {
        OR: [{ id_proj: id }, { post: { id_proj: id } }],
      },
    });

    await tx.posts.deleteMany({
      where: {
        id_proj: id,
      },
    });

    return tx.projetos.delete({ where: { id } });
  });
}