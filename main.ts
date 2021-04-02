import {Direccion} from './direcciones'
import {Telefonos} from './telefonos'
import {Email} from './mail'
import {Persona} from './persona'


let persona1 = new Persona ('Arantxa', 'Unzueta Niño', 50, '00011122F', new Date(5/11/1970), 'Azul', 'Mujer', 
        [new Direccion('Alcalá','50','Bajo','B',28001,'Madrid','Madrid'), new Direccion('Orense','20', '2', 'Oficina 10', 28020, 'Madrid', 'Madrid')],
        [new Email('Personal','correopersonal@gmail.com'), new Email('Profesional','correolaboral@empresa.com')],
        [new Telefonos('Móvil', 678999999), new Telefonos('Fijo',912345789)], 'Es alumna del curso "Desarrollo Full Stack, Grupo 4' )

let persona2 = new Persona ('Aitana', 'Pérez Gómez', 40, '45678907G', new Date(9/11/1980), 'Verde', 'Mujer',
        [new Direccion('Nicolás Salmerón', 's/n', 'Local', 'B', 28066, 'Madrid', 'Madrid')],
        [new Email('Trabajo', 'micorreo@aitana.com')],
        [new Telefonos('Móvil', 612345676), new Telefonos('Fijo', 912456780)],
            'Lorem ipsum dolor sit amet.')

let persona3 = new Persona ('Peppa', 'Pig', 5, 'Desconocido', new Date (28/11/2004), 'Rojo', 'Mujer',
        [new Direccion('Montaña verde','s/n', 'Casa', 'Sin letra', 2345678, 'Pueblo de Peppa Pig', 'Provincia Familia Pig,')],
        [new Email('Personal','familiapig@gmail.com')],
        [new Telefonos('Casa',0o1234567)],'La familia Pig es una familia de dibujos animados.')


persona1.imprimirPersona()

persona2.imprimirPersona()

persona3.imprimirPersona()

let listaPersonas: Array<Persona> = [persona1, persona2, persona3]

let personaBuscar: any

for (let i in listaPersonas){
        if (listaPersonas[i].dni == '00011122F'){
            personaBuscar = listaPersonas[i];
            personaBuscar.direccion.push(new Direccion ('Nueva calle','20','Bajo','B',20000,'Nuevapoblación','Nuevaprovincia'));
            personaBuscar.mails.push(new Email ('personal','nuevoemail@mail.com'));
            personaBuscar.telefonos.push(new Telefonos ('Oficina', 345678901));
            break;
        }

    }

console.log(`============================================================================\n
IMPRIMIR DE NUEVO LOS 3 REGISTROS CON LOS CAMBIOS REALIZADOS \n
============================================================================\n\n`)

persona1.imprimirPersona()

persona2.imprimirPersona()

persona3.imprimirPersona()


//console.log(listaPersonas[0])


