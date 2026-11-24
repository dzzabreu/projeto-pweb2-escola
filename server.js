import express from "express";
import cursosRouter from "./src/routes/cursos.routes.js";
import { Router } from "express";

const router = Router();
router.use("/cursos", cursosRouter);

const app = express();

app.use(cursosRouter);
app.use(express.json());

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Escola de Cursos em http://localhost:${PORT}`);
});