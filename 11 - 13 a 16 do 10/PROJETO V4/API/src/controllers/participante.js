import { Router } from "express";
import { participanteService } from "../service/participanteService.js";

const r = Router();

r.get("/listar/", async (req,res) => {
  const result = await participanteService.listar();
  
  res.status(result.code).json(result)
});

r.get("/listar/detalhes/:id", async (req,res) => {
  const {id} = req.params;
  const result = await participanteService.detalhesParticipante(id);
  
  res.status(result.code).json(result)
});


r.post("/criar/", async (req,res) => {
  const {data} = req.body;
  const result = await participanteService.criar(data);
  
  res.status(result.code).json(result)
});

r.post("/inscrever/", async (req,res) => {
  const {data} = req.body;
  const result = await participanteService.inscrever(data);
  
  res.status(result.code).json(result)
});

r.post("/cancelarInscricao/:id", async (req,res) => {
  const {id} = req.params;

  const result = await participanteService.cancelarInscricao(id);
  
  res.status(result.code).json(result)
});

r.post("/redefinirSenha/:id", async (req,res) => {
  const {id} = req.params;

  const result = await participanteService.redefinirSenha(id);
  
  res.status(result.code).json(result)
});

r.put("/editar/admin/:id", async (req,res) => {
  const {data} = req.body;
  const {id} = req.params;
  const result = await participanteService.editarAdmin(data,id);
  
  res.status(result.code).json(result)
});

r.put("/editar/:id", async (req,res) => {
  const {data} = req.body;
  const {id} = req.params;
  const result = await participanteService.editar(data,id);
  
  res.status(result.code).json(result)
});

r.delete("/excluir/:id", async (req,res) => {

  const {id} = req.params;
  const result = await participanteService.excluir(id);
  
  res.status(result.code).json(result)
});




export default r;
