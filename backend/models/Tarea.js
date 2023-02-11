import { DataTypes } from 'sequelize';
import db from '../config/db.js';

export const Tarea = db.define('tarea', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    completado: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    fecha_de_entrega: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    comentarios: {
        type: DataTypes.STRING,
    },
    responsable: {
        type: DataTypes.INTEGER,
        references: 'usuario',
        referencesKey: 'id',
    }
}, {
    timestamps: true,
    updatedAt: false,
    createdAt: false,
});
