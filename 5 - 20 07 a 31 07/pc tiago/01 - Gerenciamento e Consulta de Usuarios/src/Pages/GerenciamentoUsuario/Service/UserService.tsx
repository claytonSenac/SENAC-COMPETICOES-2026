import type { CreateUserForm } from "../Components/FormUsers/FormUsers";
import type { User } from "../Types/User";
import constants from "./constants";

let users: User[] = [];

interface ResponseBase{
    sucess:boolean,
    message:string,
    data?:User[]
}

async function getUsers(): Promise<ResponseBase>{
    const res = await fetch(constants.API_USER_URL);

    const data = await res.json();

    data.forEach((element:any) => {
        element.openDetail = false
    });

    if(users.length > 0){
        return {sucess:true,message: "Sucesso ao buscar", data: users}
    }else{
        users = data;
        return {sucess:true,message: "Sucesso ao buscar", data: users}
    }
}

 function createUser(u:CreateUserForm){
    if(users.find(user => user.username == u.username )){
        return {sucesss:false, message: "Username ja existente!"}
    }

    if(users.find(user => user.email == u.email )){
        return {sucesss:false, message: "Email ja existente!"}
    }

    const usuario :User = {
        name: u.nome,
        email: u.email,
        phone: u.telefone,
        address: {
            city: u.cidade,
        },
        openDetail:false,
        id: new Date().getTime(),
        username: u.username
    } 

    users = [usuario, ...users];

    return {sucess:true,message: "Sucesso ao criar usuario", data: users}
}

function toggleDetails(idUsuario: number) {
  users = users.map(user =>
    user.id === idUsuario
      ? { ...user, openDetail: !user.openDetail }
      : user
  );

  return {
    sucess: true,
    message: "",
    data: users
  };
}

function editUser(newUser: CreateUserForm, idUsuario: number) {
    const usuario :User = {
        name: newUser.nome,
        email: newUser.email,
        phone: newUser.telefone,
        address: {
            city: newUser.cidade,
        },
        openDetail:false,
        id: idUsuario,
        username: newUser.username
    } 

    users = users.map(user =>
    user.id === idUsuario
      ? { ...user, ...usuario }
      : user
  );

  return {
    success: true,
    message: "",
    data: users
  };
}

function deleteUser(idUsuario: number) {
  const usuarioExiste = users.some(user => user.id === idUsuario);

  if (!usuarioExiste) {
    return {
      success: false,
      message: "Usuário não encontrado.",
      data: users
    };
  }

  users = users.filter(user => user.id !== idUsuario);

  return {
    success: true,
    message: "Usuário removido com sucesso.",
    data: users
  };
}



const userService = {
    getUsers,
    createUser,
    toggleDetails,
    editUser,
    deleteUser
}

export default userService;