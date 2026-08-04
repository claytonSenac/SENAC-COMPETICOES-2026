import { DataTypes } from "sequelize";
import { db } from "../db";

export const Genero = db.define(
    'Genero',
    {
        Id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull:false,
            primaryKey:true
        },
        Nome:{
            type: DataTypes.STRING(120),
            allowNull:false,
            unique:true,
        }
    },
    {
        timestamps:true,
        paranoid:true,
        deletedAt:'deletedAt'
    }
);

export interface GeneroInterface{
    Id?:string,
    Nome:string,
    createdAt?:Date,
    updatedAt?:Date,
    deletedAt?:Date,
}

