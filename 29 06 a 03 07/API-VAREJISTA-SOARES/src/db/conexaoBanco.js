import mysql from 'mysql2/promise';
import 'dotenv/config';

import { criarTabelaCategoria } from './models/categoria.js';
import { criarTabelaProduto } from './models/produto.js';
import { criarTabelaCliente } from './models/cliente.js';
import { criarTabelaFuncionario } from './models/funcionario.js';
import { criarTabelaPedido } from './models/pedido.js';

export let db;

export async function iniciarBanco(){
    const rootDb = await mysql.createConnection({
        host : process.env.DB_HOST ?? "localhost",
        user : process.env.DB_USER ?? "root",
        password : process.env.DB_PASSWORD ?? '',
        port : process.env.DB_PORT
    });

    const [results,fields] = await rootDb.execute(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME ?? 'varejista_soares'} ;`);

    db = await mysql.createConnection({
        host : process.env.DB_HOST ?? "localhost", 
        user : process.env.DB_USER ?? "root",
        password : process.env.DB_PASSWORD ?? '',
        port : process.env.DB_PORT,
        database : process.env.DB_NAME ?? "varejista_soares"
    });

    await criarTabelaCategoria();
    await criarTabelaProduto();
    await criarTabelaCliente();
    await criarTabelaFuncionario();
    await criarTabelaPedido();

    if(results.affectedRows > 0){
        console.log('== BANCO CRIADO ==');
        console.log("== TABELAS CRIADAS ==");
    }
};

