import { Router } from "express";
import { participanteService } from "../Services/ParticipanteService.js";

const router = Router();

async function criarParticipante(req,res){
    try {
        const {participante} = req.body;

        const data = await participanteService.criarParticipante(participante);
        console.log(data)
        res.status(data.code).json(data)
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
}


router.post('/',criarParticipante)
export default router;