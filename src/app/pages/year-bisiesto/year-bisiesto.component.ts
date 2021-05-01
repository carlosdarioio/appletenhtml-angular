import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-year-bisiesto',
  templateUrl: './year-bisiesto.component.html',
  styles: [],
})
export class YearBisiestoComponent implements OnInit {
  numero: number = 0;
  introdujo: number = 0;
  resultado: string = '';
  mostrar: boolean = false;

  ngOnInit() {}

  calcular() {
    this.introdujo = this.numero;
    if (
      (this.introdujo % 100 != 0 && this.introdujo % 4 == 0) ||
      this.introdujo % 400 == 0
    ) {
      this.resultado = 'es bisiesto';
    } else {
      this.resultado = 'no es bisiesto';
    }
    this.mostrar = true;
  }
}
