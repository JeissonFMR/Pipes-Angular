import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent {

  //TODO: i18nsSelect
  nombre: string = 'Susanna';
  genero: string = 'femenino';

  invitacionMapa = {
    'masculino': 'tenerlo',
    'femenino': 'tenerla'
  }

  //TODO: i18nsPlural
  clientes: string[] = ['Maria', 'Jiesson', 'Fernando', 'Karla', 'Julieth'];
  clientesMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando'

  }

  cambiarNombre() {
    this.nombre = 'Jeisson Montenegro';
    this.genero = 'masculino';

  }

  borrarCLiente() {
    this.clientes.pop()
  }


  // TODO: KeyValue Pipe
  persona = {
    nombre: 'Jeisson',
    edad: 22,
    diereccion: 'Ancuya, Nariño'
  }

  // TODO: async pipe
  miObservable = interval(1000)
}
