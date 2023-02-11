import { DataTypes } from 'sequelize';
import db from '../config/db.js';

export const Usuario = db.define('usuario', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: true,
    updatedAt: false,
    createdAt: false,
});
