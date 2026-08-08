import { PrismaClient } from "./generated/prisma/client.js";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import 'dotenv/config';

const adapter = new PrismaMariaDb({
    host: process.env.HOST ?? "localhost",
    port: process.env.PORT ?? 3306,
    user: process.env.USER ?? 'root',
    password: process.env.PASSWORD ?? "",
    database: process.env.DATABASE ?? ""
})

export const db = new PrismaClient({adapter});

// try {
//     //await db.$connect();
// } catch (error) {
//     console.log(error)
// } 