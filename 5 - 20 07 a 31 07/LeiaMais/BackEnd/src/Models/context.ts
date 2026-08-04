import { Autor } from "./Entities/Autor";
import { Editora } from "./Entities/Editora";
import { Genero } from "./Entities/Genero";
import { Livro } from "./Entities/Livro";

import '../Services/GeneroService'


async function syncData(){
    try {

        Genero.hasMany(Livro, {foreignKey: "IdGenero"});
        Livro.belongsTo(Genero, {foreignKey: "IdGenero"});

        Autor.hasMany(Livro, {foreignKey: "IdAutor"});
        Livro.belongsTo(Autor, {foreignKey: "IdAutor"});

        Editora.hasMany(Livro, {foreignKey: "IdEditora"});
        Livro.belongsTo(Editora, {foreignKey: "IdEditora"});

        await Editora.sync({force:false}); 
        await Genero.sync({force:false});
        await Autor.sync({force:false});
        await Livro.sync({force:false});

        console.log('tabelas ok')
    } catch (error) {
        console.error(error);
        process.exit(-1);
    }
}

await syncData();