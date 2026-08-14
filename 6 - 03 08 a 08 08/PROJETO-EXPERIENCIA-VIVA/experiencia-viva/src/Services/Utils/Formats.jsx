export function formatarData(data) {
    if (!data) return "-";

    const date = new Date(data);

    if (Number.isNaN(date.getTime())) {
        return "-";
    }

    return date.toLocaleString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    });
}

export function formatarTelefone(t){
    if(!t) return "-";
    if(t.length != 11) return t;
    let format = "+55 XX X XXXX-XXXX";

    return `+55 ${t[0]}${t[1]} ${t[2]} ${t[3]}${t[4]}${t[5]}${t[6]}-${t[7]}${t[8]}${t[9]}${t[10]}`

}

export function formatarParaInput(data) {
    if (!data) return "";

    const date = new Date(data);

    if (Number.isNaN(date.getTime())) {
        return "";
    }

    const ano = date.getFullYear();
    const mes = String(date.getMonth() + 1).padStart(2, "0");
    const dia = String(date.getDate()).padStart(2, "0");
    const hora = String(date.getHours()).padStart(2, "0");
    const minuto = String(date.getMinutes()).padStart(2, "0");

    return `${ano}-${mes}-${dia}T${hora}:${minuto}`;
}