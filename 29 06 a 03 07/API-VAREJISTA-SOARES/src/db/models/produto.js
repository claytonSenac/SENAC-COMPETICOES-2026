import { db } from "../conexaoBanco.js";
import * as z from 'zod';

export async function criarTabelaProduto(){

    try {
        const [r,f] = await db.execute(`
            CREATE TABLE IF NOT EXISTS Produto 
            (
                Id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                Nome VARCHAR(50) NOT NULL UNIQUE,
                Descricao TEXT,
                Preco FLOAT(10,2) NOT NULL,
                Estoque INT DEFAULT 1,
                IdCategoria INT NOT NULL,

                FOREIGN KEY (IdCategoria) REFERENCES Categoria(Id)
        );`);
    } catch (error) {
        console.log(error);
        return;
    }
}

export const Produto = z.object({
    Id: z.int().optional(),
    Nome: z.string().max(50),
    Descricao: z.string().optional(),
    Preco: z.float64().positive().min(0.01),
    Estoque: z.int().min(1),
    IdCategoria: z.int().min(1)
});