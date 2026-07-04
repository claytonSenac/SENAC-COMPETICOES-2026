import { db } from "../conexaoBanco.js";
import * as z from 'zod';

export async function criarTabelaCategoria(){
    try{
        const [results,fields] = await db.execute(`
        CREATE TABLE IF NOT EXISTS categoria (
            Id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
            Nome VARCHAR(50) NOT NULL,
            Descricao TEXT NOT NULL
        );`);

        return;
    }catch(e){
        console.log(e);
        return
    }
     
};

export const Categoria = z.object({
    Id: z.int().optional(),
    Nome: z.string().max(50),
    Descricao: z.string().optional(),
    Preco: z.float64().positive(),
    Estoque: z.int().positive(),
    IdCategoria: z.int()
});

