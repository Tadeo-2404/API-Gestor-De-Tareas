import Tarea from '../models/Tarea.js'; //importing Model Tarea

//get all tasks
const obtenerTareas = (req, res) => {
    res.json({msg: 'obteniendo tareas'});
}

//create task
const agregarTarea = async (req, res) => {
    const tarea = new Tarea(req.body); //reading user input
    const responsable = localStorage.getItem("responsable"); //get value from localstorage
    tarea.responsable = responsable; //assing value to variable
    const {titulo , descripcion, fecha_de_entrega} = tarea; //destructing to validate

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

const obtenerTarea = async (req, res) => {
    const {id} = req.params; //read item id from url
    const responsable = localStorage.getItem("responsable"); //get value from localstorage
    
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

const editarTarea = (req, res) => {
    const {id} = req.params;
    res.json({msg: `editando tarea: ${id}`});
}

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