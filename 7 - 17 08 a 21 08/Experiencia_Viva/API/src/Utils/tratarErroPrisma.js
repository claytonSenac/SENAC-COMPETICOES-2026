export default function tratarErro(err){
    if(!err) return "";
    let texto = '';
    switch (err) {
        case 'P2002':
            texto = "Este campo é unico"
            break;
    
        default:
            texto = ""
            break;
    }
    return texto;
}