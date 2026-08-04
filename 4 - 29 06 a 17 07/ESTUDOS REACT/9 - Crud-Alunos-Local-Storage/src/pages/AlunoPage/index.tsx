import { useState, useEffect } from "react";
import { addAluno, getAlunos } from "./services/alunoService";
import type { Aluno } from "./types/Aluno";
import { ListAlunos } from "./component/listAlunos";
import "./styles/alunoPage.css"
import { FormAluno } from "./component/formAluno";

export function AlunoPage(){

    const [alunos,setAlunos] = useState<Aluno[] | null>();

    useEffect(() => {
        const data = getAlunos();
        setAlunos(data);
    },[]);

    function handleAddAluno(event:any){
        const data = addAluno(event);
        setAlunos(data);
        console.log(data,event)
    }

    return (
        <>
            <section className="alunoPage">
                <h1>ALUNOS</h1>
                <FormAluno onAdd={handleAddAluno}/>
                <ListAlunos 
                    alunos={ alunos ?? [] } 
                />
            </section>
        </>
    )
}