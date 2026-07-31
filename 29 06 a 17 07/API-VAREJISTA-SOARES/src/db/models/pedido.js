import { db } from "../conexaoBanco.js";
import * as z from 'zod';

export async function criarTabelaPedido(){
    try {
        const [r,f] = await db.execute(`
            CREATE TABLE IF NOT EXISTS Pedido
            (
                Id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
                DataPedido DATETIME NOT NULL,
                Status VARCHAR(10) NOT NULL,
                IdCliente INT NOT NULL,
                IdFuncionario INT NOT NULL,

                FOREIGN KEY (IdCliente) REFERENCES Cliente(Id),
                FOREIGN KEY (IdFuncionario) REFERENCES Funcionario(Id)
            );
            `)

            await criarTabelaItensPedido();
            return;
    } catch (error) {
        console.log(error);
        return;
    }
}

export async function criarTabelaItensPedido(){
        try {
        const [r,f] = await db.execute(`
            CREATE TABLE IF NOT EXISTS ItensPedido
            (
                Id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
                IdPedido INT NOT NULL,
                IdProduto INT NOT NULL,
                Quantidade INT NOT NULL,

                FOREIGN KEY (IdPedido) REFERENCES Pedido(Id),
                FOREIGN KEY (IdProduto) REFERENCES Produto(Id)
            );
            `);
            return;
    } catch (error) {
        console.log(error);
        return;
    }
}



const EnumStatus = ["Aberto","Pago","Cancelado","Finalizado"]

export const Pedido = z.object({
    Id: z.int().optional(),
    DataPedido: z.date().optional(),
    Status: z.enum(EnumStatus),
    IdCliente: z.int().min(1),
    IdFuncionario: z.int().min(1)
})



export const ItensPedido = z.object({
    Id: z.int().optional(),
    IdPedido: z.int().min(1),
    IdProduto: z.int().min(1),
    Quantidade: z.int().min(1)
}) 


// USE varejista_soares;

// DELIMITER $$

// CREATE TRIGGER deduzirEstoque 
// AFTER INSERT ON itensPedido 
// FOR EACH ROW
//     BEGIN
// 		UPDATE Produto as p set p.Estoque = p.Estoque - NEW.Quantidade 
//         WHERE p.Id = NEW.IdProduto;
// END;
