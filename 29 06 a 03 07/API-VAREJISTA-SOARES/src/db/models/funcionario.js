import { db } from "../conexaoBanco.js";
import * as z from 'zod';

export async function criarTabelaFuncionario(){
    try {
        const [r,f] = await db.execute(`
            CREATE TABLE IF NOT EXISTS Funcionario
            (
                Id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
                Nome VARCHAR(80) NOT NULL,
                Cargo VARCHAR(50) NOT NULL,
                Email VARCHAR(200) NOT NULL UNIQUE,
                Telefone CHAR(11) NOT NULL
                );
            `);
        return;
    } catch (error) {
        console.log(error);
        return;
    }
}

export const Funcionario = z.object({
    Id: z.int().optional(),
    Nome: z.string().max(80),
    Cargo: z.string().max(50),
    Email: z.string().max(200),
    Telefone: z.string().length(11)
});