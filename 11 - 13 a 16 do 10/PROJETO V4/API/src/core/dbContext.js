import "dotenv/config";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "./generated/prisma/client.js";
import bcrypt from "bcryptjs";

const adapter = new PrismaMariaDb({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  connectionLimit: 5,
});

const db = new PrismaClient({ adapter });

export { db };

async function seed(){
    if(await db.user.count() == 0){
        console.log("-- RODANDO SEED ADMIN");

        const salt = await bcrypt.genSalt(10);
        const senha = await bcrypt.hash("admin@senac", salt);
        await db.user.create({
            data:{
                email: "admin@senac.com",
                HashSenha: senha
            }
        });
        console.log("Finalizado")
    }
}

await seed()