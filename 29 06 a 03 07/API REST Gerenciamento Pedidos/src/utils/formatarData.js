export function formatarData(d){
    try{
        const data = new Date(d);
        
        const format = `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()} as ${data.getHours()}:${data.getMinutes()}`
        return format;
    }
    catch{
        return d;
    }
}