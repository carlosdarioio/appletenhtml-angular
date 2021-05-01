import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-potencia',
  templateUrl: './potencia.component.html',
  styles: [],
})
export class PotenciaComponent implements OnInit {
  base: number = 0;
  exponente: number = 0;
  potencia: number = 0;
  resultado: boolean = false;
  ngOnInit() {}

  calcular() {
    this.potencia = Math.pow(this.base, this.exponente);
    this.resultado = true;
  }
}
