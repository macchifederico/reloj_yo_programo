export class Login 
{
    id: number;
    nombre: String;
    password: String;

    constructor(id: number, nombre: String, password: String){
        this.id = id;
        this.nombre = nombre;
        this.password = password;
    }
}