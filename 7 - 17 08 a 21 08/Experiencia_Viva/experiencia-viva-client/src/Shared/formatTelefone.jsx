export default function formatTelefone(telefone){
    if(!telefone) return "-";
    if(telefone.length != 11) return telefone;
    const t = telefone.split("");

    const format =  `+55 ${t[0]}${t[1]} ${t[2]} ${t[3]}${t[4]}${t[5]}${t[6]} - ${t[7]}${t[8]}${t[9]}${t[10]}`
    console.log(format)
    return format
}