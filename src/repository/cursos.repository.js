import { cursos as sementeCursos} from "../dados/cursos.js"

export class CursosRepository {
    constructor() {
        this.cursos = [...sementeCursos];
        this.proximoId = this.cursos.reduce((m, c) => Math.max(c, c.id), 0) + 1;
    }

    async listarTodos() {
        return this.cursos;
    }

    async buscarPorId(id) {
        return this.cursos.find((c) => c.id === id) ?? null;
    }

    async buscarPorNome(nome) {
        const alvo = nome.trim().toLowerCase();
        return this.cursos.find((c) => c.nome.trim().toLocaleLowerCase === alvo) ?? null;
    }

    async criar(dados) {
        const novo = {id: this.proximoId++, ...dados};
        this.cursos.push(novo);
        return novo;
    }
}