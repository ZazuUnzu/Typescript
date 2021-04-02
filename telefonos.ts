export class Telefonos {
    private _tipo: string
    private _numero: number

    constructor (tipo: string, numero: number) {
        this._tipo = tipo
        this._numero = numero
    }

    public get tipo(): string {
        return this._tipo
    }

    public set tipo(value: string) {
        this._tipo = value
    }

    public get numero(): number {
        return this._numero
    }

    public set numero(value: number) {
        this._numero = value
    }

    public get telefonoCompleto() {
        return `${this.tipo}: ${this.numero}`
    }

    public listar (): void { //Función para imprimir el string que incluye el tipo y el número de cada registro teléfono.
        console.log (`- ${this.telefonoCompleto}`)
    }
}