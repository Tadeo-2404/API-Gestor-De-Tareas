import { Sequelize } from 'sequelize';
import db from '../config/db.js';

export const Tarea = db.define('tarea', {
    titulo: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    descripcion: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    completado: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    fecha_de_entrega: {
        type: Sequelize.DATEONLY,
        allowNull: false,
    },
    comentarios: {
        type: Sequelize.STRING,
        defaultValue: null
    },
    responsable: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    timestamps: true,
    updatedAt: false,
    createdAt: false,
});
