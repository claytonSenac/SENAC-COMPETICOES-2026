import mysql from 'mysql2/promise';
import 'dotenv/config';



export async function initDb(){
    const rootDb = await mysql.createConnection({
        host: process.env.HOST ?? 'localhost',
        user: process.env.USER ?? 'root',
        password: process.env.DB_PASSWORD ?? '1234',
        port: process.env.PORT ?? 3306
    })
    try{
        const createDatabaseSQL = `CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME ?? 'cadastro_produto'}`

        await db.execute(createDatabaseSQL);

        await createTables();
    }catch(e){
        console.log(e);
    }
}

export const db = await mysql.createConnection({
    host: process.env.HOST ?? 'localhost',
    user: process.env.USER ?? 'root',
    password: process.env.DB_PASSWORD ?? '1234',
    port: process.env.PORT ?? 3306,
    database: process.env.DB_NAME ?? 'cadastro_produto'
})

async function createTables(){
    const createTableSQL = `CREATE TABLE IF NOT EXISTS Produto (
                            ID INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
                            Nome VARCHAR(60) NOT NULL,
                            Descricao VARCHAR(200) NOT NULL,
                            Estoque INT NOT NULL DEFAULT 0,
                            Preco DECIMAL(10,2) NOT NULL);`
    
    try{

        await db.execute(createTableSQL);

    }catch(e){
        console.log(e);
    }
}