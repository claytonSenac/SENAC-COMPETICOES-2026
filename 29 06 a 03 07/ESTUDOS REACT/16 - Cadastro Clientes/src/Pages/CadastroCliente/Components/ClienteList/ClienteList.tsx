import type { Cliente } from "../../../Types/Cliente";
import '../../Styles/clienteList.css';

interface ClienteListProps{
    clientes: Cliente[];
}
export function ClienteList(props:ClienteListProps){
    return (
        <>
        <div className="clienteList">
            {props.clientes.length > 0 && (
                <> 
                    {props.clientes.map((c:Cliente)=> (
                        <>
                            <div className="cliente">
                                <h3>Nome:</h3>
                                <p>{c.nome}</p>

                                <h3>CPF:</h3>
                                <p>{c.cpf}</p>
                                
                                <h3>Cidade:</h3>
                                <p>{c.cidade}</p>

                                <h3>Telefone:</h3>
                                <p>{c.telefone}</p>
                            </div>
                        </>
                    ))}
                </>
            )}
        </div>
        </>
    )
}