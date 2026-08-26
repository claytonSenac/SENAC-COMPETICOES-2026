export default function formatDateIso(d){
    if(!d) return "-";

    const date = new Date(d);
    return date.toLocaleString();
}