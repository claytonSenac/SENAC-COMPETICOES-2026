export class ResponseBase<T>{
    public sucess = false;
    public message = "";
    public data?: T | null = null;

    constructor(sucess:boolean,message:string,data?:T){
        this.sucess = sucess;
        this.message = message;
        this.data = data || null;
    }
}