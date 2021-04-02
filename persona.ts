import {Direccion} from './direcciones'
import {Telefonos} from './telefonos'
import {Email} from './mail'

export class Persona {
    private _nombre: string
    private _apellidos: string
    private _edad: number
    private _dni: string
    private _cumpleanos: Date // Date es un interfaz convencional que almacena en formato aaaa/mm/dd (creo)
    private _colorFavorito: string
    private _sexo: string
    private _direcciones: Array<Direccion>
    private _mails: Array<Email>
    private _telefonos: Array<Telefonos>
    private _notas: string

    constructor(nombre: string, apellidos: string, edad: number, dni: string, cumpleanos: Date, colorFavorito: string, sexo: string, direcciones: Direccion[], mails: Email[], telefonos: Telefonos[], notas: string) {
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._edad = edad;
        this._dni = dni;
        this._cumpleanos = cumpleanos;
        this._colorFavorito = colorFavorito;
        this._sexo = sexo;
        this._direcciones = direcciones;
        this._mails = mails;
        this._telefonos = telefonos;
        this._notas = notas;
    }

    public get nombreCompleto() {
        return `${this._nombre} ${this.apellidos}`
    } 

    public set nombre(value:string) {
        this._nombre = value
    }

    public get apellidos() {
        return this._apellidos
    }
    public set apellidos(value: string) {
        this._apellidos=value
    }

    public get edad() {
        return this._edad
    }
    
    public set edad(value:number){
        this._edad=value
    }

    public get dni(){
        return this._dni
    }

    public set dni(value:string) {
        this._dni=value;

    }

    public get cumple() {
        return this._cumpleanos
    }
    public set cumple(value:Date){
        this._cumpleanos
    }

    public get colorFav(){
        return this._colorFavorito
    }
    public set colorFav(value:string) {
        this._colorFavorito
    }

    public get sexo() {
        return this._sexo
    }

    public set sexo(value:string) {
        this._sexo=value
    }

    public get direccion() {
        return this._direcciones
    }

    public set direccion(value:Array<Direccion>) {
        this._direcciones = value
    }

    public get mails() {
        return this._mails
    }

    public set mails(value:Array<Email>) {
        this._mails= value
    }

    public get telefonos() {
        return this._telefonos
    }

    public set telefonos(value:Array<Telefonos>) {
        this._telefonos
    }

    public get notas() {
        return this._notas
    }

    public set notas(value:string) {
        this._notas=value
    }

    public imprimirPersona():void {
        console.log(`-------------------------FICHA DE PERSONA--------------------------- \n`)
        console.log(`NOMBRE COMPLETO: ${this.nombreCompleto}`)
        console.log(`EDAD: ${this.edad} años`)
        console.log(`DNI: ${this.dni}`)
        console.log(`CUMPLEAÑOS: ${this.cumple.toLocaleDateString('es-ES')}`)
        console.log(`COLOR FAVORITO: ${this.colorFav}`)
        console.log(`SEXO: ${this.sexo}`)
        console.log('DIRECCIONES:')
        //función para recorrer cada posición del array "Dirección" e imprimir su valor llamando a la función de su clase "listar()"
        for (let numeroDirecciones=0; numeroDirecciones<this.direccion.length; numeroDirecciones++) {
           this.direccion[numeroDirecciones].listar()
        }
        console.log('CORREO ELECTRÓNICO:')
        //función para recorrer cada posición del array "Mails" e imprimir mediante la función de su clase.
        for (let numeroMails=0; numeroMails<this.mails.length; numeroMails++) {
            this.mails[numeroMails].listar()
        }

        console.log('TELÉFONOS:')
        //función para recorrer cada posición del array "Teléfonos" e imprimir mediante la función de su clase.
        for (let numeroTelefonos=0; numeroTelefonos<this.telefonos.length; numeroTelefonos++) {
            this.telefonos[numeroTelefonos].listar()
        }

        console.log(`NOTAS: ${this.notas}`)
        console.log('-------------------------------------------------------------------- \n\n')

    }

}