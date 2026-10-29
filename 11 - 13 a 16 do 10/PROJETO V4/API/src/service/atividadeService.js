import { Result } from "../utils/result.js";
import { db } from "../core/dbContext.js";

async function listar(qtd){
    try {

        const hoje = new Date();

        let res = [];
        if(qtd){
            res = await db.atividade.findMany({
                where:{
                    Ativo:true,
                    Data: {
                        gte:hoje
                    }
                },
                include:{
                    inscricao:{
                        where:{
                            Ativo:true,
                        },
                        include:{
                           participante:{
                                omit: {
                                    HashSenha:true
                                }
                            }
                        }
                    }
                },
                orderBy: {
                    Data: "desc"
                },
                take: parseInt(qtd)
            });
        }else{
            res = await db.atividade.findMany({
                where:{
                    Ativo:true,
                    Data: {
                        gte:hoje
                    }
                },
                include:{
                    inscricao:{
                        where:{
                            Ativo:true,
                        },
                        include:{
                            participante:{
                                omit: {
                                    HashSenha:true
                                }
                            }
                        }
                    }
                },
                orderBy: {
                    Data: "desc"
                },
            });
        }

        res.map((r)=>(
            r.dataInput = r.Data.toISOString().slice(0,10),
            r.dataFormatada = formatarData(r.Data)
        ));

        return Result.sucess(200,"sucesso", res);
    } catch (error) {
        console.log(error)
        return Result.fail(error)
    }
}

export function formatarData(data){
    const d = new Date(data);
    console.log(d)
    // console.log(d.toLocaleDateString("pt-br",{
    //     timeZone:"UTC",
    // }));
    return d.toLocaleDateString("pt-br",{
        timeZone:"UTC"
    })
}

async function criar(body){
    if(!body || !body.nome || !body.data || !body.vagas) return Result.fail("Campos incorretos", body);

    let vagas = parseInt(body.vagas);
    let data = new Date(body.data).toISOString();

    try {
        
        const res = await db.atividade.create({
            data:{
                Nome:body.nome,
                Data: data,
                Vagas: vagas,
                VagasRestantes: vagas,
                Descricao: body.descricao ?? "-",
                Horario: body.horario ?? "-"    
            }
        });


        return Result.sucess(201, "Atividade Criada", res);
    } catch (error) {
        console.log(error)
        return Result.fail(error)
    }
}

async function editar(body,id){
    if(!body  || !id || !body.nome || !body.data || !body.vagas) return Result.fail("Campos incorretos", body);

    let vagas = parseInt(body.vagas);
    let data = new Date(body.data).toISOString();

    try {
        
        const exists = await db.atividade.findFirst({
            where:{
                Id: id
            }
        });

        if(!exists) return Result.fail("Atividade não encontrada");

        let inscritos = exists.Vagas - exists.VagasRestantes;

        if(vagas < inscritos) return Result.fail("As vagas não podem ser menores que a quantidade de Inscritos!");

        const res = await db.atividade.update({
            where:{
                Id:id
            },
            data:{
                Nome:body.nome,
                Data: data,
                Vagas: vagas,
                VagasRestantes: vagas - inscritos,
                Descricao: body.descricao ?? "-",
                Horario: body.horario ?? "-"    
            }
        });

        return Result.sucess(200, "Atividade Editada", res);
    } catch (error) {
        console.log(error)
        return Result.fail(error)
    }
}

async function excluir(id){
    if(!id) return Result.fail("Campos incorretos", body);

    try {
        const hoje = new Date().toISOString();

        const exists = await db.atividade.findFirst({
            where:{
                Id: id
            },
            include:{
                inscricao:{
                    where:{
                        Ativo:true
                    }
                }
            }
        });

        if(!exists) return Result.fail("Atividade não encontrada");

        console.log(exists.Data.toISOString(), hoje, hoje > exists.Data.toISOString());

        if(hoje <= exists.Data.toISOString() && exists.inscricao.length > 0) return Result.fail("A atividade tem inscritos, não e possivel excluir ela");

        await db.atividade.update({
            data:{
                Ativo:false
            },
            where:{
                Id:id
            }
        });

        return Result.sucess(200, "Atividade Excluida");
    } catch (error) {
        console.log(error)
        return Result.fail(error)
    }
}

async function listarDisponiveis(idParticipante){
    if(!idParticipante) return Result.fail("Sem id do participante");
    try {

        const res = await db.atividade.findMany({
            where:{
                Ativo:true,
                Data:{
                    gte: new Date()
                },
                inscricao:{
                    none:{
                        IdParticipante:idParticipante,
                        Ativo:true
                    },
                    
                }
            }
        });

        
        res.map((r)=>(
            r.dataInput = r.Data.toISOString().slice(0,10),
            r.dataFormatada = formatarData(r.Data)
        ));

        return Result.sucess(200,"sucesso", res)
    } catch (error) {
        console.log(error);
        return Result.fail(error)
    }
}

async function buscarComMenorAderencia(){
    try {
        let res = await db.vw_atividade_menor_aderencia.findFirst({
            where:{
                Data: {
                    gte: new Date()
                }
            }
        });
        res.dataInput = res.Data.toISOString().slice(0,10)

        res.totalInscritos = Number(res.totalInscritos)
        res.dataFormatada =   formatarData(res.Data)
        return Result.sucess(200, "buscado", res)
    } catch (error) {
        console.log(error);
        return Result.fail(error)
    }
}

export const atividadeService = {
    listar,criar,editar,excluir,listarDisponiveis,buscarComMenorAderencia
}