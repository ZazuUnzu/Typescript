"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Direccion = void 0;
class Direccion {
    constructor(calle, numero, piso, letra, cpostal, poblacion, provincia) {
        this._calle = calle;
        this._numero = numero;
        this._piso = piso;
        this._letra = letra;
        this._cp = cpostal;
        this._poblacion = poblacion;
        this._provincia = provincia;
    }
    get calle() {
        return this._calle;
    }
    set calle(value) {
        this._calle = value;
    }
    get numero() {
        return this._numero;
    }
    set numero(value) {
        this._numero = value;
    }
    get piso() {
        return this._piso;
    }
    set piso(value) {
        this._piso = value;
    }
    get letra() {
        return this._letra;
    }
    set letra(value) {
        this._letra = value;
    }
    get cpostal() {
        return this._cp;
    }
    set cpostal(value) {
        this._cp = value;
    }
    get poblacion() {
        return this._poblacion;
    }
    set poblacion(value) {
        this._poblacion = value;
    }
    get provincia() {
        return this._provincia;
    }
    set provincia(value) {
        this._provincia = value;
    }
    listar() {
        console.log(`- ${this.calle}, ${this.numero}. Piso ${this.piso}-${this.letra}. ${this.cpostal} ${this.poblacion} (${this.provincia})`);
    }
}
exports.Direccion = Direccion;
