import { DataTypes } from "sequelize";
import { db } from "../db";

export const Editora = db.define(
    'Editora',
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
        Cidade:{ 
            type: DataTypes.STRING(100),
            allowNull:false
        },
        Pais:{
            type:DataTypes.STRING(50),
            allowNull:false
        },
        DataFundacao:{
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

export interface EditoraInterface {
    Id?:string,
    Nome:string,
    Cidade:string,
    Pais:string,
    DataFundacao:Date,
    createdAt:Date,
    updatedAt:Date,
    deletedAt?:Date,
}