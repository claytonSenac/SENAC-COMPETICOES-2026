import './src/dbContext.js';
import e from 'express';
import 'dotenv/config';
import categoriasControllers from './src/Controllers/Categoria.js';
import eventoControllers from './src/Controllers/Evento.js';
import participanteController from './src/Controllers/Participante.js';
import cors from 'cors'

const port = process.env.EXPRESS_PORT ?? 3000;
const app = e();

app.use(e.json());
app.use(cors({
  origin: "http://localhost:5173"
}))
app.use("/api/categoria",categoriasControllers);
app.use("/api/evento",eventoControllers);
app.use("/api/participante",participanteController);


app.listen(port,() => {
  console.log('SERVIDOR RODANDO')
});