import { DataTypes } from "sequelize";
import { db } from "../db";

export const Autor = db.define(
    'Autor',
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
        },
        Nacionalidade:{
            type:DataTypes.STRING(50),
            allowNull:false
        },
        DataNascimento:{
            type: DataTypes.DATE,
            allowNull:false
        },
    },
    {
        timestamps:true,
        paranoid:true,
        deletedAt:'deletedAt'
    }
);

export interface AutorInterface{
    Id?:string,
    Nome:string,
    Nacionalidade:string,
    DataNascimento:Date,
    createdAt:Date,
    updatedAt:Date,
    deletedAt?:Date,
}

