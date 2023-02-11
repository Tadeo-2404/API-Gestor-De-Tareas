const obtenerTareas = (req, res) => {
    res.json({msg: 'obteniendo tareas'});
}

const agregarTarea = (req, res) => {
    res.json({msg: 'agregando tarea'});
}

const obtenerTarea = (req, res) => {
    const {id} = req.params;
    res.json({msg: `obteniendo tarea: ${id}` });
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