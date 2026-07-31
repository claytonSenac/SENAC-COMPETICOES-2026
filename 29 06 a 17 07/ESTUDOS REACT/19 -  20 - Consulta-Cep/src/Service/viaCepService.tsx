export interface viaCepResponse{
    cep:string,
    logradouro?:string,
    complemento?:string,
    unidade?:string,
    bairro?:string,
    localidade?:string,
    uf?:string,
    estado?:string,
    regiao?:string,
    ibge?:string,
    gia?:string,
    ddd?:string,
    siafi?:string,
}

export interface ResponseBase<T> {
  success: boolean;
  data?: T;
  message:string,
}

const apiUrl = "https://viacep.com.br/ws";

export async function getCep(cep:string) : Promise<ResponseBase<viaCepResponse>>{
    try {
        const res = await fetch(`${apiUrl}/${cep}/json/`);
        if( res.status == 200){
            const data = await res.json();
            return {success:true,data: data, message: "Sucesso ao buscar CEP"}
        }else{
            return {success:false, message:"Erro ao buscar cep"}
        }
    } catch (error) {
        console.log(error)
        return {success:false,message:'Erro ao Buscar CEP'}
    }
}