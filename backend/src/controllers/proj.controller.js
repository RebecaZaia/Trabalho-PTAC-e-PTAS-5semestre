// src/controllers/plan.controller.js
import * as ProjModel from "../models/proj.model.js";

// GET /api/projetos
export async function listar(req, res) {
  const projetos = await ProjModel.listarProjetos();
  return res.json(projetos);
}

// GET /api/projetos/:id
export async function buscar(req, res) {
  const id = req.params.id;
  const projeto = await ProjModel.buscarProjetoPorId(id);
  if (!projeto) {
    return res.status(404).json({ error: "Projeto não encontrado." });
  }
  return res.json(projeto);
}

// POST /api/projetos
export async function criar(req, res) {
  const { nome, conteudo, data_inicial, data_final } = req.body;

  if (!nome || !conteudo || !data_inicial || !data_final) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios." });
  }

  const projeto = await ProjModel.criarProjeto({
    nome,
    conteudo,
    data_inicial: new Date(data_inicial),
    data_final: new Date(data_final),
    data_cadastro: new Date(),
  });
  return res.status(201).json(projeto);
}

// PUT /api/plans/:id
export async function atualizar(req, res) {
  const id = req.params.id;
  const { nome, conteudo, data_inicial, data_final } = req.body;

  const projeto = await ProjModel.buscarProjetoPorId(id);
  if (!projeto) {
    return res.status(404).json({ error: "Projeto não encontrado." });
  }

  const atualizado = await ProjModel.atualizarProjeto(id, {
    nome,
    conteudo,
    data_inicial: new Date(data_inicial),
    data_final: new Date(data_final),
  });
  return res.json(atualizado);
}

// DELETE /api/plans/:id
export async function deletar(req, res) {
  try {
    const id = req.params.id;

    const projeto = await ProjModel.buscarProjetoPorId(id);
    if (!projeto) {
      return res.status(404).json({ error: "Projeto não encontrado." });
    }

    await ProjModel.deletarProjeto(id);
    return res.status(204).send();
  } catch (error) {
    console.error("Erro ao deletar projeto:", error);
    return res.status(500).json({ error: "Erro interno ao deletar o projeto." });
  }
}
