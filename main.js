"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const direcciones_1 = require("./direcciones");
const telefonos_1 = require("./telefonos");
const mail_1 = require("./mail");
const persona_1 = require("./persona");
let persona1 = new persona_1.Persona('Arantxa', 'Unzueta Niño', 50, '00011122F', new Date(5 / 11 / 1970), 'Azul', 'Mujer', [new direcciones_1.Direccion('Alcalá', '50', 'Bajo', 'B', 28001, 'Madrid', 'Madrid'), new direcciones_1.Direccion('Orense', '20', '2', 'Oficina 10', 28020, 'Madrid', 'Madrid')], [new mail_1.Email('Personal', 'correopersonal@gmail.com'), new mail_1.Email('Profesional', 'correolaboral@empresa.com')], [new telefonos_1.Telefonos('Móvil', 678999999), new telefonos_1.Telefonos('Fijo', 912345789)], 'Es alumna del curso "Desarrollo Full Stack, Grupo 4');
let persona2 = new persona_1.Persona('Aitana', 'Pérez Gómez', 40, '45678907G', new Date(9 / 11 / 1980), 'Verde', 'Mujer', [new direcciones_1.Direccion('Nicolás Salmerón', 's/n', 'Local', 'B', 28066, 'Madrid', 'Madrid')], [new mail_1.Email('Trabajo', 'micorreo@aitana.com')], [new telefonos_1.Telefonos('Móvil', 612345676), new telefonos_1.Telefonos('Fijo', 912456780)], 'Lorem ipsum dolor sit amet.');
let persona3 = new persona_1.Persona('Peppa', 'Pig', 5, 'Desconocido', new Date(28 / 11 / 2004), 'Rojo', 'Mujer', [new direcciones_1.Direccion('Montaña verde', 's/n', 'Casa', 'Sin letra', 2345678, 'Pueblo de Peppa Pig', 'Provincia Familia Pig,')], [new mail_1.Email('Personal', 'familiapig@gmail.com')], [new telefonos_1.Telefonos('Casa', 0o1234567)], 'La familia Pig es una familia de dibujos animados.');
persona1.imprimirPersona();
persona2.imprimirPersona();
persona3.imprimirPersona();
let listaPersonas = [persona1, persona2, persona3]; // Declaramos e inicializamos el array de personas con los registros
let personaBuscar;
for (let i in listaPersonas) { //Iteración para recorrer y buscar un DNI concreto en el array ListaPersonas, agregando una nueva dirección, teléfono y mail.
    if (listaPersonas[i].dni == '00011122F') {
        personaBuscar = listaPersonas[i];
        personaBuscar.direccion.push(new direcciones_1.Direccion('Nueva calle', '20', 'Bajo', 'B', 20000, 'Nuevapoblación', 'Nuevaprovincia'));
        personaBuscar.mails.push(new mail_1.Email('personal', 'nuevoemail@mail.com'));
        personaBuscar.telefonos.push(new telefonos_1.Telefonos('Oficina', 345678901));
        break;
    }
}
console.log(`============================================================================\n
IMPRIMIR DE NUEVO LOS 3 REGISTROS CON LOS CAMBIOS REALIZADOS \n
============================================================================\n\n`);
persona1.imprimirPersona();
persona2.imprimirPersona();
persona3.imprimirPersona();
//console.log(listaPersonas[0])
