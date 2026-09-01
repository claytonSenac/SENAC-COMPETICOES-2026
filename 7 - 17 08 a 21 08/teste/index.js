import e from 'express'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
const keyJWT = 'asjdaoskdmaskdapsmdpaksmdpamsdpmasdpamspdkmapksdmapksdmapksdmapskdm';
import cookieParser from 'cookie-parser';

import "dotenv/config";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "./generated/prisma/client.js";

const adapter = new PrismaMariaDb({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  connectionLimit: 5,
});
const prisma = new PrismaClient({ adapter });


const app = e();

app.use(e.json());
app.use(cookieParser());

app.listen(3000,() => {
  console.log('ok')
});


app.post("/criar",async (req,res) => {
    const {email,senha,nome} = req.body;

    console.log(email,senha,nome)

    const salt = await bcrypt.genSalt(10);

    const hashed = await bcrypt.hash(senha,salt);
    console.log(senha,salt,hashed);

    const data = await prisma.user.create({
        data:{
            nome: nome,
            email: email,
            password: hashed,
            salt: salt
        }
    });

    if(data){
        res.send("deu bao")
    }else{
        res.send('deu ruim')
    }

});


app.post("/login",async (req,res) => {
    const {email,senha }= req.body;

    const exists = await prisma.user.findFirst({
        where: {
            email: email
        }
    });

    if(exists){
        const comparado = await  bcrypt.compare(senha,exists.password);
        console.log(comparado)
        const jswt = jwt.sign(exists.nome,keyJWT)
        console.log(jswt)
        res.cookie('login',jswt);
        res.send({token: jswt, exists})
    }else{
        res.send("vc n exist")
    }
})

app.get("/logged", async (req,res)=>{
    const cookie = req.cookies['login']
    
    const resa =jwt.verify(cookie,keyJWT,(err,succ) => {
      if(err){
        res.status(400).send('não autenticado')
      }else{
        res.send('autenticado')
      }
    })

    console.log(resa)
})

app.get('/logout',(req,res) => {
    res.clearCookie('login');
    res.send('bao')
})