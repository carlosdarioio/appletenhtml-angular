import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-par-oimpar',
  templateUrl: './par-oimpar.component.html',
  styles: [],
})
export class ParOImparComponent implements OnInit {
  numero: number = 0;
  introdujo: number = 0;
  resultado: string = '';
  mostrar: boolean = false;

  //solo se dispara al ser creado 1 vez
  ngOnInit() {}

  calcular() {
    this.introdujo = this.numero;
    if (this.introdujo % 2 == 0) {
      this.resultado = 'par';
    } else {
      this.resultado = 'impar';
    }
    this.mostrar = true;
  }
}
