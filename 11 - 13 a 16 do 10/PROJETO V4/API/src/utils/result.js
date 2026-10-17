function sucess(code = 200, text = "sucesso", data = null){
    return ({code,text,data});
}

function fail(text = 'erro', data = null){
    return ({code : 400, text,data})
}

export const Result = {
    sucess,
    fail
}