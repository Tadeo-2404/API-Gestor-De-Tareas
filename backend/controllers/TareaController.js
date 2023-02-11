import Tarea from '../models/Tarea.js'; //importing Model Tarea

//get all tasks
const obtenerTareas = (req, res) => {
    res.json({msg: 'obteniendo tareas'});
}

//create task
const agregarTarea = async (req, res) => {
    const tarea = new Tarea(req.body); //reading user input
    const {titulo , descripcion, fecha_de_entrega, responsable} = tarea; //destructing to validate

    //validation
    if(!titulo || !descripcion || !fecha_de_entrega) {
        const error = new Error("All fields are requiered");
        res.status(400).json({msg: error.message});
        return;
    }

    //validation
    if(!responsable) {
        const error = new Error("responsanble missing");
        res.status(400).json({msg: error.message});
        return;
    }

    try {
        const creado = await tarea.save(); //save in db
        res.json(creado);
    } catch (e) {
        console.log(e);
    }
}

//getting a task
const obtenerTarea = async (req, res) => {
    const {id} = req.params; //read item id from url
    const {responsable} = req.body; //get value from localstorage

    const tarea = await Tarea.findOne({
        where: {
              id: id, //where the id is the same
              responsable: responsable //so is the name
          }
        }); //search in db

    //validation tarea not found
    if(!tarea) {
        const error = new Error("item not found");
        res.status(400).json({msg: error.message});
    }

    //validation responsable not found
    if(!responsable) {
        const error = new Error("responsanble missing");
        res.status(400).json({msg: error.message});
        return;
    }

    if(tarea.responsable !== responsable) {
        const error = new Error("this item is not yours");
        res.status(400).json({msg: error.message});
        return;
    }

    res.json({tarea});
}

//editing a task
const editarTarea = async (req, res) => {
    const {id} = req.params; //read item id from url
    const {titulo, descripcion, fecha_de_entrega, completado, comentarios, responsable} = req.body; //get value from user input
    
    const tarea = await Tarea.findOne({
        where: {
              id: id, //where the id is the same
              responsable: responsable //so is the name
          }
    }); //search in db

    //validation tarea not found
    if(!tarea) {
        const error = new Error("item not found");
        res.status(400).json({msg: error.message});
    }

    //validation responsable not found
    if(!responsable) {
        const error = new Error("responsanble missing");
        res.status(400).json({msg: error.message});
        return;
    }

    //check if any changes were made, if so then update the values 
    titulo ? tarea.titulo = titulo : tarea.titulo = tarea.titulo
    descripcion ? tarea.descripcion = descripcion : tarea.descripcion = tarea.descripcion
    completado ? tarea.completado = completado : tarea.completado = tarea.completado
    fecha_de_entrega ? tarea.fecha_de_entrega = fecha_de_entrega : tarea.fecha_de_entrega = tarea.fecha_de_entrega
    comentarios ? tarea.comentarios = comentarios : tarea.comentarios = tarea.comentarios

    try {
        const actualizado = await tarea.save(); //saving the changes
        res.json(actualizado);
    } catch (e) {
        const error = new Error("item could not be updated");
        res.status(400).json({msg: error.message});
    }
}

//deleting a task
const eliminarTarea = (req, res) => {
    const {id} = req.params;
    res.json({msg: `borrando tarea: ${id}`});
}

export {
    obtenerTareas,
    agregarTarea,
    obtenerTarea,
    editarTarea, 
    eliminarTarea
}