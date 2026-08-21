import {PrismaMariaDb} from '@prisma/adapter-mariadb';
import {PrismaClient} from './generated/prisma/client.js';
import 'dotenv/config';

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

    // await seedDb();
    
} catch (error) {
    console.log(error)
} 


async function seedDb(){
    console.log('rodando seed');

    if(await db.atividade.count() == 0){
        console.log('rodando seed para eventos')
        await db.atividade.createMany(
            {
                data:[
                    {nome: "evento 001", dataEvento: new Date().toISOString(), vagas:50, quantidade_vagas: 50, descricao: "evento 001 de teste"},
                    {nome: "evento 002", dataEvento: new Date().toISOString(), vagas:50, quantidade_vagas: 50, descricao: "evento 002 de teste"},
                    {nome: "evento 003", dataEvento: new Date().toISOString(), vagas:50, quantidade_vagas: 50, descricao: "evento 003 de teste"},
                    {nome: "evento 004", dataEvento: new Date().toISOString(), vagas:50, quantidade_vagas: 50, descricao: "evento 004 de teste"},
                ]
            } 
        )
        console.log('inserios')
    }else{
        console.log('existe evento')
    }

    if(await db.participante.count() == 0){
        console.log('rodando seed partiicpante');

        await db.participante.createMany({
            data:[
                {nome: 'participante 001', email: 'p001@gmail.com',telefone:"31112341234"},
                {nome: 'participante 001', email: 'p002@gmail.com',telefone:"31112341234"},
                {nome: 'participante 001', email: 'p003@gmail.com',telefone:"31112341234"},
                {nome: 'participante 001', email: 'p004@gmail.com',telefone:"31112341234"},
            ]
        })
        console.log('participantes criados')
        
    }else{console.log('existe participantes')}
}