import { type Cliente } from "../../Types/Cliente";

let clientes: Cliente[] = [];

 function criarCliente(c:Cliente){
    clientes.push(c);
    console.log(clientes)
    return c;
}

function listarClientes(){
    return clientes;
}

export const ClienteService = {
    criarCliente,
    listarClientes
}