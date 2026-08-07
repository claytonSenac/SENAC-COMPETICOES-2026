import { Router } from "express";
import { eventoService } from "../Services/EventoService.js";

const router = Router();

async function listarEventos(req,res){
    try {
        const data = await eventoService.listarEventos();
        res.status(data.code).json(data);
    } catch (error) {
        console.log(error)
        res.status(500).json(error);
    }
}
async function listarEventoPorId(req,res){
    try {
        const {id} = req.params;
        const data = await eventoService.listarEventoPorId(id);
        res.status(data.code).json(data);
    } catch (error) {
        console.log(error)
        res.status(500).json(error);
    }
}

async function excluirEvento(req,res){
    try {
        const {id} = req.params;
        const data = await eventoService.excluirEvento(id);
        res.status(data.code).json(data);
    } catch (error) {
        console.log(error)
        res.status(500).json(error);
    }
}

async function criarEvento(req,res){
    try {
        const {evento} = req.body;

        const data = await eventoService.criarEvento(evento);
        res.status(data.code).json(data);
    } catch (error) {
        console.log(error)
        res.status(500).json(error);
    }
}

async function editarEvento(req,res){
    try {
        const {evento} = req.body;
        const {id} = req.params;

        const data = await eventoService.editarEvento(id,evento);
        res.status(data.code).json(data);
    } catch (error) {
        console.log(error)
        res.status(500).json(error);
    }
}

router.get('/',listarEventos);
router.get('/:id',listarEventoPorId);
router.post('/',criarEvento);
router.put('/:id',editarEvento);
router.delete('/:id',excluirEvento);

export default router;