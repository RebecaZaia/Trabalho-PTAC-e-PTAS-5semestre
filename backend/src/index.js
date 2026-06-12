import express from "express";
import dotenv from "dotenv";
import { auth } from "./lib/auth.js";
import { toNodeHandler } from "better-auth/node";
import { requireAuth } from "./middleware/auth.js";
import { prisma } from "./lib/prisma.js";
import cors from "cors";

dotenv.config();

app.use(cors({
  origin: "http://localhost:3000", // endereço do frontend
  credentials: true,              // permite envio de cookies de sessão
}));

const app = express();
const PORT = process.env.PORT || 5500;

// Middleware
app.use(express.json());

// Rotas de autenticação do Better Auth
// Isso cria todas as rotas automaticamente!
app.all("/api/auth/*path", toNodeHandler(auth));

app.post("/api/auth/login", async (req, res) => {
  const { login, password } = req.body;

  const clean = login.replace(/\D/g, "");
  const isCpf = clean.length === 11;

  let user;

  if (isCpf) {
    user = await prisma.user.findUnique({
      where: { cpf: clean },
    });
  } else {
    user = await prisma.user.findUnique({
      where: { email: login },
    });
  }

  if (!user) {
    return res.status(400).json({ error: "Usuário não encontrado" });
  }

  const result = await auth.api.signInEmail({
    body: {
      email: user.email,
      password,
    },
  });

  return res.json(result);
});

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "OK", timestamp: new Date().toISOString() });
});

// Rota de teste
app.get("/", (req, res) => {
  res.json({
    message: "🚀 MinURL API rodando!",
    version: "1.0.0",
    endpoints: {
      health: "/health",
      docs: "/api/docs",
    },
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor em http://localhost:${PORT}`);
  console.log(`Auth disponível em http://localhost:${PORT}/api/auth`);
});

app.get("/api/me", requireAuth, (req, res) => {
  res.json({
    message: "Bem-vindo ao seu perfil!",
    user: req.user, // Dados vindos do middleware
  });
});