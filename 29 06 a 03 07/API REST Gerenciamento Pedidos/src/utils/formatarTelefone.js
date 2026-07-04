export function formatarTelefone(t){
    t = t.split('');
    let format = "XX X XXXX-XXXX";
    if(t.length < 11) return t;

    t.forEach((element,index) => {
        //console.log(t[index]);
        format = format.replace('X',element);
    });
    return "+55 " + format;
}