import mysql from 'mysql2/promise';
import 'dotenv/config';

export let db;

export async function iniciarBanco(){

    const rootDb = await mysql.createConnection({
        host: process.env.HOST_DB ?? 'localhost',
        user: process.env.USER_DB ?? 'root',
        password: process.env.PASSWORD_DB ?? '',
        port: process.env.PORT_DB ?? 3306,
    });

    const [results,fields] = await rootDb.execute(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME ?? 'pedidos_clientes'}`);
    if(results.affectedRows > 0){
        console.log('INFO :  Banco Criado');
    }

    db = await mysql.createConnection({
        host: process.env.HOST_DB,
        user: process.env.USER_DB,
        password: process.env.PASSWORD_DB,
        port: process.env.PORT_DB,
        database: process.env.DB_NAME
    });
 

    await criarTabelaCliente();
    await criarTabelaPedido();
}; 

async function criarTabelaCliente(){
    try{
        const [results,fields] = await db.execute(
        `CREATE TABLE IF NOT EXISTS Cliente
            (Id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
            Nome VARCHAR(100) NOT NULL,
            Email VARCHAR(100) NOT NULL,
            Telefone VARCHAR(12) NOT NULL);`);

        if(results.affectedRows > 0){
            console.log('INFO :  Tabela Cliente Criada');
        }
        return;
    }catch(e){
        console.log(e);
        return;
    }
}

async function criarTabelaPedido(){
    try{
        const [results,fields] = await db.execute(
        `CREATE TABLE IF NOT EXISTS Pedido
            (Id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
            DataPedido DATETIME NOT NULL,
            ValorTotal DECIMAL(10,2) NOT NULL,
            StatusPedido TEXT NOT NULL,
            IdCliente INT NOT NULL,
            
            FOREIGN KEY (IdCliente) REFERENCES Cliente(Id)
            ON DELETE CASCADE);`
        );

        if(results.affectedRows > 0){
            console.log('INFO :  Tabela Pedido Criada');
        }
        return;
    }catch(e){
        console.log(e);
        return;
    }
}

