
import e from 'express';
import auth from './src/controllers/auth.js';
import atividade from './src/controllers/atividade.js';
import participante from './src/controllers/participante.js'
import { db } from './src/core/dbContext.js';
import { Result } from './src/utils/result.js';
import cors from 'cors';
import { atividadeService } from './src/service/atividadeService.js';

const app = e();

app.use(e.json());

app.use(cors({
  origin: ["http://localhost:5173","http://localhost:5174"]
}));

app.listen(3000,(e) => {
  if(e) return console.log(e);

  console.log("Servidor Rodando");
});

app.use("/auth",auth);
app.use("/atividade",atividade);
app.use("/participante",participante);


app.get("/saude", async (req,res) => {

  const next = await atividadeService.listar(3);
  const totParticipantes = await db.participante.count({
    where:{
        Ativo:true
    }
  });

  const totAtividades = await db.atividade.count({
    where:{
        Ativo:true,
        Data: {
          gte: new Date()
        }
    }
  });

  const totInscricoes = await db.inscricao.count({
    where:{
      Ativo:true,
      atividade:{
        Data:{
          gte: new Date()
        }
      }
    }
  })

  const menorAderencia = await atividadeService.buscarComMenorAderencia()

  res.status(200).json(Result.sucess(200, "sucesso", {
    participantes: totParticipantes, 
    atividades: totAtividades, 
    proximas:next.data,
    inscritos: totInscricoes,
    menorAderencia: menorAderencia.data
  }));
});