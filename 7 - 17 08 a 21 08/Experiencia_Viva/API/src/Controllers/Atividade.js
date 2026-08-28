import { Router } from "express";
import atividadeService from "../Services/AtividadeService.js";

const routes = Router();

async function listar(req,res){
    const data = await atividadeService.listar();
    res.status(data.code).send(data);
}

async function listarProximos(req,res){
    const data = await atividadeService.listarProximos();
    res.status(data.code).send(data);
}


async function listarPorId(req,res){
    const {id} = req.params;
    const data = await atividadeService.listarPorId(id);
    res.status(data.code).send(data);
}

async function criar(req,res){
    const {atividade} = req.body;
    
    const data = await atividadeService.criar(atividade);
    res.status(data.code).send(data);
}

async function editar(req,res){
    const {atividade} = req.body;
    const {id} = req.params;

    const data = await atividadeService.editar(atividade,id);
    res.status(data.code).send(data);
}

async function excluir(req,res){
    const {id} = req.params;

    const data = await atividadeService.excluir(id);
    res.status(data.code).send(data);
}

routes.get("/",listar);
routes.get("/proximos",listarProximos);
routes.get("/:id",listarPorId);
routes.post("/",criar);
routes.put("/:id",editar);
routes.delete("/delete/:id",excluir);

export default routes;