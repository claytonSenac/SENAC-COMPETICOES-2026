import { Sequelize } from "sequelize";
import 'dotenv/config';

export const db = new Sequelize({
    host: process.env['DB_HOST'] ?? 'localhost',
    username: process.env['DB_USERNAME'] ?? 'root',
    password: process.env['DB_PASSWORD'] ?? "",
    dialect: 'mysql',
    database: process.env['DB_NAME'] ?? 'DB_LeiaMais'
});


try {
    await db.authenticate();
} catch (error) {
    console.error(error);
    process.exit(-1);
}







