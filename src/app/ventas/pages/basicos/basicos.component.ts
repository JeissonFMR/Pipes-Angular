import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {

  nombreLower: string = 'jeisson'
  nombreUpper: string = 'JEISSON'
  nombreCompleto: string = 'Jeisson MOntenegro'



  fecha: Date = new Date
}
