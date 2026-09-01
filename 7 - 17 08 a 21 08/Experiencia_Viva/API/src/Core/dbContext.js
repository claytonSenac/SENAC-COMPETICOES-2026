import {PrismaMariaDb} from '@prisma/adapter-mariadb';
import {PrismaClient} from './generated/prisma/client.js';
import 'dotenv/config';
import bcrypt from 'bcryptjs';

const adapter = new PrismaMariaDb({
  host: process.env.DBHost,
  port: process.env.DBPort,
  connectionLimit: 5,
  database: process.env.DBName,
  password: process.env.DBPassWord,
  user: process.env.DBUser
});

export const db = new PrismaClient({adapter});

try {
    // const test = await db.participante.findMany();
    // console.log(test);

    await db.$connect();
    await db.$disconnect();

    await seedDb();
    
} catch (error) {
    console.log(error)
} 


async function seedDb(){
    console.log('rodando seed');

    if(await db.user.count() == 0){
        console.log('rodando seed')

        const hashed = await bcrypt.hash("Admin@123", await bcrypt.genSalt(10))

        await db.user.create({
            data:{
                email: "admin@gmail.com",
                nome: "Admin",
                password: hashed
            }
        });q

    }else{
        console.log('n precisa de seed')
    }
    
}