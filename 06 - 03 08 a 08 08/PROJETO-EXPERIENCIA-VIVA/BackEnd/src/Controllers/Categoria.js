import { Router } from "express";
import { categoriaService } from "../Services/CategoriaService.js";

const router = Router();

export async function  listarCategorias(req,res){
    try {
        const data = await categoriaService.listarCategorias();

        res.status(data.code).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}

export async function  listarCategoriaPorId(req,res){
    try {
        const {id} = req.params;

        const data = await categoriaService.listarCategoriasPorId(id);

        res.status(data.code).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}

export async function  excluirCategoria(req,res){
    try {
        const {id} = req.params;

        const data = await categoriaService.excluirCategoria(id);

        res.status(data.code).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}

export async function criarCategoria(req,res){
    try {
        const {categoria} = req.body;

        const data = await categoriaService.criarCategoria(categoria);

        res.status(data.code).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }  
}

export async function editarCategoria(req,res){
    try {
        const {categoria} = req.body;
        const {id} = req.params;

        const data = await categoriaService.editarCategoria(id,categoria);

        res.status(data.code).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }  
}

router.get('/',listarCategorias);
router.get('/:id',listarCategoriaPorId);
router.post('/',criarCategoria);
router.put('/:id',editarCategoria);
router.delete('/:id',excluirCategoria);

export default router;