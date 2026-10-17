import { Router } from "express";
import { atividadeService } from "../service/atividadeService.js";

const r = Router();

r.get("/listar/", async (req,res) => {
  const result = await atividadeService.listar();
  
  res.status(result.code).json(result)
});

r.get("/listar/:qtd", async (req,res) => {
  const {qtd} = req.params;
  const result = await atividadeService.listar(qtd);
  
  res.status(result.code).json(result)
});

r.get("/menorAderencia", async (req,res) => {
  const result = await atividadeService.buscarComMenorAderencia();
  
  res.status(result.code).json(result)
});

r.get("/disponiveis/:idParticipante", async (req,res) => {
  const {idParticipante} = req.params;
  const result = await atividadeService.listarDisponiveis(idParticipante);
  
  res.status(result.code).json(result)
});



r.post("/criar/", async (req,res) => {
  const {data} = req.body;
  const result = await atividadeService.criar(data);
  
  res.status(result.code).json(result)
});


r.put("/editar/:id", async (req,res) => {
  const {data} = req.body;
  const {id} = req.params;
  const result = await atividadeService.editar(data,id);
  
  res.status(result.code).json(result)
});

r.delete("/excluir/:id", async (req,res) => {

  const {id} = req.params;
  const result = await atividadeService.excluir(id);
  
  res.status(result.code).json(result)
});


export default r;
