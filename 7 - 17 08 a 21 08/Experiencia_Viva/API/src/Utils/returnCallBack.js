export function ResError(code, message){
    return {code,message}
}

export function ResSucess(code,message,data){
    return {code,message, data}
}
