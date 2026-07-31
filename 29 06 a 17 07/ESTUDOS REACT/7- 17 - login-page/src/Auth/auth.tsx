export function logged():boolean{
    const autenticado = localStorage.getItem('autenticado');
    return (autenticado === "true");
}

export function login(user:{email:string;password:string}):boolean{
    if(user.email == "teste@gmail.com" && user.password == '1234'){
        return true
    }
    return false;
}

export function setAutenticated(){
    localStorage.setItem('autenticado',JSON.stringify(true));
    return;
}

export function logout(){
        localStorage.setItem('autenticado',JSON.stringify(false));

        window.location.href = '/login'
        return
}