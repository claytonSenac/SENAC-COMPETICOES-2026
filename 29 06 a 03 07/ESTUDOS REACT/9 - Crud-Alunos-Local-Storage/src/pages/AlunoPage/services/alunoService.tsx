import type { Aluno } from "../types/Aluno";
let alunos: Aluno[] = [
    {
        nome: "João Silva",
        idade: 16,
        email: "joao.silva@gmail.com",
        sala: "A101"
    },
    {
        nome: "Maria Oliveira",
        idade: 17,
        email: "maria.oliveira@gmail.com",
        sala: "A101"
    },
    {
        nome: "Pedro Santos",
        idade: 15,
        email: "pedro.santos@gmail.com",
        sala: "A102"
    },
    {
        nome: "Ana Costa",
        idade: 18,
        email: "ana.costa@gmail.com",
        sala: "A102"
    },
    {
        nome: "Lucas Ferreira",
        idade: 16,
        email: "lucas.ferreira@gmail.com",
        sala: "B201"
    },
    {
        nome: "Beatriz Almeida",
        idade: 17,
        email: "beatriz.almeida@gmail.com",
        sala: "B201"
    },
    {
        nome: "Gabriel Souza",
        idade: 15,
        email: "gabriel.souza@gmail.com",
        sala: "B202"
    },
    {
        nome: "Julia Martins",
        idade: 16,
        email: "julia.martins@gmail.com",
        sala: "B202"
    },
    {
        nome: "Matheus Lima",
        idade: 18,
        email: "matheus.lima@gmail.com",
        sala: "C301"
    },
    {
        nome: "Larissa Rocha",
        idade: 17,
        email: "larissa.rocha@gmail.com",
        sala: "C301"
    },
    {
        nome: "Rafael Gomes",
        idade: 16,
        email: "rafael.gomes@gmail.com",
        sala: "C302"
    },
    {
        nome: "Camila Ribeiro",
        idade: 15,
        email: "camila.ribeiro@gmail.com",
        sala: "C302"
    },
    {
        nome: "Gustavo Carvalho",
        idade: 18,
        email: "gustavo.carvalho@gmail.com",
        sala: "D401"
    },
    {
        nome: "Fernanda Barbosa",
        idade: 17,
        email: "fernanda.barbosa@gmail.com",
        sala: "D401"
    },
    {
        nome: "Bruno Dias",
        idade: 16,
        email: "bruno.dias@gmail.com",
        sala: "D402"
    },
    {
        nome: "Amanda Nunes",
        idade: 15,
        email: "amanda.nunes@gmail.com",
        sala: "D402"
    },
    {
        nome: "Thiago Lopes",
        idade: 18,
        email: "thiago.lopes@gmail.com",
        sala: "E501"
    },
    {
        nome: "Isabela Mendes",
        idade: 16,
        email: "isabela.mendes@gmail.com",
        sala: "E501"
    },
    {
        nome: "Eduardo Pereira",
        idade: 17,
        email: "eduardo.pereira@gmail.com",
        sala: "E502"
    },
    {
        nome: "Sofia Cardoso",
        idade: 15,
        email: "sofia.cardoso@gmail.com",
        sala: "E502"
    }
];

export function getAlunos(): Aluno[] {
    return alunos;
}

export function addAluno(aluno:Aluno){
    alunos.push(aluno);
    return alunos;
}