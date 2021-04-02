"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Telefonos = void 0;
class Telefonos {
    constructor(tipo, numero) {
        this._tipo = tipo;
        this._numero = numero;
    }
    get tipo() {
        return this._tipo;
    }
    set tipo(value) {
        this._tipo = value;
    }
    get numero() {
        return this._numero;
    }
    set numero(value) {
        this._numero = value;
    }
    get telefonoCompleto() {
        return `${this.tipo}: ${this.numero}`;
    }
    listar() {
        console.log(`- ${this.telefonoCompleto}`);
    }
}
exports.Telefonos = Telefonos;
