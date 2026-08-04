import { useEffect } from "react";
import type { Aluno } from "../types/Aluno";
import "../styles/listAlunos.css"

export interface ListAlunosProps {
    alunos: Aluno[];
}

export function ListAlunos(props:ListAlunosProps){

    useEffect(() => {
        console.log(props)
    },[]);
    
    return(
        <>
            <div className="listAlunos">
                <h2>Lista de Alunos</h2>

                { props.alunos != null && 
                    <>
                        <section className="containerAlunos">
                            {props.alunos.map((aluno) => (
                                <div className="aluno">
                                    <section>
                                        <h3>Nome:</h3>
                                        <p>{aluno.nome}</p>
                                    </section>
                                    <section>
                                        <h3>Email:</h3>
                                        <p>{aluno.email}</p>
                                    </section>
                                    <section>
                                        <h3>Sala:</h3>
                                        <p>{aluno.sala}</p>
                                    </section>
                                    <section>
                                        <h3>Idade:</h3>
                                        <p>{aluno.idade} anos</p>
                                    </section>
                                </div>
                            ))}
                        </section>
                    </>
                }
                { props.alunos.length == 0 && 
                    <>
                    <h2>NENHUM ALUNO CADASTRADO</h2>
                    </>}
            </div>
        </>
    )
}