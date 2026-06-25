// src/models/plan.model.js
import { prisma } from "../lib/prisma.js";

export async function listarProjetos() {
  return prisma.projetos.findMany({ orderBy: { name: "asc" } });
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
  return prisma.projetos.delete({ where: { id } });
}