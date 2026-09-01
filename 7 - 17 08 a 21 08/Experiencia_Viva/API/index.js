import e from 'express';
import 'dotenv/config';
import './src/Core/dbContext.js';
import cors from 'cors';
import atividadeRoutes from './src/Controllers/Atividade.js';
import participanteRoutes from './src/Controllers/Participante.js';
import atividadeService from './src/Services/AtividadeService.js';

const app = e();
const PORT = process.env.SERVER_PORT ?? 3000;

app.use(e.json());
app.use(cors({
  origin: "http://localhost:5173"
}));

app.listen(PORT, () => {
  console.log('RODANDO EM ',PORT)
});

app.use("/atividade",atividadeRoutes);
app.use("/participante",participanteRoutes)

app.post("/user/login", async (req,res) => {
  const {email,senha} = req.body;

  const data = await atividadeService.loginAdministrativo({email,senha});

  res.status(data.code).json(data)
})
