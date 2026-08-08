export default function formatIso(d){
    const date = new Date(d);
    return date.toLocaleString()
}