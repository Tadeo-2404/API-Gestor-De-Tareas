import express from "express";
const router = express.Router();
import { obtenerTareas, agregarTarea, obtenerTarea, editarTarea, eliminarTarea } from "../controllers/TareaController.js";

router.get('/', obtenerTareas);

router.post('/', agregarTarea);

router.get('/:id', obtenerTarea);

router.put('/:id', editarTarea);

router.delete('/:id', eliminarTarea);

export default router;