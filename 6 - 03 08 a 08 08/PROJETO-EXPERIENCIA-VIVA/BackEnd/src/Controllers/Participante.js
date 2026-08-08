import { Router } from "express";
import { participanteService } from "../Services/ParticipanteService.js";

const router = Router();

async function criarParticipante(req,res){
    try {
        const {participante} = req.body;

        const data = await participanteService.criarParticipante(participante);

        res.status(data.code).json(data)
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
}

async function editarParticipante(req,res){
    const {participante} = req.body;
    const {id} = req.params
    const data = await participanteService.editarParticipante(id,participante)
    
    res.status(data.code).send(data);
}

async function excluirParticipante(req,res){
    const {id} = req.params
    const data = await participanteService.excluirParticipante(id)
    
    res.status(data.code).send(data);
}

async function listarParticipantePorId(req,res){
    const {id} = req.params
    const data = await participanteService.listarParticipantePorId(id)
    
    res.status(data.code).send(data);
}

async function listarParticipantes(req,res){
    const data = await participanteService.listarParticipantes()
    
    res.status(data.code).send(data);
}



router.post('/',criarParticipante)
router.put('/:id',editarParticipante)
router.delete('/:id',excluirParticipante)
router.get('/',listarParticipantes)
router.get('/:id',listarParticipantePorId)
export default router;