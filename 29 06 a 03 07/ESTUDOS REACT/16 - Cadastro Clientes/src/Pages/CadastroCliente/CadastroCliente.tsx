import { useEffect, useState } from "react";
import type { Cliente } from "../Types/Cliente";
import ClienteForm from "./Components/ClienteForm/ClienteForm";
import { ClienteService } from "./Service/ClienteService";
import { ClienteList } from "./Components/ClienteList/ClienteList";


export function CadastroCliente(){

    const [clientes,setClientes] = useState<Cliente[]>([]);

    function adicionarCliente(event:Cliente){
        const res = ClienteService.criarCliente(event);
        setClientes((prev)=> ([...prev,res]));
    }

    function getClientes(){
        const res = ClienteService.listarClientes();
        setClientes([...res])
    }

    useEffect(() => {
      getClientes()
    },[])

    return (
        <>
            <h1>CADASTRO CLIENTE</h1>
            <ClienteForm onAdd={(adicionarCliente)} />
            <ClienteList clientes={clientes ?? []}/>
        </>
    )
}