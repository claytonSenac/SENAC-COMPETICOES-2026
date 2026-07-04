export class ResponseBase{
    constructor(sucess,message,data = null){
        this.sucess = sucess;
        this.message = message;
        this.data = data;
    }
};