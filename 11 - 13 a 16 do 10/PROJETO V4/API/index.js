
import e from 'express';
import auth from './src/controllers/auth.js';
import atividade from './src/controllers/atividade.js';
import { db } from './src/core/dbContext.js';
import { Result } from './src/utils/result.js';

const app = e();

app.use(e.json());

app.listen(3000,(e) => {
  if(e) return console.log(e);

  console.log("Servidor Rodando");
});

app.use("/auth",auth);
app.use("/atividade",atividade);

app.get("/saude", async (req,res) => {
  const totParticipantes = await db.participante.count({
    where:{
        Ativo:true
    }
  });

  const totAtividades = await db.atividade.count({
    where:{
        Ativo:true,
        Data: new Data()
    }
  });

  res.status(200).json(Result.sucess(200, "sucesso", {participantes: totParticipantes, atividades: totAtividades}));
});