import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "../../generated/prisma/client.js";
import { editoraService } from "../Services/editoraService.js";


const adapter = new PrismaMariaDb({
  host: "localhost",
  port: 3306,
  user: "senac",
  password: "1234",
  database: "db_leia_mais",
  connectionLimit: 5,
});
export const prisma = new PrismaClient({ adapter });



