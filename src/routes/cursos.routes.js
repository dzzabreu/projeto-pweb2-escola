import { Router } from "express";

import { validarCurso } from "../middlewares/validacao.middleware.js";
import { listarCursos, buscarCursoPorId, criarCurso, atualizarCurso } from "../controllers/cursos.controller.js";


const cursosRouter = Router(); // um mini-app só de rotas

cursosRouter.get("/cursos", listarCursos);
cursosRouter.get("/:id", buscarCursoPorId);
cursosRouter.post("/", validarCurso, criarCurso);
cursosRouter.put("/:id", validarCurso, atualizarCurso);

export default cursosRouter;