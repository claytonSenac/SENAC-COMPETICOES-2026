export function formatDate(d){
 if(!d) return "-";

 const date = new Date(d);
 return date.toLocaleString("pt-br")
}