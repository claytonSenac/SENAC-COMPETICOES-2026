export function formatTelefone(tel){
 if(!tel) return "-";
 if(tel.length != 11) return t;

 let t = tel.split("")
 console.log(tel,tel.split(""))

 return `+55 ${t[0]}${t[1]} ${t[2]} ${t[3]}${t[4]}${t[5]}${t[6]}-${t[7]}${t[8]}${t[9]}${t[10]}`
}