import { Router } from "express";
import participanteService from "../Services/ParticipanteService.js"; 

const routes = Router();

async function listar(req,res){
    const data = await participanteService.listar();
    res.status(data.code).send(data);
}

async function listarPorId(req,res){
    const {id} = req.params;
    const data = await participanteService.listarPorId(id);
    res.status(data.code).send(data);
}

async function criar(req,res){
    const {participante} = req.body;
    
    const data = await participanteService.criar(participante);
    res.status(data.code).send(data);
}

async function editar(req,res){
    const {participante} = req.body;
    const {id} = req.params;

    const data = await participanteService.editar(participante,id);
    res.status(data.code).send(data);
}

async function excluir(req,res){
    const {id} = req.params;

    const data = await participanteService.excluir(id);
    res.status(data.code).send(data);
}

async function inscreverAtividade(req,res){
    const {idParticipante,idAtividade} = req.body;
    const data = await participanteService.Inscrever({
        idParticipante,
        idAtividade
    });

    res.status(data.code).send(data);

}

async function cancelarInscricao(req,res){
    const {idInscricao} = req.body;

    const data = await participanteService.CancelarInscricao(idInscricao);

    res.status(data.code).send(data);

}

routes.get("/",listar);
routes.get("/:id",listarPorId);
routes.post("/",criar);
routes.post("/inscrever/",inscreverAtividade);
routes.post("/cancelarInscricao/",cancelarInscricao);
routes.put("/:id",editar);
routes.delete("/delete/:id",excluir);

export default routes;