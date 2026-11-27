import { CursosRepository } from "../repository/cursos.repository";

export class CursosService {
    constructor() {
        this.repository = new CursosRepository;
    }

    async listarTodos() {
        return await this.repository.listarTodos();
    }

    async buscarPorId(id) {
        const curso = this.repository.buscarPorId(id);
        if (!curso) {
            throw new Error ("Curso não encontrado");
        }
        return curso;
    }

    async buscarPorNome(nome) {
        return await this.repository.buscarPorNome(nome);
    }

    async criar(dados) {
        const cursoExistente = await this.buscarPorNome(dados.nome);

        if (cursoExistente) {
            throw new Error("Curso já existe");
        }

        if (dados.ativo && dados.preco === 0) {
            throw new Error("Curso ativo não pode ter preço zero");
        }

        return await this.repository.criar(dados);
    }

}