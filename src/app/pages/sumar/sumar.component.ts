import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-sumar',
  templateUrl: './sumar.component.html',
  styles: [],
})
export class SumarComponent implements OnInit {
  //obtener valor despues de ecribir
  dbouncer: Subject<string> = new Subject();

  numero1: number = 0;
  numero2: number = 0;
  resultado: boolean = false;

  //solo se dispara al ser creado 1 vez
  ngOnInit() {
    this.dbouncer.pipe(debounceTime(300)).subscribe((valor) => {
      console.log('debouncer:', valor);
    });
  }

  sumar() {
    this.resultado = true;
    console.log('sumando');
  }
}
