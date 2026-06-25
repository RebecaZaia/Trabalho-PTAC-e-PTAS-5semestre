import { Router } from "express";
import * as ProjController from "../controllers/proj.controller.js";
import { requireAuth } from "../middleware/auth.js";

const router = Router();

router.get("/", ProjController.listar);
router.get("/:id", ProjController.buscar);
router.post("/", requireAuth, ProjController.criar);
router.put("/:id", requireAuth, ProjController.atualizar);
router.delete("/:id", requireAuth, ProjController.deletar);

export default router;