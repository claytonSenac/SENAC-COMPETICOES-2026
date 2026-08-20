import e from 'express';
import 'dotenv/config';

const app = e();
const PORT = process.env.SERVER_PORT ?? 3000;

app.listen(PORT, () => {
  console.log('RODANDO EM ',PORT)
});

