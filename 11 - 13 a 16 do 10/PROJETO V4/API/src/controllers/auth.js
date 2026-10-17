import { authService } from "../service/authService.js";
import { Router } from "express";

const r = Router();

r.post("/login/admin", async (req,res) => {
  const {data} = req.body;
  const result = await authService.loginAdmin(data);
  
  res.status(result.code).json(result);
});


r.post("/login/participante", async (req,res) => {
  const {data} = req.body;
  const result = await authService.loginParticipante(data);
  
  res.status(result.code).json(result);
});

export default r;
