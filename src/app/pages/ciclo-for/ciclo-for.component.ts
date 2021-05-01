import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciclo-for',
  templateUrl: './ciclo-for.component.html',
  styles: [],
})
export class CicloForComponent implements OnInit {
  numero: number = 0;
  resultado: boolean = false;
  numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  ngOnInit() {}

  calcular() {
    if (this.numero > 0) {
      this.resultado = true;
    } else {
      this.resultado = false;
    }
  }
}
