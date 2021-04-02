export class Email {
    private _tipo: string
    private _email: string

    constructor (tipo:string, email:string) {
        this._tipo = tipo
        this._email = email
    }

    public get tipoEmail() {
        return this._tipo
    }

    public get emailCompleto(){
        return `${this._tipo}: ${this._email}`
    }

    public set tipoEmail(value:string) {
        this._tipo=value
    }

    public get direccion() {
        return this._email 
    }
    public set direccion(value:string) {
        this._email=value

    }

    public listar(): void {
        console.log(`- ${this.emailCompleto}`)
    }
}