"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
class Persona {
    constructor(nombre, apellidos, edad, dni, cumpleanos, colorFavorito, sexo, direcciones, mails, telefonos, notas) {
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
    get nombreCompleto() {
        return `${this._nombre} ${this.apellidos}`;
    }
    set nombre(value) {
        this._nombre = value;
    }
    get apellidos() {
        return this._apellidos;
    }
    set apellidos(value) {
        this._apellidos = value;
    }
    get edad() {
        return this._edad;
    }
    set edad(value) {
        this._edad = value;
    }
    get dni() {
        return this._dni;
    }
    set dni(value) {
        this._dni = value;
    }
    get cumple() {
        return this._cumpleanos;
    }
    set cumple(value) {
        this._cumpleanos;
    }
    get colorFav() {
        return this._colorFavorito;
    }
    set colorFav(value) {
        this._colorFavorito;
    }
    get sexo() {
        return this._sexo;
    }
    set sexo(value) {
        this._sexo = value;
    }
    get direccion() {
        return this._direcciones;
    }
    set direccion(value) {
        this._direcciones = value;
    }
    get mails() {
        return this._mails;
    }
    set mails(value) {
        this._mails = value;
    }
    get telefonos() {
        return this._telefonos;
    }
    set telefonos(value) {
        this._telefonos;
    }
    get notas() {
        return this._notas;
    }
    set notas(value) {
        this._notas = value;
    }
    imprimirPersona() {
        console.log(`-------------------------FICHA DE PERSONA--------------------------- \n`);
        console.log(`NOMBRE COMPLETO: ${this.nombreCompleto}`);
        console.log(`EDAD: ${this.edad} a??os`);
        console.log(`DNI: ${this.dni}`);
        console.log(`CUMPLEA??OS: ${this.cumple.toLocaleDateString('es-ES')}`);
        console.log(`COLOR FAVORITO: ${this.colorFav}`);
        console.log(`SEXO: ${this.sexo}`);
        console.log('DIRECCIONES:');
        //funci??n para recorrer cada posici??n del array "Direcci??n" e imprimir su valor llamando a la funci??n de su clase "listar()"
        for (let numeroDirecciones = 0; numeroDirecciones < this.direccion.length; numeroDirecciones++) {
            this.direccion[numeroDirecciones].listar();
        }
        console.log('CORREO ELECTR??NICO:');
        //funci??n para recorrer cada posici??n del array "Mails" e imprimir mediante la funci??n de su clase.
        for (let numeroMails = 0; numeroMails < this.mails.length; numeroMails++) {
            this.mails[numeroMails].listar();
        }
        console.log('TEL??FONOS:');
        //funci??n para recorrer cada posici??n del array "Tel??fonos" e imprimir mediante la funci??n de su clase.
        for (let numeroTelefonos = 0; numeroTelefonos < this.telefonos.length; numeroTelefonos++) {
            this.telefonos[numeroTelefonos].listar();
        }
        console.log(`NOTAS: ${this.notas}`);
        console.log('-------------------------------------------------------------------- \n\n');
    }
}
exports.Persona = Persona;
