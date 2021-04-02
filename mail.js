"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Email = void 0;
class Email {
    constructor(tipo, email) {
        this._tipo = tipo;
        this._email = email;
    }
    get tipoEmail() {
        return this._tipo;
    }
    get emailCompleto() {
        return `${this._tipo}: ${this._email}`;
    }
    set tipoEmail(value) {
        this._tipo = value;
    }
    get direccion() {
        return this._email;
    }
    set direccion(value) {
        this._email = value;
    }
    listar() {
        console.log(`- ${this.emailCompleto}`);
    }
}
exports.Email = Email;
