import { cursos } from "../dados/cursos.js";
import { CursosService } from "../services/cursos.services.js";


export class CursosController {
    constructor() {
        this.service = new CursosService();

    }

    async listarCursos(req, res) {
        res.json(await this.service.listarTodos());
    }

    async buscarCursoPorId(req, res) {
        const id = Number(req.params.id);
        res.json(this.service.buscarPorId(id));
    }

    async criarCurso(req, res) {
        const dados = req.body;
        const novo = await this.service.criar(dados);
        res.status(201).json(novo);
    }

    atualizarCurso(req, res) {
        const id = Number(req.params.id);
        const curso = cursos.find(c => c.id === id);
        if (!curso) {
            return res.status(404).json({ error: "Curso não encontrado" });
        } else {
            const { nome, cargaHoraria, nivel, preco, ativo } = req.body;
            curso.nome = nome;
            curso.cargaHoraria = cargaHoraria;
            curso.nivel = nivel;
            curso.preco = preco;
            curso.ativo = ativo;
            res.status(200).json(curso);
        }
    }
}