import { DataTypes } from "sequelize";
import { db } from "../db";

export const Livro = db.define(
    'Livro',
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
        ISBN:{
            type:DataTypes.STRING(13),
            allowNull:false
        },
        NumPaginas:{
            type:DataTypes.INTEGER,
            allowNull:false,
            defaultValue:1,
        },
        Volume:{
            type:DataTypes.TINYINT.UNSIGNED,
            allowNull:true, 

        },
        Colecao:{
            type:DataTypes.STRING(100),
            allowNull:true
        },
        Edicao:{
            type:DataTypes.STRING(100),
            allowNull:false
        },
        DataLancamento:{
            type: DataTypes.DATE,
            allowNull:false
        }
    },
    {
        timestamps:true,
        paranoid:true,
        deletedAt:'deletedAt'
    }
);

export interface LivroInterface {
    Id?:string,
    Nome:string,
    ISBN:string,
    NumPaginas:Number,
    Volume: Number,
    Colecao:string,
    Edicao:string,
    IdGenero:string,
    IdAutor:string,
    IdEditora:string,
    DataLançamento:Date,
    createdAt:Date,
    updatedAt:Date,
    deletedAt?:Date,
}